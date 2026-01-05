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

