

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MapPin, Star, User, Loader2, Calendar, Clock, Crop, DollarSign } from 'lucide-react';

const Order = ({ order, tempfarmer }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const formatDateOnly = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const contact = async () => {
    setIsLoading(true);
    try {
      const chatData = {
        senderId: order.buyerid,
        receiverId: tempfarmer,
        orderId: order._id,
        isfarmer: 'false',
      };
      
      sessionStorage.setItem('myData', JSON.stringify(chatData));
      router.push('/Chating');
    } catch (error) {
      console.error('Error navigating to chat:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-md max-w-lg mx-auto my-4 overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-3 flex justify-between items-center">
        <h3 className="text-white font-semibold text-base">Order Details</h3>
        <div className="flex items-center space-x-1.5 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
          <Calendar className="h-3.5 w-3.5 text-white" />
          <span className="text-white text-xs font-medium">{formatDateOnly(order.date)}</span>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Order Information Grid */}
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center space-x-2 p-2.5 bg-green-50 rounded-lg">
            <div className="bg-green-600 p-1.5 rounded-md flex-shrink-0">
              <Crop className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-gray-500 font-medium leading-tight">Crop Name</p>
              <p className="text-sm text-gray-900 font-semibold truncate">{order.name}</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-2.5 bg-blue-50 rounded-lg">
            <div className="bg-blue-600 p-1.5 rounded-md flex-shrink-0">
              <Clock className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-gray-500 font-medium leading-tight">Duration</p>
              <p className="text-sm text-gray-900 font-semibold truncate">{order.duration} months</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-2.5 bg-amber-50 rounded-lg">
            <div className="bg-amber-600 p-1.5 rounded-md flex-shrink-0">
              <DollarSign className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-gray-500 font-medium leading-tight">Payment</p>
              <p className="text-sm text-gray-900 font-semibold truncate">₹{order.amount}/kg</p>
            </div>
          </div>

          <div className="flex items-center space-x-2 p-2.5 bg-purple-50 rounded-lg">
            <div className="bg-purple-600 p-1.5 rounded-md flex-shrink-0">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] text-gray-500 font-medium leading-tight">Location</p>
              <p className="text-sm text-gray-900 font-semibold truncate">{order.city}</p>
            </div>
          </div>
        </div>

        {/* Farmer Profile Section */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-md ring-2 ring-green-100">
                <User className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 bg-green-500 rounded-full p-1">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>

            <div>
              <p className="text-xs text-gray-600 font-medium mb-0.5">Farmer Rating</p>
              <div className="flex space-x-0.5">
                {[1, 2, 3, 4].map((_, index) => (
                  <Star key={index} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="h-3.5 w-3.5 text-gray-300" />
              </div>
              <p className="text-[10px] text-gray-500 mt-0.5">4.0 out of 5</p>
            </div>
          </div>

          <button 
            onClick={contact} 
            disabled={isLoading}
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-4 py-2.5 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-1.5" />
                <span className="text-xs">Loading...</span>
              </>
            ) : (
              <span>Chat with Farmer</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;