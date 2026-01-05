
"use client"
import React, { useState } from 'react';
import { Leaf, ShoppingBag, ArrowRight, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

function BuyerSignup() {
  const router = useRouter();
  const [userType, setUserType] = useState('buyer');

  // Status States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Combined Form Data State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Reset states
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const res = await axios.post("/api/buyer/buyersignup", formData);
      console.log(res);

      // SUCCESS: Show congratulation message
      setMessage({ type: 'success', text: 'Congratulations! Account created successfully.' });
      setIsSubmitting(false);
      setIsRedirecting(true);

      // Wait 2 seconds so user can read the message before redirecting
      setTimeout(() => {
        router.push("/Buyerlogin");
      }, 2000);

    } catch (error) {
      console.error("Signup failed", error);

      // ERROR: Show error message
      setIsSubmitting(false);
      setIsRedirecting(false);
      
      // Extract error message from backend if available
      const errorMsg = error.response?.data?.message || 'Signup failed. Please try again.';
      setMessage({ type: 'error', text: errorMsg });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">

        {/* LEFT SECTION - Features */}
        <div className="hidden md:block space-y-8 p-8">
          <div className="flex items-center space-x-2">
            <Leaf className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-green-800">FarmConnect</h1>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Connect Farmers and Buyers Directly
            </h2>
            <p className="text-gray-600">
              Join our platform to revolutionize agricultural trade with direct farmer-to-buyer connections.
            </p>

            <div className="grid gap-4">
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Leaf className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">For Farmers</h3>
                  <p className="text-sm text-gray-600">
                    List your produce and connect with buyers directly
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ShoppingBag className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">For Buyers</h3>
                  <p className="text-sm text-gray-600">
                    Source fresh produce directly from local farmers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign up</h2>

          {/* USER TYPE SWITCHER */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-black">
            <button
              type="button"
              onClick={() => {
                setUserType('farmer');
                router.push('./Farmersignup');
              }}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all
                ${userType === 'farmer'
                  ? 'border-green-600 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-green-400'}
              `}
            >
              <Leaf className="w-5 h-5" />
              <span>Farmer</span>
            </button>

            <button
              type="button"
              onClick={() => setUserType('buyer')}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all
                ${userType === 'buyer'
                  ? 'border-green-600 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-green-400'}
              `}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Buyer</span>
            </button>
          </div>

          {/* FORM */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your name"
                disabled={isSubmitting || isRedirecting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your phone number"
                disabled={isSubmitting || isRedirecting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your email"
                disabled={isSubmitting || isRedirecting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your city"
                disabled={isSubmitting || isRedirecting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your password"
                disabled={isSubmitting || isRedirecting}
              />
            </div>

            {/* Error/Success Message Display */}
            {message.text && (
              <div className={`p-3 rounded-lg flex items-center space-x-2 text-sm ${
                message.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {message.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <span>{message.text}</span>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting || isRedirecting}
              className={`w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2
                ${(isSubmitting || isRedirecting) ? 'opacity-70 cursor-not-allowed' : ''}
              `}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : isRedirecting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Redirecting...</span>
                </>
              ) : (
                <>
                  <span>Sign Up</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/Buyerlogin" className="text-green-600 hover:text-green-700 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BuyerSignup;