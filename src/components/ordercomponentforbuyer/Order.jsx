// 'use client'
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import React from 'react'
// import { FaMapMarkerAlt, FaStar, FaUser } from 'react-icons/fa';


// function Order (props) {

//   function formatDateOnly(dateString) {
//     const date = new Date(dateString);
  
//     // Extract components
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
//     const year = date.getFullYear();
    
//     // Format as YYYY-MM-DD or MM/DD/YYYY
//     return `${year}-${month}-${day}`; // Change format as needed
//   }

//   const styles = {
//     card: {
//       position: 'relative',  
//       display: 'flex',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       background: 'linear-gradient(135deg, rgba(0, 100, 0, 0.8) 0%, rgba(0, 50, 0, 0.5) 100%)',
//       padding: '20px',
//       borderRadius:'5px',
//       boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//       maxWidth: '1000px',
//       width:'700px',  
//       margin: '20px auto',
//     },
//     leftSection: {
//       flex: 1,
//       paddingRight: '20px',
//     },
//     rightSection: {
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       paddingLeft: '20px',
//     },
//     text: {
//       fontSize: '16px',
//       margin: '5px 0',
//       color: '#fff',
//     },
//     icon: {
//       marginLeft: '5px',
//       color: '#f05a28',
//     },
//     image: {
//       width: '150px',
//       height: 'auto',
//       borderRadius: '10px',
//       marginLeft: '20px',
//     },
//     date: {
//       position: 'absolute',
//       top: '4px',
//       right: '0px',
//       fontSize: '14px',
//       color: '#fff',
//       paddingBottom:'20px',
//       paddingRight:'9px',
//       marginBottom:'40px',
//     },
//     profileContainer: {
//       width: '60px',
//       height: '60px',
//       borderRadius: '50%',
//       backgroundColor: 'black',  // Black circular background
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginBottom: '10px',
//     },
//     profileIcon: {
//       fontSize: '30px',
//       color: 'white', // White person icon
//     },
//     rating: {
//       display: 'flex',
//       justifyContent: 'center',
//       marginBottom: '10px',
//     },
//     star: {
//       color: '#f5b50a',
//       marginRight: '3px',
//     },
//     inactiveStar: {
//       color: '#ccc',
//       marginRight: '3px',
//     },
//     button: {
//       backgroundColor: '#28a745',
//       color: '#fff',
//       padding: '10px 20px',
//       border: 'none',
//       borderRadius: '5px',
//       cursor: 'pointer',
//       fontSize: '16px',
//       boxShadow: '0 0 10px 2px rgba(40, 167, 69, 0.7)', // Green glow
//       transition: 'box-shadow 0.3s ease-in-out',
//     },
//     // Add hover effect for green glow
//     buttonHover: {
//       boxShadow: '0 0 20px 4px rgba(40, 167, 69, 1)', // Stronger green glow on hover
//     }
//   };
  


//    const router = useRouter();
//     const tempfarmId = props.tempfarmer;
//     const buyerId = props.order.buyerid;
//    const orderId = props.order._id;
//     const contact = async()=>{
//          console.log( tempfarmId , "receiver id")
//          console.log( buyerId , "sender id")
//         await localStorage.setItem('myData', JSON.stringify({ senderId: buyerId, receiverId: tempfarmId , orderId : orderId , isfarmer : "false"}));
//         router.push('/Chating')
//     }

//   return (
//     // <>
    
//     // <button onClick={contact}> contact buyer</button>
//     // </>
//     <>
    
//     <div style={styles.card}>
//   <div style={styles.leftSection}>
//     <p style={styles.text}><strong>Duration:</strong> {props.order.duration} months</p>
//     <p style={styles.text}><strong>Crop Name:</strong> {props.order.name}</p>
//     <p style={styles.text}><strong>Payment:</strong>{props.order.amount} rs/kg</p>
//     <p style={styles.text}><strong>Location:</strong> {props.order.city}<FaMapMarkerAlt style={styles.icon} /></p>
//   </div>
//   {/* <img src="https://i.imgur.com/oCkEbrA.jpg" alt="wheat" style={styles.image} /> */}
//   <div style={styles.rightSection}>
//     <p style={styles.date} >{formatDateOnly(props.order.date)}</p> {/* Date at top right */}
    
//     <div style={styles.profileContainer}> {/* Black circle with white person */}
//       <FaUser style={styles.profileIcon} />
//     </div>
    
//     <div style={styles.rating}> {/* Rating below profile pic */}
//       <FaStar style={styles.star} />
//       <FaStar style={styles.star} />
//       <FaStar style={styles.star} />
//       <FaStar style={styles.star} />
//       <FaStar style={styles.inactiveStar} />
//     </div>
    
//     <button style={styles.button} onMouseEnter={(e) => e.target.style.boxShadow = styles.buttonHover.boxShadow}
//   onMouseLeave={(e) => e.target.style.boxShadow = styles.button.boxShadow} onClick={contact}>Chat with farmer</button>
//   </div>
// </div>

//     </>
//   )
// }

// export default Order
// 'use client';

// import { useRouter } from 'next/navigation';
// import { MapPin, Star, User } from 'lucide-react';

// function Order({ order, tempfarmer }) {
//   const router = useRouter();

//   function formatDateOnly(dateString) {
//     const date = new Date(dateString);
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${year}-${month}-${day}`;
//   }

//   const contact = async () => {
//     await localStorage.setItem(
//       'myData',
//       JSON.stringify({
//         senderId: order.buyerid,
//         receiverId: tempfarmer,
//         orderId: order._id,
//         isfarmer: 'false',
//       })
//     );
//     router.push('/Chating');
//   };

//   return (
//     <div className="relative flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-green-800/80 to-green-900/50 p-6 rounded-lg shadow-lg max-w-4xl mx-auto my-5 transition-all duration-300 hover:shadow-xl">
//       {/* Date Badge */}
//       <div className="absolute top-4 right-4 text-sm text-white/90 bg-black/20 px-3 py-1 rounded-full">
//         {formatDateOnly(order.date)}
//       </div>

//       {/* Left Section */}
//       <div className="flex-1 space-y-3 text-white mb-6 md:mb-0">
//         <div className="flex items-center space-x-2">
//           <span className="font-semibold">Duration:</span>
//           <span>{order.duration} months</span>
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <span className="font-semibold">Crop Name:</span>
//           <span>{order.name}</span>
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <span className="font-semibold">Payment:</span>
//           <span>{order.amount} rs/kg</span>
//         </div>
        
//         <div className="flex items-center space-x-2">
//           <span className="font-semibold">Location:</span>
//           <span>{order.city}</span>
//           <MapPin className="h-4 w-4 text-orange-500" />
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex flex-col items-center space-y-4">
//         {/* Profile Icon */}
//         <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
//           <User className="h-8 w-8 text-white" />
//         </div>

//         {/* Rating Stars */}
//         <div className="flex space-x-1">
//           {[1, 2, 3, 4].map((_, index) => (
//             <Star key={index} className="h-5 w-5 fill-current text-yellow-400" />
//           ))}
//           <Star className="h-5 w-5 text-gray-400" />
//         </div>

//         {/* Contact Button */}
//         <button
//           onClick={contact}
//           className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium
//                    shadow-[0_0_10px_2px_rgba(40,167,69,0.7)]
//                    hover:shadow-[0_0_20px_4px_rgba(40,167,69,1)]
//                    transition-all duration-300
//                    transform hover:scale-105"
//         >
//           Chat with farmer
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Order;

'use client';

import { useRouter } from 'next/navigation';
import { MapPin, Star, User } from 'lucide-react';

const Order = ({ order, tempfarmer }) => {
  const router = useRouter();

  const formatDateOnly = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const contact = async () => {
    await localStorage.setItem(
      'myData',
      JSON.stringify({
        senderId: order.buyerid,
        receiverId: tempfarmer,
        orderId: order._id,
        isfarmer: 'false',
      })
    );
    router.push('/Chating');
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center bg-gradient-to-br from-green-800/70 to-green-900/40 p-6 rounded-lg shadow-md max-w-4xl mx-auto my-5">
      <div className="absolute top-4 right-4 text-sm text-white/80 bg-black/10 px-3 py-1 rounded-full">
        {formatDateOnly(order.date)}
      </div>

      <div className="flex-1 space-y-3 text-white/90 mb-6 md:mb-0">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Duration:</span>
          <span>{order.duration} months</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Crop Name:</span>
          <span>{order.name}</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Payment:</span>
          <span>{order.amount} rs/kg</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Location:</span>
          <span>{order.city}</span>
          <MapPin className="h-4 w-4 text-orange-400" />
        </div>
      </div>

      <div className="flex flex-col items-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-black/80 flex items-center justify-center">
          <User className="h-8 w-8 text-white/90" />
        </div>

        <div className="flex space-x-1">
          {[1, 2, 3, 4].map((_, index) => (
            <Star key={index} className="h-5 w-5 fill-current text-yellow-400/90" />
          ))}
          <Star className="h-5 w-5 text-gray-400/70" />
        </div>

        <button onClick={contact} className="bg-green-600/90 text-white px-6 py-2 rounded-lg font-medium shadow-sm">
          Chat with farmer
        </button>
      </div>
    </div>
  );
};

export default Order;

// 'use client';

// import { useRouter } from 'next/navigation';
// import { MapPin, Star, User } from 'lucide-react';

// const Order = ({ order, tempfarmer }) => {
//   const router = useRouter();

//   const formatDateOnly = (dateString) => {
//     const date = new Date(dateString);
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${year}-${month}-${day}`;
//   };

//   const contact = async () => {
//     await localStorage.setItem(
//       'myData',
//       JSON.stringify({
//         senderId: order.buyerid,
//         receiverId: tempfarmer,
//         orderId: order._id,
//         isfarmer: 'false',
//       })
//     );
//     router.push('/Chating');
//   };

//   return (
//     <div className="relative flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-green-700 to-green-900 p-6 rounded-xl shadow-lg max-w-4xl mx-auto my-6 border border-green-300/30">
//       <div className="absolute top-4 right-4 text-sm text-white bg-green-800 px-4 py-1 rounded-full shadow-md">
//         {formatDateOnly(order.date)}
//       </div>

//       <div className="flex-1 space-y-4 text-white mb-6 md:mb-0">
//         <div className="flex items-center space-x-3">
//           <span className="font-semibold text-lg">⏳ Duration:</span>
//           <span className="text-lg">{order.duration} months</span>
//         </div>
        
//         <div className="flex items-center space-x-3">
//           <span className="font-semibold text-lg">🌱 Crop Name:</span>
//           <span className="text-lg">{order.name}</span>
//         </div>
        
//         <div className="flex items-center space-x-3">
//           <span className="font-semibold text-lg">💰 Payment:</span>
//           <span className="text-lg">{order.amount} rs/kg</span>
//         </div>
        
//         <div className="flex items-center space-x-3">
//           <span className="font-semibold text-lg">📍 Location:</span>
//           <span className="text-lg">{order.city}</span>
//           <MapPin className="h-5 w-5 text-yellow-400" />
//         </div>
//       </div>

//       <div className="flex flex-col items-center space-y-5">
//         <div className="w-20 h-20 rounded-full bg-green-700 flex items-center justify-center shadow-md">
//           <User className="h-10 w-10 text-white" />
//         </div>

//         <div className="flex space-x-1">
//           {[1, 2, 3, 4].map((_, index) => (
//             <Star key={index} className="h-6 w-6 fill-current text-yellow-400" />
//           ))}
//           <Star className="h-6 w-6 text-gray-500" />
//         </div>

//         <button onClick={contact} className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium shadow-md transition duration-300">
//           Chat with Farmer
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Order;