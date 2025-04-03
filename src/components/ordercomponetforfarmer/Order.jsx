
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import React from 'react';
// import { FaMapMarkerAlt, FaStar,FaUser } from 'react-icons/fa';


// function Order(props) {

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




//     const router = useRouter();
//     const tempFarmId = props.farmerid;
//     const buyerId = props.order.buyerid;
//     const orderId = props.order._id;
   
//     const sendData = async () => {
//         try {
//             const res = await axios.post("/api/farmer/addtempfarmer", { orderId, tempFarmId });
//             console.log(res);
//             return res;
//         } catch (error) {
//             console.error("Error sending data:", error);
//             throw error; 
//         }
//     };

//     const contact = async () => {
//         try {
//             await sendData(); 
//            await localStorage.setItem('myData', JSON.stringify({ senderId: tempFarmId, receiverId: buyerId , orderId : orderId , isfarmer : "true" }));
//            router.push("/Chating")
//         } catch (error) {
//             console.error("Error navigating:", error);
//         }
//     };

//     return (
//         // <>
//         //     <button onClick={contact}>Contact Buyer</button>
//         // </>
//         <div style={styles.card}>
//         <div style={styles.leftSection}>
//           <p style={styles.text}><strong>Duration:</strong> {props.order.duration} months</p>
//           <p style={styles.text}><strong>Crop Name:</strong> {props.order.name} </p>
//           <p style={styles.text}><strong>Payment:</strong> {props.order.amount} Rs/kg</p>
//           <p style={styles.text}><strong>Location:</strong> {props.order.city} <FaMapMarkerAlt style={styles.icon} /></p>
//         </div>
//         {/* <img src="https://i.imgur.com/oCkEbrA.jpg" alt="wheat" style={styles.image} /> */}
//         <div style={styles.rightSection}>
//           <p style={styles.date}>{formatDateOnly(props.order.date)}</p> {/* Date at top right */}
          
//           <div style={styles.profileContainer}> {/* Black circle with white person */}
//             <FaUser style={styles.profileIcon} />
//           </div>
          
//           <div style={styles.rating}> {/* Rating below profile pic */}
//             <FaStar style={styles.star} />
//             <FaStar style={styles.star} />
//             <FaStar style={styles.star} />
//             <FaStar style={styles.star} />
//             <FaStar style={styles.inactiveStar} />
//           </div>
          
//           <button style={styles.button}onMouseEnter={(e) => e.target.style.boxShadow = styles.buttonHover.boxShadow}
//   onMouseLeave={(e) => e.target.style.boxShadow = styles.button.boxShadow} onClick={contact}>Contact with buyer</button>
//         </div>
//       </div>
//     );
// }

// export default Order;

// import { useRouter } from 'next/navigation';
// import React from 'react';
// import { FaMapMarkerAlt, FaStar, FaUser } from 'react-icons/fa';
// import axios from 'axios';

// function Order(props) {
//   const router = useRouter();
//   const tempFarmId = props.farmerid;
//   const buyerId = props.order.buyerid;
//   const orderId = props.order._id;

//   function formatDateOnly(dateString) {
//     const date = new Date(dateString);
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     return `${year}-${month}-${day}`;
//   }

//   const sendData = async () => {
//     try {
//       const res = await axios.post("/api/farmer/addtempfarmer", { orderId, tempFarmId });
//       console.log(res);
//       return res;
//     } catch (error) {
//       console.error("Error sending data:", error);
//       throw error;
//     }
//   };

//   const contact = async () => {
//     try {
//       await sendData();
//       await localStorage.setItem('myData', JSON.stringify({ 
//         senderId: tempFarmId, 
//         receiverId: buyerId, 
//         orderId: orderId, 
//         isfarmer: "true" 
//       }));
//       router.push("/Chating");
//     } catch (error) {
//       console.error("Error navigating:", error);
//     }
//   };

//   return (
//     <div className="relative flex justify-between items-center p-5 rounded bg-gradient-to-br from-green-800/80 to-green-900/50 shadow-md max-w-4xl w-full md:w-[700px] mx-auto my-5">
//       <div className="flex-1 pr-5">
//         <p className="text-base my-1 text-white"><strong>Duration:</strong> {props.order.duration} months</p>
//         <p className="text-base my-1 text-white"><strong>Crop Name:</strong> {props.order.name}</p>
//         <p className="text-base my-1 text-white"><strong>Payment:</strong> {props.order.amount} Rs/kg</p>
//         <p className="text-base my-1 text-white">
//           <strong>Location:</strong> {props.order.city} 
//           <FaMapMarkerAlt className="inline-block ml-1 text-orange-500" />
//         </p>
//       </div>
      
//       <div className="flex flex-col items-center pl-5">
//         <p className="absolute top-1 right-2 text-sm text-white">
//           {formatDateOnly(props.order.date)}
//         </p>
        
//         <div className="w-14 h-14 rounded-full bg-black flex justify-center items-center mb-2">
//           <FaUser className="text-3xl text-white" />
//         </div>
        
//         <div className="flex justify-center mb-2">
//           <FaStar className="text-yellow-500 mr-0.5" />
//           <FaStar className="text-yellow-500 mr-0.5" />
//           <FaStar className="text-yellow-500 mr-0.5" />
//           <FaStar className="text-yellow-500 mr-0.5" />
//           <FaStar className="text-gray-300 mr-0.5" />
//         </div>
        
//         <button 
//           onClick={contact}
//           className="bg-green-600 text-white px-4 py-2 rounded shadow-lg shadow-green-500/70 hover:shadow-green-500 transition-shadow duration-300"
//         >
//           Contact with buyer
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Order;


import { useRouter } from 'next/navigation';
import React from 'react';
import { FaMapMarkerAlt, FaStar, FaUser, FaClock, FaSeedling, FaRupeeSign, FaLocationArrow } from 'react-icons/fa';
import axios from 'axios';

function Order(props) {
  const router = useRouter();
  const tempFarmId = props.farmerid;
  const buyerId = props.order.buyerid;
  const orderId = props.order._id;

  function formatDateOnly(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }

  const sendData = async () => {
    try {
      const res = await axios.post("/api/farmer/addtempfarmer", { orderId, tempFarmId });
      console.log(res);
      return res;
    } catch (error) {
      console.error("Error sending data:", error);
      throw error;
    }
  };

  const contact = async () => {
    try {
      await sendData();
      await localStorage.setItem('myData', JSON.stringify({ 
        senderId: tempFarmId, 
        receiverId: buyerId, 
        orderId: orderId, 
        isfarmer: "true" 
      }));
      router.push("/Chating");
    } catch (error) {
      console.error("Error navigating:", error);
    }
  };

  return (
    <div className="relative flex flex-col md:flex-row justify-between items-center p-6 rounded-lg bg-gradient-to-br from-green-700 to-green-900 shadow-xl max-w-3xl w-full border-l-4 border-green-500 overflow-hidden mt-1">

      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI5MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI5MCIgZmlsbD0iIzAwMCI+PC9yZWN0Pgo8cGF0aCBkPSJNNjAgMEwzMCA2MEwwIDBNMzAgNjBMMzAgOTBNNjAgOTBMMzAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzEzMSIgc3Ryb2tlLXdpZHRoPSIyIj48L3BhdGg+Cjwvc3ZnPg==')]"></div>
      
      {/* Date badge */}
      <div className="absolute top-0 right-0 bg-green-600 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
        {formatDateOnly(props.order.date)}
      </div>

      <div className="flex-1 z-10 pr-4 mb-4 md:mb-0">
        <h3 className="text-xl font-bold text-white mb-3 border-b border-green-600 pb-2">
          {props.order.name}
        </h3>
        
        <div className="space-y-2">
          <p className="text-base flex items-center text-white">
            <FaClock className="mr-2 text-green-300" />
            <span className="font-medium">Duration:</span>
            <span className="ml-2 bg-green-800/50 px-2 py-0.5 rounded">{props.order.duration} months</span>
          </p>
          
          <p className="text-base flex items-center text-white">
            <FaSeedling className="mr-2 text-green-300" />
            <span className="font-medium">Crop:</span>
            <span className="ml-2">{props.order.name}</span>
          </p>
          
          <p className="text-base flex items-center text-white">
            <FaRupeeSign className="mr-2 text-green-300" />
            <span className="font-medium">Payment:</span>
            <span className="ml-2 text-yellow-300 font-semibold">{props.order.amount} Rs/kg</span>
          </p>
          
          <p className="text-base flex items-center text-white">
            <FaLocationArrow className="mr-2 text-green-300" />
            <span className="font-medium">Location:</span>
            <span className="ml-2 flex items-center">
              {props.order.city} 
              <FaMapMarkerAlt className="ml-1 text-red-400" />
            </span>
          </p>
        </div>
      </div>
      
      <div className="flex flex-col items-center z-10">
        <div className="w-16 h-16 rounded-full bg-black flex justify-center items-center mb-3 border-2 border-green-400 shadow-lg shadow-green-900/50">
          <FaUser className="text-3xl text-white" />
        </div>
        
        <div className="flex justify-center mb-3">
          <FaStar className="text-yellow-400 mr-0.5" />
          <FaStar className="text-yellow-400 mr-0.5" />
          <FaStar className="text-yellow-400 mr-0.5" />
          <FaStar className="text-yellow-400 mr-0.5" />
          <FaStar className="text-gray-400 mr-0.5" />
        </div>
        
        <button 
          onClick={contact}
          className="bg-green-500 text-white px-6 py-2 rounded-full font-medium shadow-lg shadow-green-900/70 hover:bg-green-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-800"
        >
          Contact Buyer
        </button>
      </div>
    </div>
  );
}

export default Order;