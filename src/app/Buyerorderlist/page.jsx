
// 'use client';
// import Navbar from '../../components/Navbar/Navbar';
// import Order from '@/components/ordercomponentforbuyer/Order';
// import axios from 'axios';
// import styles from '../../Stylesheet/buyerorderlist.module.css'
// import React, { useEffect, useState } from 'react';


// function Buyerorderlist() {
//     const [orders, setOrders] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [buyerid, setBuyerId] = useState("");

//     const getBuyerId = async () => {
//         try {
//             const res = await axios.post("/api/buyer/getbuyerdata");
//             console.log(res.data.data._id, "buyer");
//             setBuyerId(res.data.data._id);
//         } catch (err) {
//             console.error("Error fetching buyer data:", err);
//             setError("Failed to fetch buyer data");
//         }
//     };

//     const getOrders = async () => {
//         try {
//             if(buyerid){
//             const res = await axios.post('/api/buyer/getlistoforder', { buyerid });
//             // console.log("hi");
//             // console.log(res.data.orders, "order list");
//             setOrders(res.data.orders); // Directly set the orders array
//             }
//         } catch (err) {
//             console.error("Error fetching orders:", err);
//             setError("Failed to fetch orders");
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (!buyerid) {
//             getBuyerId();
//         } else {
//             // console.log(buyerid , "int useeffect")
//             getOrders();
//         }
//     }, [buyerid]);

//     // Debugging outputs
//     if( buyerid && orders ){
//     console.log(buyerid, "buyer ID 12");
//     console.log(orders, "orders 12");
//     }

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div><Navbar/>
//         <div className={styles.body}>
        
//         <div className={styles.bodyone}>
            
       
//         <div className={styles.orderbox}>
//             <div className={styles.orderlistcontainer}>
//             {orders.length === 0 ? (
//                 <div>No orders available</div>
//             ) : (
//                 orders.map((order) => (
//                     order.tempfarmid && order.tempfarmid.length > 0 ? (
//                         order.tempfarmid.map((tempfarmer, index) => ( 
//                             tempfarmer ? (
//                                 <React.Fragment key={`${order._id}-${index}`}>
//                                     <Order order={order} tempfarmer={tempfarmer} />
//                                     {/* <h1>{tempfarmer} hi</h1> */}
//                                 </React.Fragment>
//                             ) : null
//                         ))
//                     ) 
//                     : (
//                         <div key={order._id}></div>
//                     )
//                 ))
//             )}  
//             </div>
//         </div>
//         </div>
//     </div>
//     </div>
//     );
// }



// export default Buyerorderlist;




// 'use client';

// import React, { useEffect, useState } from 'react';
// import Order from '@/components/ordercomponentforbuyer/Order';
// import axios from 'axios';

// function Buyerorderlist() {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [buyerid, setBuyerId] = useState("");

//   const getBuyerId = async () => {
//     try {
//       const res = await axios.post("/api/buyer/getbuyerdata");
//       setBuyerId(res.data.data._id);
//     } catch (err) {
//       console.error("Error fetching buyer data:", err);
//       setError("Failed to fetch buyer data");
//     }
//   };

//   const getOrders = async () => {
//     try {
//       if (buyerid) {
//         const res = await axios.post('/api/buyer/getlistoforder', { buyerid });
//         setOrders(res.data.orders);
//       }
//     } catch (err) {
//       console.error("Error fetching orders:", err);
//       setError("Failed to fetch orders");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (!buyerid) {
//       getBuyerId();
//     } else {
//       getOrders();
//     }
//   }, [buyerid]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
//         <div className="flex flex-col items-center">
//           <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-green-600"></div>
//           <p className="mt-4 text-gray-700 font-medium">Loading your orders...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-6">
//         <div className="max-w-4xl mx-auto mt-8">
//           <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-5 rounded shadow">
//             <div className="flex items-center">
//               <svg className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
//               </svg>
//               <p><strong>Error: </strong>{error}</p>
//             </div>
//             <button 
//               onClick={() => window.location.reload()} 
//               className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded transition duration-150"
//             >
//               Try Again
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-4 md:p-8">
//       <div className="max-w-6xl mx-auto">
//         <header className="mb-8">
//           <h1 className="text-3xl font-bold text-green-800">My Orders</h1>
//           <p className="text-gray-600 mt-2">View and track all your purchase orders</p>
//         </header>
        
//         <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
//           <div className="p-6 bg-gradient-to-r from-green-500 to-green-600 text-white">
//             <div className="flex justify-between items-center">
//               <h2 className="text-xl font-semibold">Order History</h2>
//               <span className="bg-white text-green-700 px-3 py-1 rounded-full text-sm font-medium">
//                 {orders.length} {orders.length === 1 ? 'Order' : 'Orders'}
//               </span>
//             </div>
//           </div>
          
//           <div className="divide-y divide-gray-200">
//             {orders.length === 0 ? (
//               <div className="p-12 text-center">
//                 <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
//                   <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
//                   </svg>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders available</h3>
//                 <p className="text-gray-500 max-w-md mx-auto">You haven't placed any orders yet. Start shopping to see your orders here.</p>
//                 <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-lg transition duration-150 shadow-md">
//                   Browse Products
//                 </button>
//               </div>
//             ) : (
//               orders.map((order) => (
//                 order.tempfarmid && order.tempfarmid.length > 0 ? (
//                   order.tempfarmid.map((tempfarmer, index) => (
//                     tempfarmer ? (
//                       <div 
//                         key={`${order._id}-${index}`}
//                         className="p-5 hover:bg-green-50 transition duration-200"
//                       >
//                         <Order order={order} tempfarmer={tempfarmer} />
//                       </div>
//                     ) : null
//                   ))
//                 ) : (
//                   <div key={order._id}></div>
//                 )
//               ))
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Buyerorderlist;
'use client'
import { useEffect, useState } from "react"
import Order from "@/components/ordercomponentforbuyer/Order"
import axios from "axios"
import { ShoppingBag, AlertCircle, RefreshCw, ChevronRight } from "lucide-react"

export default function BuyerOrderList() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [buyerid, setBuyerId] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  const getBuyerId = async () => {
    try {
      const res = await axios.post("/api/buyer/getbuyerdata")
      setBuyerId(res.data.data._id)
    } catch (err) {
      console.error("Error fetching buyer data:", err)
      setError("Failed to fetch buyer data")
    }
  }

  const getOrders = async () => {
    try {
      if (buyerid) {
        const res = await axios.post("/api/buyer/getlistoforder", { buyerid })
        setOrders(res.data.orders)
      }
    } catch (err) {
      console.error("Error fetching orders:", err)
      setError("Failed to fetch orders")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!buyerid) {
      getBuyerId()
    } else {
      getOrders()
    }
  }, [buyerid])

  // Filter orders based on active tab
  const filteredOrders = orders.filter((order) => {
    if (activeTab === "all") return true
    return order.status === activeTab
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center max-w-md w-full">
          <div className="relative w-20 h-20 mb-6">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-green-100 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-t-4 border-green-600 rounded-full animate-spin"></div>
            <ShoppingBag className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-600 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Loading Your Orders</h3>
          <p className="text-gray-500 text-center">Please wait while we fetch your order history...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-6 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
          <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-red-100 rounded-full">
            <AlertCircle className="h-8 w-8 text-red-600" />
          </div>
          <h3 className="text-xl font-semibold text-center text-gray-900 mb-2">Unable to Load Orders</h3>
          <p className="text-gray-600 text-center mb-6">{error}</p>
          <div className="flex justify-center">
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition duration-150 shadow-md w-full max-w-xs"
            >
              <RefreshCw className="h-5 w-5" />
              <span>Try Again</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-green-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-green-800">My Orders</h1>
              <p className="text-gray-600 mt-2">Track and manage your purchase history</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                <ShoppingBag className="w-4 h-4 mr-2" />
                {orders.length} {orders.length === 1 ? "Order" : "Orders"} Total
              </span>
            </div>
          </div>
        </header>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          {/* Order Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto scrollbar-hide">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                  activeTab === "all"
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                All Orders
              </button>
              <button
                onClick={() => setActiveTab("pending")}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                  activeTab === "pending"
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Pending
              </button>
              <button
                onClick={() => setActiveTab("processing")}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                  activeTab === "processing"
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Processing
              </button>
              <button
                onClick={() => setActiveTab("completed")}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                  activeTab === "completed"
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Completed
              </button>
              <button
                onClick={() => setActiveTab("cancelled")}
                className={`px-6 py-4 font-medium text-sm whitespace-nowrap ${
                  activeTab === "cancelled"
                    ? "border-b-2 border-green-600 text-green-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                Cancelled
              </button>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {filteredOrders.length === 0 ? (
              <div className="p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
                  <ShoppingBag className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  {activeTab === "all"
                    ? "You haven't placed any orders yet. Start shopping to see your orders here."
                    : `You don't have any ${activeTab} orders at the moment.`}
                </p>
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition duration-150 shadow-md flex items-center justify-center gap-2 mx-auto">
                  <span>Browse Products</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ) : (
              filteredOrders.map((order) =>
                order.tempfarmid && order.tempfarmid.length > 0 ? (
                  order.tempfarmid.map((tempfarmer, index) =>
                    tempfarmer ? (
                      <div key={`${order._id}-${index}`} className="p-5 hover:bg-green-50 transition duration-200">
                        <Order order={order} tempfarmer={tempfarmer} />
                      </div>
                    ) : null,
                  )
                ) : (
                  <div key={order._id}></div>
                ),
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

