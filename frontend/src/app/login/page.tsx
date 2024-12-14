'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { useCookies } from "react-cookie";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const [cookies, setCookie] = useCookies();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + '/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setCookie('token', data.user.token);
        router.push('/');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (err) {
      setError('An unexpected error occurred');
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-100 p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-center text-3xl font-bold text-gray-800 mb-6">
            Welcome Back
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Sign in to continue to your account
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label 
                htmlFor="email" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <div className="relative">
                <input
                  id="email"
                  type="email"
                  required
                  className="
                    w-full 
                    px-4 
                    py-3 
                    border 
                    border-gray-300 
                    rounded-lg 
                    pr-10
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-indigo-500 
                    focus:border-transparent
                    transition-all
                    duration-300
                  "
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Mail 
                  className="
                    absolute 
                    right-3 
                    top-1/2 
                    transform 
                    -translate-y-1/2 
                    text-gray-400
                  "
                  size={20}
                />
              </div>
            </div>

            <div className="relative">
              <label 
                htmlFor="password" 
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="
                    w-full 
                    px-4 
                    py-3 
                    border 
                    border-gray-300 
                    rounded-lg 
                    pr-10
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-indigo-500 
                    focus:border-transparent
                    transition-all
                    duration-300
                  "
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                    absolute 
                    right-3 
                    top-1/2 
                    transform 
                    -translate-y-1/2 
                    text-gray-400
                    hover:text-indigo-600
                    focus:outline-none
                  "
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {error && (
              <div className="
                bg-red-50 
                border 
                border-red-200 
                text-red-700 
                px-4 
                py-3 
                rounded-lg 
                text-center
              ">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="
                w-full 
                bg-indigo-600 
                text-white 
                py-3 
                rounded-lg 
                hover:bg-indigo-700 
                focus:outline-none 
                focus:ring-2 
                focus:ring-indigo-500 
                focus:ring-offset-2
                transition-colors
                duration-300
              "
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}