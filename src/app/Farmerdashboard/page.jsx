

'use client'
import {
  LayoutDashboard,
  FileText,
  Shield,
  Book,
  LogOut,
  User,
  Sprout,
  Bell,
  Loader2
} from 'lucide-react';
import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import Order from '../../components/ordercomponetforfarmer/Order';

function FarmerDashboard() {
  const user = {
    name: "John Farmer",
    email: "john@farmtech.com"
  };

  const [farmData, setFarmData] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [farmerLoading, setFarmerLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('new');

  // ✅ normalize farmerId once
  const farmerId = farmData?._id?.toString();

  const logout = async () => {
    try {
      await axios.post("/api/farmer/logout");
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getFarmerData = async () => {
      setFarmerLoading(true);
      try {
        const res = await axios.post('/api/farmer/getfarmerdata');
        setFarmData(res.data.data);
      } catch (err) {
        console.error('Error fetching farmer data:', err);
      } finally {
        setFarmerLoading(false);
      }
    };
    getFarmerData();
  }, []);

  useEffect(() => {
    if (farmerId) getOrders();
  }, [farmerId]);

  const getOrders = async () => {
    setLoading(true);
    try {
      const res = await axios.post('/api/farmer/getlistoforder');
      setOrders(res.data.orders || []);
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  // ✅ FILTERED ORDERS (SAFE)
  const filteredOrders = useMemo(() => {
    if (!farmerId) return [];

    switch (activeTab) {
      case 'accepted':
        return orders.filter(
          order => order?.farmerid?.toString() === farmerId
        );

      case 'negotiating':
        return orders.filter(
          order =>
            !order?.isaccepted &&
            order?.tempfarmid?.some(id => id?.toString() === farmerId)
        );

      case 'new':
        return orders.filter(
          order =>
            !order?.isaccepted &&
            (
              !order?.tempfarmid ||
              !order.tempfarmid.some(id => id?.toString() === farmerId)
            )
        );

      default:
        return [];
    }
  }, [orders, activeTab, farmerId]);

  // ✅ DASHBOARD CARDS (SAFE)
  const dashboardCards = useMemo(() => {
    if (!farmerId) {
      return [
        { title: "Accepted Orders", value: "0", trend: "Active contracts", color: "bg-green-500" },
        { title: "Negotiating", value: "0", trend: "In progress", color: "bg-blue-500" },
        { title: "New Orders", value: "0", trend: "Available now", color: "bg-yellow-500" }
      ];
    }

    return [
      {
        title: "Accepted Orders",
        value: orders.filter(
          order => order?.farmerid?.toString() === farmerId
        ).length.toString(),
        trend: "Active contracts",
        color: "bg-green-500"
      },
      {
        title: "Negotiating",
        value: orders.filter(
          order =>
            !order?.isaccepted &&
            order?.tempfarmid?.some(id => id?.toString() === farmerId)
        ).length.toString(),
        trend: "In progress",
        color: "bg-blue-500"
      },
      {
        title: "New Orders",
        value: orders.filter(
          order =>
            !order?.isaccepted &&
            (
              !order?.tempfarmid ||
              !order.tempfarmid.some(id => id?.toString() === farmerId)
            )
        ).length.toString(),
        trend: "Available now",
        color: "bg-yellow-500"
      }
    ];
  }, [orders, farmerId]);

  if (farmerLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-12 w-12 text-green-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black" style={{ scrollbarWidth: "none" }}>
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
              <p className="text-sm font-medium text-gray-800">
                {farmData?.name || user.name}
              </p>
              <p className="text-xs text-gray-500">
                {farmData?.email || user.email}
              </p>
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
            <div className="flex items-center space-x-3 px-4 py-3 text-green-600 bg-green-50 rounded-lg">
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <FileText className="h-5 w-5" />
              <a href='/Farmerorderlist'>Find Contract</a>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Shield className="h-5 w-5" />
              <span>Security</span>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Book className="h-5 w-5" />
              <a href='/Farmerguide'>Farming Guide</a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {dashboardCards.map((card, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6">
                <div className={`w-12 h-12 ${card.color} rounded-lg flex items-center justify-center mb-4`}>
                  <User className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{card.title}</h3>
                <p className="text-2xl font-bold mt-2">{card.value}</p>
                <p className="text-sm text-gray-500 mt-1">{card.trend}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Orders</h2>
            </div>

            {/* Tabs */}
            <div className="flex space-x-4 border-b mb-4">
              {['new', 'negotiating', 'accepted'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 ${
                    activeTab === tab
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-500'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Orders */}
            {loading ? (
              <div className="flex justify-center py-10">
                <Loader2 className="h-8 w-8 text-green-600 animate-spin" />
              </div>
            ) : filteredOrders.length > 0 ? (
              filteredOrders.map(order => (
                <Order key={order._id} order={order} farmerid={farmData._id} />
              ))
            ) : (
              <p className="text-center text-gray-500 py-10">
                No orders available
              </p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default FarmerDashboard;
