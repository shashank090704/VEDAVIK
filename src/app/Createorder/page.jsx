

'use client'
import React, { useState } from 'react';
import axios from 'axios';

const Page = () => {
  const [formData, setFormData] = useState({
    cropName: '',
    duration: '',
    amountPerKg: '',
    quantity: '',
    city: '',
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ show: false, message: '', type: '' });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const cropOptions = [
    "Rice", "Wheat", "Corn", "Potato", "Tomato", "Onion", 
    "Sugarcane", "Cotton", "Soybean", "Mustard", "Pulses"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCropSelect = (crop) => {
    setFormData({
      ...formData,
      cropName: crop
    });
    setDropdownOpen(false);
  };

  const showNotification = (message, type) => {
    setNotification({ show: true, message, type });
    setTimeout(() => {
      setNotification({ show: false, message: '', type: '' });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await axios.post("/api/buyer/createorder", formData);
      console.log('Order created successfully:', res.data);
      showNotification("Your order has been successfully created!", "success");
      
      setFormData({
        cropName: '',
        duration: '',
        amountPerKg: '',
        quantity: '',
        city: '',
      });
    } catch (error) {
      console.error("Error creating order:", error);
      showNotification("Failed to create order. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  const totalCost = formData.amountPerKg && formData.quantity 
    ? (parseFloat(formData.amountPerKg) * parseFloat(formData.quantity)).toFixed(2) 
    : '0.00';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4 sm:px-6 lg:px-8 text-black">
      {notification.show && (
        <div className={`fixed top-4 right-4 max-w-md py-2 px-4 rounded-lg shadow-lg transition-all duration-300 ${
          notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {notification.message}
        </div>
      )}
      
      <div className="max-w-lg mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold text-green-800">Crop Purchase Request</h1>
          <p className="mt-2 text-gray-600">Connect directly with farmers by submitting your crop requirements</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-green-600 to-green-500 px-6 py-5 flex items-center">
            <div className="bg-white/20 p-3 rounded-full mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Create New Order</h2>
          </div>

          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="col-span-2">
                  <label htmlFor="cropName" className="block text-sm font-medium text-gray-700 mb-1">
                    Crop Name
                  </label>
                  <div className="relative">
                    <div className="relative">
                      <input
                        type="text"
                        id="cropName"
                        name="cropName"
                        value={formData.cropName}
                        onChange={handleChange}
                        required
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        placeholder="Select or type crop name"
                        onClick={() => setDropdownOpen(true)}
                      />
                      <button 
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center pr-3"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                    
                    {dropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base overflow-auto focus:outline-none sm:text-sm">
                        {cropOptions.map((crop, index) => (
                          <div
                            key={index}
                            onClick={() => handleCropSelect(crop)}
                            className="cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-green-50 text-gray-900"
                          >
                            {crop}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="duration" className="block text-sm font-medium text-gray-700 mb-1">
                    Contract Duration
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      id="duration"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      required
                      min="1"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="Duration"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-500">months</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Location
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder="City/Town/Village"
                  />
                </div>

                <div>
                  <label htmlFor="amountPerKg" className="block text-sm font-medium text-gray-700 mb-1">
                    Price per Kilogram
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">₹</span>
                    </div>
                    <input
                      type="number"
                      id="amountPerKg"
                      name="amountPerKg"
                      value={formData.amountPerKg}
                      onChange={handleChange}
                      required
                      min="0"
                      step="0.01"
                      className="block w-full pl-7 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="0.00"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-500">/kg</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                    Quantity Required
                  </label>
                  <div className="mt-1 relative rounded-md shadow-sm">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      required
                      min="1"
                      className="block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                      placeholder="0"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <span className="text-gray-500">kg</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">Estimated Total Cost:</span>
                  <span className="font-bold text-green-700 text-lg">₹ {totalCost}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ${
                    loading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    'Submit Order Request'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Farmers will review your order and contact you with offers</p>
        </div>
      </div>
    </div>
  );
};

export default Page;