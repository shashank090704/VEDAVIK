
'use client';

import Order from '@/components/ordercomponetforfarmer/Order';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Page() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [farmid, setFarmid] = useState("");
    const [activeTab, setActiveTab] = useState('all');
    
    const getFarmid = async () => {
        try {
            const res = await axios.post("/api/farmer/getfarmerdata");
            setFarmid(res.data.data._id);
        } catch (err) {
            console.error("Error fetching farmer data:", err);
            setError("Failed to fetch farmer data");
        }
    };
    
    const getOrders = async () => {
        try {
            const res = await axios.post('/api/farmer/getlistoforder');
           
            setOrders(res.data.orders);
            // console.log(res+"orders");
        } catch (err) {
            console.error("Error fetching orders:", err);
            setError("Failed to fetch orders");
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        getOrders();
        getFarmid();
    }, []);

    // Filter orders based on active tab
    const filteredOrders = activeTab === 'all' 
        ? orders 
        : orders.filter(order => order.status === activeTab);
    
    if (loading) {
        return (
            <div className="min-h-screen bg-amber-50 flex items-center justify-center">
                <div className="w-24 h-24 relative">
                    <div className="absolute w-full h-full border-4 border-amber-200 border-t-green-700 rounded-full animate-spin"></div>
                    <div className="absolute w-full h-full flex items-center justify-center">
                        <span className="text-xs font-medium text-green-800">Loading</span>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full border-l-4 border-red-500">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Connection Error</h2>
                        <p className="text-gray-600 mb-6">{error}</p>
                        <button 
                            onClick={() => {
                                setLoading(true);
                                setError(null);
                                getOrders();
                                getFarmid();
                            }}
                            className="px-6 py-3 bg-green-700 text-white font-medium rounded-lg shadow-md hover:bg-green-800 transition-colors"
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-amber-50 p-4 sm:p-6 md:p-8">
            <div className="max-w-7xl mx-auto">
                {/* Header with farm-themed design */}
                <div className="mb-8 bg-white rounded-2xl shadow-md p-6 border-l-4 border-green-700">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                            <div className="flex items-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-700 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h1 className="text-4xl font-bold text-green-800 tracking-tight">Farm Fresh Orders</h1>
                            </div>
                            <p className="text-amber-700 text-lg ml-11">From soil to table, manage your harvest deliveries</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="inline-flex items-center px-4 py-2 rounded-lg bg-green-700 text-white font-medium hover:bg-green-800 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add Harvest
                            </button>
                            <div className="inline-flex items-center px-4 py-2 rounded-lg bg-amber-100 text-amber-800 border border-amber-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                                <span className="font-medium">{orders.length}</span>
                                <span className="ml-1">Orders</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Tab Navigation - Themed with earth tones */}
                <div className="bg-white rounded-t-2xl shadow-md p-4 flex space-x-2 overflow-x-auto border-t-4 border-amber-400">
                    <button 
                        onClick={() => setActiveTab('all')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            activeTab === 'all' 
                                ? 'bg-green-700 text-white' 
                                : 'text-gray-700 hover:bg-green-50 hover:text-green-700'
                        }`}
                    >
                        All Orders
                    </button>
                    <button 
                        onClick={() => setActiveTab('pending')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            activeTab === 'pending' 
                                ? 'bg-amber-500 text-white' 
                                : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                        }`}
                    >
                        Pending
                    </button>
                    <button 
                        onClick={() => setActiveTab('processing')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            activeTab === 'processing' 
                                ? 'bg-blue-600 text-white' 
                                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                        }`}
                    >
                        Processing
                    </button>
                    <button 
                        onClick={() => setActiveTab('completed')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            activeTab === 'completed' 
                                ? 'bg-green-600 text-white' 
                                : 'text-gray-700 hover:bg-green-50 hover:text-green-600'
                        }`}
                    >
                        Completed
                    </button>
                </div>
                
                {/* Orders List with farm-themed styling */}
                <div className="bg-white rounded-b-2xl shadow-md p-6 mb-8">
                    {/* Section heading with icon */}
                    <div className="flex items-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-700 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        <h2 className="text-xl font-semibold text-green-800">
                            {activeTab === 'all' ? 'All Orders' : 
                             activeTab === 'pending' ? 'Pending Orders' :
                             activeTab === 'processing' ? 'Processing Orders' : 'Completed Orders'}
                        </h2>
                    </div>

                    {filteredOrders.length === 0 ? (
                        <div className="p-12 text-center bg-amber-50 rounded-xl border border-amber-100">
                            <div className="w-24 h-24 bg-amber-100 rounded-full mx-auto flex items-center justify-center mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-amber-800 mb-2">Your Field is Empty</h3>
                            <p className="text-amber-700 max-w-md mx-auto">
                                {activeTab === 'all' 
                                    ? "You don't have any orders to harvest yet. New orders will appear here when customers place them." 
                                    : `You don't have any ${activeTab} orders ready for harvest at the moment.`}
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            {filteredOrders.map((order) => (
                                <div key={order._id} className="border border-gray-200 rounded-xl overflow-hidden hover:border-green-300 hover:shadow-md transition-all bg-white">
                                    <div className="border-l-4 border-green-700">
                                        <div className="p-4">
                                            <div className="w-full overflow-visible">
                                                <Order order={order} farmerid={farmid} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                {/* Footer section with farm quote */}
                <div className="text-center p-4 text-amber-700 italic">
                    "The farmer is the only man in our economy who buys everything at retail, sells everything at wholesale, and pays the freight both ways."
                </div>
            </div>
        </div>
    );
}

export default Page;