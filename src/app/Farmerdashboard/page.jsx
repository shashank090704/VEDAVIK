
// import React, { useContext, useEffect, useState } from 'react'
// import styles from '../../Stylesheet/farmer.module.css';
// import Navbar from '@/components/Navbar/Navbar';
// import axios from 'axios';
// import Sidebar from '@/components/Slidebar/Slidebar';
// import Chart from '@/components/Chart/Chart';




// function page() {
//         const [ farmd , setfarmd] = useState("");
//   const getfarmerdta = async()=>{
//           const res = await axios.post("/api/farmer/getfarmerdata");
//            console.log(res.data , 'dash bodard');
//           await setfarmd(res.data.data);
//           console.log(farmd , "farmd")
//   }
//   useEffect(()=>{
//           console.log("hellow");
//            getfarmerdta();
//   } , [])
//   return (
     
// //   <div className={style.body}>
// //        <Navbar/>
// //        <div className={style.buttons}>
// //              <div className={style.butcon}>
// //             <button className={style.button}>  { farmd == "" ? "find " :  farmd.name}</button>
// //             <button className={style.button}>Conmtact Management</button>
// //             <button className={style.button}>Sequrity</button>
// //             <button className={style.button}>Farmer Guide</button>
// //             </div>  
// //        </div>
// //   </div>
// <>
// <div className={styles.appContainer}>
//       <Navbar/>
//       <div className={styles.mainContent}>
//       <Sidebar />
//         <Chart />
//       </div>
//     </div>
// </>
 
//   )
// }

// export default page 
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '@/components/Navbar/Navbar';
// import Sidebar from '@/components/Slidebar/Slidebar';
// import Chart from '@/components/Chart/Chart';
// import styles from './../../Stylesheet/farmer.module.css';

// const FarmerDashboard = () => {
//   const [farmData, setFarmData] = useState(null);

//   useEffect(() => {
//     const getFarmerData = async () => {
//       try {
//         const res = await axios.post('/api/farmer/getfarmerdata');
//         setFarmData(res.data.data);
//       } catch (err) {
//         console.error('Error fetching farmer data:', err);
//       }
//     };

//     getFarmerData();
//   }, []);

//   return (
//     <div className={styles.dashboardContainer}>
//       <Navbar />
//       <div className={styles.dashboardContent}>
//         <Sidebar />
//         <div className={styles.mainContent}>
//           <h1 className={styles.welcomeMessage}>
//             Welcome, {farmData ? farmData.name : 'Farmer'}!
//           </h1>
//           <Chart />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FarmerDashboard;

// 'use client'

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Navbar from '@/components/Navbar/Navbar';
// import Sidebar from '@/components/Slidebar/Slidebar';
// import Chart from '@/components/Chart/Chart';
// import styles from './../../Stylesheet/farmer.module.css';

// const FarmerDashboard = () => {
//   const [farmData, setFarmData] = useState(null);

//   useEffect(() => {
//     const getFarmerData = async () => {
//       try {
//         const res = await axios.post('/api/farmer/getfarmerdata');
//         setFarmData(res.data.data);
//       } catch (err) {
//         console.error('Error fetching farmer data:', err);
//       }
//     };

//     getFarmerData();
//   }, []);

//   return (
//     <div className={styles.dashboardContainer}>
//       <Navbar />
//       <div className={styles.dashboardContent}>
//         <Sidebar />
//         <div className={styles.mainContent}>
//           <h1 className={styles.welcomeMessage}>
//             Welcome, {farmData ? farmData.name : 'Farmer'}!
//           </h1>
//           <Chart />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FarmerDashboard;


'use client'
import { LayoutDashboard, Contact as FileContract, Shield, Book, LogOut, User, Sprout, ChevronRight, Bell } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '@/components/Navbar/Navbar';
import Sidebar from '@/components/Slidebar/Slidebar';
import Chart from '@/components/Chart/Chart';
import styles from './../../Stylesheet/farmer.module.css';
import Order  from '../../components/ordercomponetforfarmer/Order'
function FarmerDashboard() {
  const user = {
    name: "John Farmer",
    email: "john@farmtech.com"
  };

  const [farmData, setFarmData] = useState(null);
  const[ orders , setOrders] = useState("");
  const logout = async () => {
    try {
      const res = await axios.post("/api/farmer/logout");
      window.location.href = '/';  // Use window.location.href for navigation
    } catch (error) {
      console.error(error);  // Use console.error for logging errors
    }
  };

  useEffect(() => {
    const getFarmerData = async () => {
      try {
        const res = await axios.post('/api/farmer/getfarmerdata');
        setFarmData(res.data.data);
        console.log(farmData);
       
      } catch (err) {
        console.error('Error fetching farmer data:', err);
      }
    };

    getFarmerData();
    getOrders()
    
  }, []);
  

  useEffect(()=>{console.log(farmData )
    console.log("HII")
  },[farmData]);

  const getOrders = async () => {
    try {
        const res = await axios.post('/api/farmer/getlistoforder');
        console.log(res.data.orders)
        setOrders(res.data.orders);
    } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders");
    } finally {
        setLoading(false);
    }
};

// useEffect(() => {
//     getOrders();
   
// }, []);

// useEffect(()=>{
//   console.log(farmData + "orferssxc")
// },[farmData])


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
    <div className="min-h-screen bg-gray-50 text-black " style={{scrollbarWidth :"none"}}>
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Sprout className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold text-gray-800">Vrishti</span>
        </div>
        
        <div className="flex items-center space-x-6 "  style={{scrollbarWidth :"none"}}>
          <button className="p-2 rounded-full hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <p className="text-sm font-medium text-gray-800">{farmData ? farmData.name : user.name}</p>
              <p className="text-xs text-gray-500">{farmData ? farmData.email : user.email}</p>
            </div>
            <button className="p-2 rounded-full hover:bg-gray-100">
             <div onClick={logout}> <LogOut className="h-5 w-5 text-red-600" /> </div>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex h-[calc(100vh-64px)]"   style={{scrollbarWidth :"none"}}>
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm p-4">
          <nav className="space-y-2">
            <div  className="flex items-center space-x-3 px-4 py-3 text-green-600 bg-green-50 rounded-lg">
              <LayoutDashboard className="h-5 w-5" />
              <span className="font-medium">Dashboard</span>
            </ div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <FileContract className="h-5 w-5" />
             <a href='/Farmerorderlist'> <span>Find Contract</span> </a>
            </div>
            <div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Shield className="h-5 w-5" />
              <span>Security</span>
            </div>
            < div className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg">
              <Book className="h-5 w-5" />
              <a href='/Farmerguide'><span>Farming Guide</span> </a>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto"  style={{scrollbarWidth :"none"}}>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="bg-white rounded-xl shadow-sm p-6  ">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Recent Contracts</h2>
                <a href='/Farmerorderlist' className="text-green-600 hover:text-green-700 text-sm font-medium">View All</a>
              </div>
              {/* <div className="space-y-4 text-black">
                {/* {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-800">Contract #{2023 + index}</p>
                      <p className="text-sm text-gray-500">Wheat Supply - 200 tons</p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
          m        </div>
                ))} */}

                {/* {orders ? (
                  orders.map((ord)=>{
                    <Order order={ord} farmerid={farmData._id}/>
                  })
                ):(<div> no order available</div>)}
              </div> */} 

              
{/* <div className='max-h-100 overflow-y-scroll ' style={{scrollbarWidth : "none"}} >
            <div >
            {orders.length === 0 ? (
                <div>No orders available</div>
            ) : (
                orders.map((order) => (
                                 <Order order={order} tempfarmer={farmData._id} />
                             
                
                ))         
                   
            )}  
            </div>
        </div> */}
        
<div className='max-h-100 overflow-y-scroll ' style={{scrollbarWidth : "none"}} >
            <div >
            {orders.length >  0 && farmData && farmData._id ? (

orders.map((order) => (
               
                <Order order={order} farmerid={farmData._id} />
              ))
            ) : (
                
                   
                             <div>
                               <div>No orders available</div>
                                    
                                    {/* {console.log(order)}
                                    {console.log(farmData._id)} */}
                                    {/* <h1>{tempfarmer} hi</h1> */}
                                    </div>
)}
                   
                
            
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

export default FarmerDashboard;

