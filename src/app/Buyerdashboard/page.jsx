
'use client';
 
import React, { useEffect, useState } from 'react';
import { LayoutDashboard, FileText, Shield, Book, LogOut, Sprout, Bell, Loader2 } from 'lucide-react';
import axios from 'axios';
import Order from '../../components/ordercomponentforbuyer/Order';

function Page() {  
  const [buyerd, setBuyerd] = useState(null);  
  const [pendingOrders, setPendingOrders] = useState([]);
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const logout = async () => {
    try {
      await axios.post("/api/farmer/logout");
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  const getBuyerData = async () => {
    try {
      setLoading(true);
      
      console.log("Fetching buyer data...");
      const res = await axios.post("/api/buyer/getbuyerdata");
      console.log(res.data.data, 'dashboard data');
      const buyerid = res.data.data._id;
      console.log(buyerid);
      setBuyerd(res.data.data);
      
      // Fetch orders
      const ordersRes = await axios.post('/api/buyer/getlistoforder', { buyerid });
      console.log(ordersRes.data.orders, "buyer orders");
      
      const allOrders = ordersRes.data.orders || [];
      
      // Filter pending and accepted orders (recent 5)
      const pending = allOrders.filter(order => !order.isaccepted).slice(0, 5);
      const accepted = allOrders.filter(order => order.isaccepted).slice(0, 5);
      
      setPendingOrders(pending);
      setAcceptedOrders(accepted);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching buyer data:", error);
      setError("Failed to load data");
      setLoading(false);
    }
  };

  useEffect(() => {
    getBuyerData();
  }, []);

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-16 w-16 text-green-600 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Loading Dashboard...</h2>
          <p className="text-gray-600">Please wait while we fetch your data</p>
        </div>
      </div>
    );
  }

  // Error Screen
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="bg-red-100 text-red-700 p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-semibold mb-2">Error Loading Data</h2>
            <p>{error}</p>
            <button 
              onClick={getBuyerData}
              className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Sprout className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-gray-800">Vrishti</span>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{buyerd?.name}</p>
              <p className="text-xs text-gray-500">{buyerd?.email}</p>
            </div>
            <button onClick={logout} className="p-2 rounded-full hover:bg-gray-100">
              <LogOut className="h-5 w-5 text-red-600" />
            </button>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm p-4">
          <nav className="space-y-2">
            <a href='/Buyerorderlist' className="flex items-center space-x-3 px-4 py-3 text-green-600 bg-green-50 rounded-lg">
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </a>
            <a href='/Createorder' className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <FileText className="h-5 w-5" />
              <span>Create Contract</span>
            </a>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Shield className="h-5 w-5" />
              <span>Contract Management</span>
            </div>
            <a href='/Farmerguide' className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Book className="h-5 w-5" />
              <span>AI Support</span>
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">
                    {pendingOrders.length + acceptedOrders.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Orders</p>
                  <p className="text-3xl font-bold text-yellow-600 mt-1">{pendingOrders.length}</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <Loader2 className="h-6 w-6 text-yellow-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">In Progress</p>
                  <p className="text-3xl font-bold text-green-600 mt-1">{acceptedOrders.length}</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Orders Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Pending Orders */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Pending Orders</h2>
                <a href='/Buyerorderlist'>
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                    View All
                  </button>
                </a>
              </div>
              <div className="max-h-96 overflow-y-auto" style={{scrollbarWidth: 'none'}}>
                {pendingOrders.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>No pending orders</p>
                  </div>
                ) : (
                  pendingOrders.map((order) => (
                    order.tempfarmid && order.tempfarmid.length > 0 ? (
                      order.tempfarmid.map((tempfarmer, index) => ( 
                        tempfarmer ? (
                          <React.Fragment key={`${order._id}-${index}`}>
                            <Order order={order} tempfarmer={tempfarmer} />
                          </React.Fragment>
                        ) : null
                      ))
                    ) : (
                      <div key={order._id} className="p-4 bg-gray-50 rounded-lg mb-3">
                        <p className="font-semibold text-gray-800">{order.name}</p>
                        <p className="text-sm text-gray-600">No farmers assigned yet</p>
                      </div>
                    )
                  ))
                )}
              </div>
            </div>

            {/* Orders In Progress */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Orders In Progress</h2>
                <a href='/Buyerorderlist'>
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                    View All
                  </button>
                </a>
              </div>
              <div className="max-h-96 overflow-y-auto" style={{scrollbarWidth: 'none'}}>
                {acceptedOrders.length === 0 ? (
                  <div className="text-center py-8 text-gray-500">
                    <p>No orders in progress</p>
                  </div>
                ) : (
                  acceptedOrders.map((order) => (
                    order.tempfarmid && order.tempfarmid.length > 0 ? (
                      order.tempfarmid.map((tempfarmer, index) => ( 
                        tempfarmer ? (
                          <React.Fragment key={`${order._id}-${index}`}>
                            <Order order={order} tempfarmer={tempfarmer} />
                          </React.Fragment>
                        ) : null
                      ))
                    ) : (
                      <div key={order._id} className="p-4 bg-gray-50 rounded-lg mb-3">
                        <p className="font-semibold text-gray-800">{order.name}</p>
                        <p className="text-sm text-gray-600">No farmers assigned yet</p>
                      </div>
                    )
                  ))
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;