

'use client'
import React, { useState } from 'react';
import { Leaf, ShoppingBag, ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

function Page() {
  const router = useRouter();
  const [userType, setUserType] = useState('farmer');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  
  // State for loading (API call)
  const [loading, setLoading] = useState(false);
  // State for redirecting (Success delay)
  const [redirecting, setRedirecting] = useState(false);
  // State for messages
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userType !== 'farmer') {
      alert('Please select "Farmer" to login.');
      return;
    }

    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const res = await axios.post('/api/farmer/farmerlogin', {
        phone,
        password,
      });

      // --- Success Block ---
      console.log('Login success:', res.data);
      setLoading(false); // Stop loading spinner
      setRedirecting(true); // Start redirect state
      setMessage({ text: 'Login successful! Redirecting...', type: 'success' });
      
      // Wait 1.5 seconds so user sees the success message, then push
      setTimeout(() => {
        router.push('/Farmerdashboard');
      }, 1500);

    } catch (error) {
      // --- Error Block ---
      console.error('Login failed:', error);
      setLoading(false);
      
      // specific check for 404 (User not found) from backend
      if (error.response && error.response.status === 404) {
        setMessage({ text: 'Account not found. Please Sign Up first.', type: 'error' });
      } else if (error.response && error.response.status === 401) {
        setMessage({ text: 'Invalid password.', type: 'error' });
      } else {
        setMessage({ text: 'Something went wrong. Please try again.', type: 'error' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        
        {/* Left side - Features */}
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
                  <p className="text-sm text-gray-600">List your produce and connect with buyers directly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/60 backdrop-blur">
                <div className="p-2 bg-green-100 rounded-lg">
                  <ShoppingBag className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">For Buyers</h3>
                  <p className="text-sm text-gray-600">Source fresh produce directly from local farmers</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Sign in form */}
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md w-full mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Sign In</h2>
          
          {/* User Type Selection */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-black">
            <button
              type="button"
              onClick={() => setUserType('farmer')}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all ${
                userType === 'farmer'
                  ? 'border-green-600 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-green-400'
              }`}
            >
              <Leaf className="w-5 h-5" />
              <span>Farmer</span>
            </button>
            
            <button
              type="button"
              onClick={() => {
                setUserType('buyer');
                router.push('./Buyerlogin');
              }}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg border-2 transition-all ${
                userType === 'buyer'
                  ? 'border-green-600 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-green-400'
              }`}
            >
              <ShoppingBag className="w-5 h-5" />
              <span>Buyer</span>
            </button>
          </div>

          {/* Sign in Form */}
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-green-600 focus:ring-green-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-green-600 hover:text-green-700">
                Forgot password?
              </a>
            </div>

            {/* Message Display Area */}
            {message.text && (
              <div className={`p-3 rounded-lg text-sm ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-700 border border-green-200' 
                  : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading || redirecting}
              className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center space-x-2 disabled:bg-green-400 disabled:cursor-not-allowed"
            >
              {redirecting ? (
                // State 3: Redirecting (Success)
                <span>Redirecting...</span>
              ) : loading ? (
                // State 2: Submitting (API Call)
                <span>Submitting...</span>
              ) : (
                // State 1: Default
                <>
                  <span>Sign In</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="/Farmersignup" className="text-green-600 hover:text-green-700 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;