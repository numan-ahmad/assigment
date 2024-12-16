const VehicalInfo = require("../models/VehicalInfo");
const vehicleSubmission = async (req, res) => {
  try {
    const { carModel, price, phoneNumber, maxPictures } = req.body;
    const files = req.files;
    if (!carModel || !price || !phoneNumber || !maxPictures) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newVchicalForm = new VehicalInfo({
      carModel,
      price,
      phoneNumber,
      maxPictures,
      images: files
    });
    await newVchicalForm.save();
    res.status(200).json({
      success: true,
      message: "Vehicle form submit successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

module.exports = {
  vehicleSubmission,
};
