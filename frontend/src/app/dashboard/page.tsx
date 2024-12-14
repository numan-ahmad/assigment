'use client';

import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCookies } from "react-cookie";

const Dashboard = () => {
    const [uploadedImages, setUploadedImages] = useState([]);
    const [imageUploadError, setImageUploadError] = useState('');
    const [submissionStatus, setSubmissionStatus] = useState({
        loading: false,
        success: false,
        error: null
    });
    const [cookies] = useCookies();
    const token = cookies['token']

    const validationSchema = Yup.object({
        carModel: Yup.string()
            .min(3, 'Car model must be at least 3 characters')
            .required('Car model is required'),
        price: Yup.number()
            .positive('Price must be a positive number')
            .required('Price is required'),
        phoneNumber: Yup.string()
            .matches(/^\d{11}$/, 'Phone number must be exactly 11 digits')
            .required('Phone number is required'),
        maxPictures: Yup.number()
            .min(1, 'Minimum 1 picture')
            .max(10, 'Maximum 10 pictures')
            .required('Number of pictures is required'),
    });

    const formik = useFormik({
        initialValues: {
            carModel: '',
            price: '',
            phoneNumber: '',
            maxPictures: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            setSubmissionStatus({
                loading: false,
                success: false,
                error: null
            });
            const formData = new FormData();
            formData.append('carModel', values.carModel);
            formData.append('price', values.price);
            formData.append('phoneNumber', values.phoneNumber);
            formData.append('maxPictures', values.maxPictures);
            uploadedImages.forEach((image: any) => {
                formData.append(`images`, image.file);
            });

            setSubmissionStatus({ loading: true, success: false, error: null });

            try {
                const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/api/vehicle-submission', {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Submission failed');
                }

                const result = await response.json();
                setSubmissionStatus({
                    loading: false,
                    success: true,
                    error: null
                });

                formik.resetForm();
                setUploadedImages([]);

                console.log('Submission successful:', result);
            } catch (error: any) {
                setSubmissionStatus({
                    loading: false,
                    success: false,
                    error: error.message
                });

                console.error('Submission error:', error);
            }
        },
    });

    const handleImageUpload = (event: any) => {
        const files = Array.from(event.target.files);
        const maxPictures = parseInt(formik.values.maxPictures);

        if (files.length > maxPictures) {
            setImageUploadError(`You can only upload up to ${maxPictures} pictures`);
            return;
        }
        setImageUploadError('');
        const imagePromises = files.map((file: any) => {
            return new Promise((resolve) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    resolve({
                        file,
                        preview: reader.result
                    });
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises).then((processedImages: any) => {
            setUploadedImages(processedImages);
        });
    };

    const removeImage = (index: number) => {
        const newImages = [...uploadedImages];
        newImages.splice(index, 1);
        setUploadedImages(newImages);
        setImageUploadError('');
    };

    const isImageUploadComplete = () => {
        const maxPictures = parseInt(formik.values.maxPictures);
        return uploadedImages.length === maxPictures;
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Vehicle Submission Form
                    </h2>
                </div>

                <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="carModel" className="block text-sm font-medium text-gray-700">
                                Car Model
                            </label>
                            <input
                                id="carModel"
                                name="carModel"
                                type="text"
                                className={`mt-1 block w-full rounded-md border px-3 py-2 ${formik.touched.carModel && formik.errors.carModel
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.carModel}
                            />
                            {formik.touched.carModel && formik.errors.carModel && (
                                <p className="mt-2 text-sm text-red-600">{formik.errors.carModel}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                                Price
                            </label>
                            <input
                                id="price"
                                name="price"
                                type="number"
                                className={`mt-1 block w-full rounded-md border px-3 py-2 ${formik.touched.price && formik.errors.price
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.price}
                            />
                            {formik.touched.price && formik.errors.price && (
                                <p className="mt-2 text-sm text-red-600">{formik.errors.price}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                className={`mt-1 block w-full rounded-md border px-3 py-2 ${formik.touched.phoneNumber && formik.errors.phoneNumber
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phoneNumber}
                            />
                            {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                                <p className="mt-2 text-sm text-red-600">{formik.errors.phoneNumber}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="maxPictures" className="block text-sm font-medium text-gray-700">
                                Max Number of Pictures (1-10)
                            </label>
                            <input
                                id="maxPictures"
                                name="maxPictures"
                                type="number"
                                min="1"
                                max="10"
                                className={`mt-1 block w-full rounded-md border px-3 py-2 ${formik.touched.maxPictures && formik.errors.maxPictures
                                    ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                                    : 'border-gray-300 focus:ring-indigo-500 focus:border-indigo-500'
                                    }`}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.maxPictures}
                            />
                            {formik.touched.maxPictures && formik.errors.maxPictures && (
                                <p className="mt-2 text-sm text-red-600">{formik.errors.maxPictures}</p>
                            )}
                        </div>
                    </div>

                    {formik.values.maxPictures && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Upload Images
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="file-upload"
                                                name="file-upload"
                                                type="file"
                                                className="sr-only"
                                                multiple
                                                accept="image/*"
                                                onChange={handleImageUpload}
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        Upload {formik.values.maxPictures} PNG, JPG, GIF up to 10MB
                                    </p>
                                </div>
                            </div>

                            {imageUploadError && (
                                <p className="mt-2 text-sm text-red-600">{imageUploadError}</p>
                            )}

                            {uploadedImages.length > 0 && (
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {uploadedImages.map((image: any, index) => (
                                        <div key={index} className="relative">
                                            <img
                                                src={image.preview}
                                                alt={`Upload ${index + 1}`}
                                                className="w-20 h-20 object-cover rounded"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => removeImage(index)}
                                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-4 w-4"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                    {submissionStatus.loading && (
                        <div className=" bg-red-50 
                            border 
                            border-green-200 
                            text-green-700 
                            px-4 
                            py-3 
                            rounded-lg 
                            text-center">Submitting...</div>
                    )}
                    {submissionStatus.success && (
                        <div className="bg-green-50 
                        border 
                        border-green-200 
                        text-green-700 
                        px-4 
                        py-3 
                        rounded-lg 
                        text-center">Submission Successful!</div>
                    )}
                    {submissionStatus.error && (
                        <div className="bg-red-50 
                        border 
                        border-red-200 
                        text-red-700 
                        px-4 
                        py-3 
                        rounded-lg 
                        text-center">
                            Submission Failed: {submissionStatus.error}
                        </div>
                    )}
                    <div>
                        <button
                            type="submit"
                            disabled={
                                !(
                                    formik.isValid &&
                                    formik.dirty &&
                                    formik.values.maxPictures &&
                                    isImageUploadComplete() &&
                                    !submissionStatus.loading
                                )
                            }
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submissionStatus.loading ? 'Submitting...' : 'Submit Vehicle Information'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Dashboard;