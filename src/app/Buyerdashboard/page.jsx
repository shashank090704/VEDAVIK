
'use client';
 
import React, { useContext, useEffect, useState } from 'react'
import { LayoutDashboard, Contact as FileContract, Shield, Book, LogOut, User, Sprout, ChevronRight, Bell } from 'lucide-react';




import Navbar from '@/components/Navbar/Navbar';
import axios from 'axios';
import Buyers from '@/components/Slidebar/Buyers';
import Chart from '@/components/Chart/Chart';


import Order from '../../components/ordercomponentforbuyer/Order';
import styles from '../../Stylesheet/buyerorderlist.module.css'


function Page() {  
    const user = {
        name: "John Farmer",
        email: "john@farmtech.com"
      };
    const [buyerd, setbuyerd] = useState("");  
     const [orders, setOrders] = useState([]);
     const [loading, setLoading] = useState(true);
    //  const[ buyerid , setbuyerid] = useState('');
    const logout = async () => {
        try {
          const res = await axios.post("/api/farmer/logout");
          window.location.href = '/';  // Use window.location.href for navigation
        } catch (error) {
          console.error(error);  // Use console.error for logging errors
        }
      };
      const getOrders = async () => {
        try {
            if(buyerd && buyerd.id){
              // const buyerid = buyerd.id;
            const res = await axios.post('/api/buyer/getlistoforder', { buyerid  });
            // console.log("hi");
            // console.log(res.data.orders, "order list");
            setOrders(res.data.orders); // Directly set the orders array
            console.log(orders, "oders")
            }
        } catch (err) {
            console.error("Error fetching orders:", err);
            setError("Failed to fetch orders");
        } finally {
            setLoading(false);
        }
    };
    const getBuyerd = async () => {
        try {
            console.log("Fetching buyer data...");
            const res = await axios.post("/api/buyer/getbuyerdata");
            console.log(res.data.data, 'dash board data');
            const buyerid = res.data.data._id;
            console.log(buyerid);
             await setbuyerd(res.data.data);
            const res2 = await axios.post('/api/buyer/getlistoforder', { buyerid  });
           
            
            console.log(res2.data.orders, "buyerd") 
             setOrders(res2.data.orders) ;
            console.log(orders , "orders");
            console.log(res2.data.orders, "res2data")
        } catch (error) {
            console.error("Error fetching buyer data:", error);
        }
    };

    useEffect(() => {
        getBuyerd();

    }, []);

    useEffect(()=>{
      console.log(orders , "orders data ")
    } ,[orders])

   

    

    const dashboardCards = [
        {
          title: "Active Contracts",
          value: "12",
          trend: "+2 this month",
          color: "bg-green-500"
        },
        {
          title: "Crop Yield",
          value: "892 tons",
          trend: "+5% vs last season",
          color: "bg-blue-500"
        },
        {
          title: "Weather Alert",
          value: "Clear",
          trend: "Perfect farming conditions",
          color: "bg-yellow-500"
        }
      ];
    
      const recentGuides = [
        "Sustainable Farming Practices 2025",
        "Crop Rotation Techniques",
        "Water Conservation Methods"
      ];

    return (
      

        <div className="min-h-screen bg-gray-50 text-black " style={{scrollbarWidth : 'none'}}>
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
                <p className="text-sm font-medium text-gray-800">{buyerd ? buyerd.name : user.name}</p>
                <p className="text-xs text-gray-500">{buyerd ? buyerd.email : user.email}</p>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-100">
               <button onClick={logout}> <LogOut className="h-5 w-5 text-red-600" /> </button>
              </button>
            </div>
          </div>
        </nav>
  
        <div className="flex h-[calc(100vh-64px)]">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-sm p-4">
            <nav className="space-y-2">
              <div  className="flex items-center space-x-3 px-4 py-3 text-green-600 bg-green-50 rounded-lg">
                <LayoutDashboard className="h-5 w-5" />
                <a href='/Buyerorderlist'> <span className="font-medium">Orders</span> </a>
              </ div>
              <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <FileContract className="h-5 w-5" />
               <a href='/Createorder'> <span>Create Contract</span> </a>
              </div>
              <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Shield className="h-5 w-5" />
                <span>Contract Management</span>
              </div>
              < div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
                <Book className="h-5 w-5" />
                <a href='/Farmerguide'><span>AI Supp</span> </a>
              </div>
            </nav>
          </aside>
  
          {/* Main Content */}
          <main className="flex-1 p-6 overflow-y-auto" style={{scrollbarWidth : 'none'}}>
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
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Recent Contracts</h2>
                  <a href='/Buyerorderlist'><button className="text-green-600 hover:text-green-700 text-sm font-medium">View All</button></a>
                </div>
                <div className="space-y-4 text-black">
                  {/* {orders.map((ord ) => (
                    // <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-800">Name -{ord.name}</p>
                        <p className="text-sm text-gray-500">Wheat Supply - {ord.quantity}</p>
                        <p className="font-medium text-gray-800">Contract #{ }</p>
                        <p className="text-sm text-gray-500">Wheat Supply - 200 tons</p>
                      </div>
                    //   <ChevronRight className="h-5 w-5 text-gray-400" />
                    // </div>
                    // <div>hi</div> */}

<div className='max-h-100 overflow-y-scroll ' style={{scrollbarWidth : "none"}} >
            <div >
            {orders.length === 0 ? (
                <div>No orders available</div>
            ) : (
                orders.map((order) => (
                    order.tempfarmid && order.tempfarmid.length > 0 ? (
                        order.tempfarmid.map((tempfarmer, index) => ( 
                            tempfarmer ? (
                                <React.Fragment key={`${order._id}-${index}`}>
                                    <Order order={order} tempfarmer={tempfarmer} />
                                    {/* <h1>{tempfarmer} hi</h1> */}
                                </React.Fragment>
                            ) : null
                        ))
                    ) 
                    : (
                        <div key={order._id}></div>
                    )
                ))
            )}  
            </div>
        </div>

                   

                    
               
                </div>
              </div>
  
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">Latest Farming Guides</h2>
                  <button className="text-green-600 hover:text-green-700 text-sm font-medium">View All</button>
                </div>
                <div className="space-y-4">
                  {recentGuides.map((guide, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Book className="h-5 w-5 text-gray-400" />
                        <p className="font-medium text-gray-800">{guide}</p>
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

    );
}

export default Page;

