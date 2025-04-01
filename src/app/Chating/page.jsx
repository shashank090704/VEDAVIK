
// 'use client';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { useState, useEffect, useRef } from 'react';
// import styles from "../../Stylesheet/Chat.module.css";
// import Talk from "talkjs";

// export default function Page() {
//   const chatboxEl = useRef();
//   const router = useRouter();
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [senderId, setSenderId] = useState();
//   const [receiverId, setReceiverId] = useState();
//   const [pusherInstance, setPusherInstance] = useState(null);
//  const [ senderdata , setsenderdata ] = useState();
//  const [ receiverdata , setreceiverdata ] = useState()
//  const [ orderId , setorderId] = useState()
//  const [ order , setorder] = useState()
//  const [ isfarmer , setisfarmer] = useState()
//   const [ tempamt , settempamt] = useState()

// /////////////

// const [loading, setLoading] = useState(false);
//   const [paymentId, setPaymentId] = useState('');
//   const [orderrId, setOrderrId] = useState('');
//   const [signature, setSignature] = useState('');
//   const [verificationResult, setVerificationResult] = useState(null); // New state to capture verification result
// //  const amount = '100';
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };
//   const handleReload = () => {
//     window.location.reload();
//   };

//   const handlePayment = async () => {
//     setLoading(true);
//     const amount = order.amount;
//     const res = await loadRazorpayScript();

//     if (!res) {
//       alert('Razorpay SDK failed to load. Are you online?');
//       setLoading(false);
//       return;
//     }

//     // Create an order on the server
//     const response = await fetch('/api/razorpay', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         amount: parseFloat(amount) *100,  // Pass the amount here
//       }),
//     });

//     // const response = axios.post('/api/razorpay' , {amount : 500})

//     const orderr = await response.json();

//     if (!orderr) {
//       alert('Server error. Please try again.');
//       setLoading(false);
//       return;
//     }

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,  // Razorpay key
//       amount: parseFloat(amount) * 100,
//       currency: orderr.currency,
//       name: 'Vedavik',
//       description: 'Test Transaction',
//       order_id: orderr.id,
//       handler: async function (response) {
//         setPaymentId(response.razorpay_payment_id);
//         setOrderrId(response.razorpay_order_id);
//         setSignature(response.razorpay_signature);

//         // Send payment details to backend for verification
//         const verifyResponse = await fetch('/api/verifySignature', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             order_id: response.razorpay_order_id,
//             payment_id: response.razorpay_payment_id,
//             signature: response.razorpay_signature,
//           }),
//         });

//         const result = await verifyResponse.json();
//         setVerificationResult(result.success ? 'Payment Verified Successfully!' : 'Payment Verification Failed.');
//         if (!result.success) {
//           alert('Payment verification failed. Please try again.');
//         }
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'john@example.com',
//         contact: '9999999999',
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//     setLoading(false);
//   };

// ///////////

//   useEffect(() => {
//     const storedData = localStorage.getItem('myData');
//     if (storedData) {
//       const myObject = JSON.parse(storedData);
//       setSenderId(myObject.senderId);
//       setReceiverId(myObject.receiverId);
//       setorderId(myObject.orderId);
//       setisfarmer(myObject.isfarmer);
//     } else {
//       console.log('No object found in localStorage.');
//     }
//   }, []);

//   const getInitialMessages = async () => {
//     try {
//       const res = await axios.post("/api/initialmessages", { senderId, receiverId , orderId });
//       console.log( res.data.order , "getinitial message")
//       setMessages(res.data.data);
//       setreceiverdata(res.data.receiver)
//       setsenderdata(res.data.sender)
//       setorder(res.data.order)
//       // console.log(res.data.data, "resdet initial message");
//     } catch (error) {
//       console.error("Error fetching initial messages", error);
//     }
//   };

//   const increase = async()=>{
//     try {
//       console.log("increase")
//       const res = await axios.post("/api/buyer/increase", { senderId ,orderId , tempamt})
//       alert("price have been increased")
//       console.log(res.mess)
//     } catch (error) {
//       console.log(error)
//     }
//    handleReload()
//   }
//   const confirm = async()=>{
//     try {
//       const res = await axios.post('/api/farmer/confirm' , {senderId , orderId})
//       alert("order confirmed")
//       console.log(res.mess)

      
//     } catch (error) {
//       console.log(error)
//     }
//     handleReload()
   
//   }

//   useEffect(() => {
//     if (senderId && receiverId) {
//       getInitialMessages();
//       console.log(messages, "messages");
//       console.log(order , "order")
//     }
//   }, [senderId, receiverId , orderId]);

//   useEffect(() => {
//     if (senderId && receiverId && senderdata && receiverdata) {
//       // console.log( senderdata , " sender data")
//       Talk.ready.then(() => {
//         // console.log("TalkJS is ready");
//         const currentUser = new Talk.User({
//           id: senderId,
//           // name : senderdata.name,  // Sender's MongoDB ObjectId
//           name :  `${senderdata.name} (${senderdata.role})`,
//           // name: sender.name,
//           // email: sender.email,
//           // photoUrl: sender.photoUrl || `https://api.adorable.io/avatars/285/${sender._id}.png`,
//           role: senderdata.role,
//         });

//         const otherUser = new Talk.User({
//           id: receiverId,  // Receiver's MongoDB ObjectId
//           // name: receiverdata.name,
//           name : `${receiverdata.name} (${receiverdata.role})`,
//           // email: receiver.email,
//           // photoUrl: receiver.photoUrl || `https://api.adorable.io/avatars/285/${receiver._id}.png`,
//           role: receiverdata.role
//         });

//         const session = new Talk.Session({
//           appId: "t58oG5hk",  // Replace with your TalkJS App ID
//           me: currentUser,
//         });

//         const conversationId = Talk.oneOnOneId(currentUser, otherUser);
//         const conversation = session.getOrCreateConversation(conversationId);

//         conversation.setParticipant(currentUser);
//         conversation.setParticipant(otherUser);

//         const chatbox = session.createChatbox(conversation);
//         chatbox.mount(chatboxEl.current);
//         console.log("Chatbox successfully mounted");
//       }).catch((error) => {
//         console.error("Error with TalkJS initialization:", error);
//       });
//     }
//   }, [senderId, receiverId , senderdata , receiverdata]);
//   return (
  
//     <>
//     <div style={{height : "100vh" , width : "100vw" , backgroundColor : "black" , display : "flex" , justifyContent : "center" , alignItems : "center"}}>
//     <div ref={chatboxEl} style={{ height: "500px", width: "50%" ,  background: "black"  }} />
//     {isfarmer== "true"? (
//         <>
//         <div style={{ height : '50px' ,margin : "20px"}}>
//         <div>{order && order.isaccepted ?`order confirmed by you !` : `comfirm the price ${ order && order.amount}`} </div>
         
//          { order && !order.isaccepted &&<button onClick={confirm}>confirm</button>}
//         { order && !order.isaccepted && <button onClick={handleReload} style={{marginLeft : "20px"}}>Get the latest price</button>}
//          </div>
//          </>
//       ):( <>
//        {order && order.isaccepted == false ? (<div style={{ height : '50px' ,margin : "20px"}}>
//         <div style={{textAlign : "center"}}> Increase the current price {order && order.amount}</div>
//          <input type="text" 
//           placeholder='increase the amount'
//            value={tempamt}
//             onChange={(e)=>{settempamt(e.target.value)}}/>
//          <button onClick={increase} style={{display : "block" , alignContent : "center" , marginTop : "5px"}}>Increase</button>
//          <button onClick={handleReload}>Check confirmation</button>
//          </div> ) : (
//           <div>
//           <h1>Pay amount {order && order.amount}</h1>
//           <button onClick={handlePayment} disabled={loading}>
//             {loading ? 'Processing...' : 'Pay Now'}
//           </button>
//           {paymentId && (
//             <div>
//               <h3>Payment Details:</h3>
//               <p>Payment ID: {paymentId}</p>
//               <p>Order ID: {orderrId}</p>
//               <p>Signature: {signature}</p>
//             </div>
//           )}
//           {verificationResult && <p>{verificationResult}</p>}
//         </div>)}
//          </>)}
//     </div>
    
     
   
//     </>
//   );
// }

// 'use client';
// import axios from 'axios';
// import { useRouter } from 'next/navigation';
// import { useState, useEffect, useRef } from 'react';
// import styles from "../../Stylesheet/Chat.module.css";
// import Talk from "talkjs";

// export default function Page() {
//   const chatboxEl = useRef();
//   const router = useRouter();

//   // State Variables (unchanged naming)
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [senderId, setSenderId] = useState();
//   const [receiverId, setReceiverId] = useState();
//   const [senderdata, setsenderdata] = useState();
//   const [receiverdata, setreceiverdata] = useState();
//   const [orderId, setorderId] = useState();
//   const [order, setorder] = useState();
//   const [isfarmer, setisfarmer] = useState();
//   const [tempamt, settempamt] = useState();
//   const [loading, setLoading] = useState(false);
//   const [paymentId, setPaymentId] = useState('');
//   const [orderrId, setOrderrId] = useState('');
//   const [signature, setSignature] = useState('');
//   const [verificationResult, setVerificationResult] = useState(null);

//   // Helper functions
//   const loadRazorpayScript = () => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handleReload = () => {
//     window.location.reload();
//   };

//   const handlePayment = async () => {
//     setLoading(true);
//     const amount = order?.amount;
//     const res = await loadRazorpayScript();

//     if (!res) {
//       alert('Razorpay SDK failed to load. Are you online?');
//       setLoading(false);
//       return;
//     }

//     // Create order on the server
//     const response = await fetch('/api/razorpay', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ amount: parseFloat(amount) * 100 }),
//     });

//     const orderr = await response.json();

//     if (!orderr) {
//       alert('Server error. Please try again.');
//       setLoading(false);
//       return;
//     }

//     const options = {
//       key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
//       amount: parseFloat(amount) * 100,
//       currency: orderr.currency,
//       name: 'Vedavik',
//       description: 'Test Transaction',
//       order_id: orderr.id,
//       handler: async function (response) {
//         setPaymentId(response.razorpay_payment_id);
//         setOrderrId(response.razorpay_order_id);
//         setSignature(response.razorpay_signature);

//         // Verify payment on the backend
//         const verifyResponse = await fetch('/api/verifySignature', {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             order_id: response.razorpay_order_id,
//             payment_id: response.razorpay_payment_id,
//             signature: response.razorpay_signature,
//           }),
//         });

//         const result = await verifyResponse.json();
//         setVerificationResult(result.success ? 'Payment Verified Successfully!' : 'Payment Verification Failed.');
//         if (!result.success) {
//           alert('Payment verification failed. Please try again.');
//         }
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'john@example.com',
//         contact: '9999999999',
//       },
//       theme: { color: '#3399cc' },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//     setLoading(false);
//   };

//   // Fetch initial messages
//   const getInitialMessages = async () => {
//     try {
//       const res = await axios.post("/api/initialmessages", { senderId, receiverId, orderId });
//       setMessages(res.data.data);
//       setreceiverdata(res.data.receiver);
//       setsenderdata(res.data.sender);
//       setorder(res.data.order);
//     } catch (error) {
//       console.error("Error fetching initial messages", error);
//     }
//   };

//   // Increase the price
//   const increasePrice = async () => {
//     try {
//       await axios.post("/api/buyer/increase", { senderId, orderId, tempamt });
//       alert("Price has been increased.");
//       handleReload();
//     } catch (error) {
//       console.error("Error increasing price", error);
//     }
//   };

//   // Confirm the order
//   const confirmOrder = async () => {
//     try {
//       await axios.post('/api/farmer/confirm', { senderId, orderId });
//       alert("Order confirmed.");
//       handleReload();
//     } catch (error) {
//       console.error("Error confirming order", error);
//     }
//   };

//   // Load stored data on mount
//   useEffect(() => {
//     const storedData = localStorage.getItem('myData');
//     if (storedData) {
//       const myObject = JSON.parse(storedData);
//       setSenderId(myObject.senderId);
//       setReceiverId(myObject.receiverId);
//       setorderId(myObject.orderId);
//       setisfarmer(myObject.isfarmer);
//     }
//   }, []);

//   // Fetch messages when senderId and receiverId are available
//   useEffect(() => {
//     if (senderId && receiverId) {
//       getInitialMessages();
//     }
//   }, [senderId, receiverId, orderId]);

//   // Initialize TalkJS when senderdata and receiverdata are available
//   useEffect(() => {
//     if (senderId && receiverId && senderdata && receiverdata) {
//       Talk.ready.then(() => {
//         const currentUser = new Talk.User({
//           id: senderId,
//           name: `${senderdata.name} (${senderdata.role})`,
//           role: senderdata.role,
//         });

//         const otherUser = new Talk.User({
//           id: receiverId,
//           name: `${receiverdata.name} (${receiverdata.role})`,
//           role: receiverdata.role,
//         });

//         const session = new Talk.Session({
//           appId: "t58oG5hk",
//           me: currentUser,
//         });

//         const conversation = session.getOrCreateConversation(Talk.oneOnOneId(currentUser, otherUser));
//         conversation.setParticipant(currentUser);
//         conversation.setParticipant(otherUser);

//         const chatbox = session.createChatbox(conversation);
//         chatbox.mount(chatboxEl.current);
//       }).catch((error) => {
//         console.error("Error with TalkJS initialization:", error);
//       });
//     }
//   }, [senderId, receiverId, senderdata, receiverdata]);

//   return (
//     <div className={styles.container}>
//       <div ref={chatboxEl} className={styles.chatbox} />
//       {isfarmer === "true" ? (
//         <div className={styles.farmerActions}>
//           <div>{order?.isaccepted ? "Order confirmed by you!" : `Confirm the price: ${order?.amount}`}</div>
//           {!order?.isaccepted && <button className={styles.button} onClick={confirmOrder}>Confirm</button>}
//           {!order?.isaccepted && <button className={styles.button} onClick={handleReload}>Get the latest price</button>}
//         </div>
//       ) : (
//         <div className={styles.buyerActions}>
//           {!order?.isaccepted ? (
//             <>
//               <div>Increase the current price: {order?.amount}</div>
//               <input className={styles.input} type="text" placeholder="Increase the amount" value={tempamt} onChange={(e) => settempamt(e.target.value)} />
//               <button className={styles.button} onClick={increasePrice}>Increase</button>
//               <button className={styles.button} onClick={handleReload}>Check confirmation</button>
//             </>
//           ) : (
//             <>
//               <h1>Pay amount: {order?.amount}</h1>
//               <button className={styles.button} style={{background : "green"}} onClick={handlePayment} disabled={loading}>{loading ? 'Processing...' : 'Pay Now'}</button>
//               {paymentId && (
//                 <>
//                   <h3>Payment Details:</h3>
//                   <p>Payment ID: {paymentId}</p>
//                   <p>Order ID: {orderrId}</p>
//                   <p>Signature: {signature}</p>
//                 </>
//               )}
//               {verificationResult && <p>{verificationResult}</p>}
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }


'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import Talk from "talkjs";

export default function Page() {
  const chatboxEl = useRef();
  const router = useRouter();

  // State Variables (unchanged naming)
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [senderId, setSenderId] = useState();
  const [receiverId, setReceiverId] = useState();
  const [senderdata, setsenderdata] = useState();
  const [receiverdata, setreceiverdata] = useState();
  const [orderId, setorderId] = useState();
  const [order, setorder] = useState();
  const [isfarmer, setisfarmer] = useState();
  const [tempamt, settempamt] = useState();
  const [loading, setLoading] = useState(false);
  const [paymentId, setPaymentId] = useState('');
  const [orderrId, setOrderrId] = useState('');
  const [signature, setSignature] = useState('');
  const [verificationResult, setVerificationResult] = useState(null);
  const [productDetails, setProductDetails] = useState({
    name: 'Farm Fresh Produce',
    quantity: '10 kg',
    quality: 'Premium',
    deliveryDate: '1-2 days'
  });

  // Helper functions
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleReload = () => {
    window.location.reload();
  };

  const handlePayment = async () => {
    setLoading(true);
    const amount = order?.amount;
    const res = await loadRazorpayScript();

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      setLoading(false);
      return;
    }

    // Create order on the server
    const response = await fetch('/api/razorpay', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: parseFloat(amount) * 100 }),
    });

    const orderr = await response.json();

    if (!orderr) {
      alert('Server error. Please try again.');
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: parseFloat(amount) * 100,
      currency: orderr.currency,
      name: 'Vedavik',
      description: 'Purchase of farm produce',
      order_id: orderr.id,
      handler: async function (response) {
        setPaymentId(response.razorpay_payment_id);
        setOrderrId(response.razorpay_order_id);
        setSignature(response.razorpay_signature);

        // Verify payment on the backend
        const verifyResponse = await fetch('/api/verifySignature', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            order_id: response.razorpay_order_id,
            payment_id: response.razorpay_payment_id,
            signature: response.razorpay_signature,
          }),
        });

        const result = await verifyResponse.json();
        setVerificationResult(result.success ? 'Payment Verified Successfully!' : 'Payment Verification Failed.');
        if (!result.success) {
          alert('Payment verification failed. Please try again.');
        }
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '9999999999',
      },
      theme: { color: '#3399cc' },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  // Fetch initial messages
  const getInitialMessages = async () => {
    try {
      const res = await axios.post("/api/initialmessages", { senderId, receiverId, orderId });
      setMessages(res.data.data);
      setreceiverdata(res.data.receiver);
      setsenderdata(res.data.sender);
      setorder(res.data.order);
      console.log(order , "order ,daara")
      
      // If product details are available in the API response, update them
      if (res.data.order?.productDetails) {
        setProductDetails(res.data.order.productDetails);
      }
    } catch (error) {
      console.error("Error fetching initial messages", error);
    }
  };

  useEffect(()=>{
    console.log(order , "orderuseefferc")
  } , [order])

  // Increase the price
  const increasePrice = async () => {
    try {
      if (!tempamt || isNaN(tempamt) || parseFloat(tempamt) <= 0) {
        alert("Please enter a valid amount");
        return;
      }
      
      await axios.post("/api/buyer/increase", { senderId, orderId, tempamt });
      alert("Price has been increased successfully.");
      handleReload();
    } catch (error) {
      console.error("Error increasing price", error);
      alert("Failed to increase price. Please try again.");
    }
  };



  // Confirm the order
  const confirmOrder = async () => {
    try {
      await axios.post('/api/farmer/confirm', { senderId, orderId });
      alert("Order confirmed successfully!");
      handleReload();
    } catch (error) {
      console.error("Error confirming order", error);
      alert("Failed to confirm order. Please try again.");
    }
  };

  // Load stored data on mount
  useEffect(() => {
    const storedData = localStorage.getItem('myData');
    if (storedData) {
      const myObject = JSON.parse(storedData);
      setSenderId(myObject.senderId);
      setReceiverId(myObject.receiverId);
      setorderId(myObject.orderId);
      setisfarmer(myObject.isfarmer);
    }
  }, []);

  // Fetch messages when senderId and receiverId are available
  useEffect(() => {
    if (senderId && receiverId) {
      getInitialMessages();
    }
  }, [senderId, receiverId, orderId]);

  // Initialize TalkJS when senderdata and receiverdata are available
  useEffect(() => {
    if (senderId && receiverId && senderdata && receiverdata) {
      Talk.ready.then(() => {
        const currentUser = new Talk.User({
          id: senderId,
          name: `${senderdata.name} (${senderdata.role})`,
          role: senderdata.role,
        });

        const otherUser = new Talk.User({
          id: receiverId,
          name: `${receiverdata.name} (${receiverdata.role})`,
          role: receiverdata.role,
        });

        const session = new Talk.Session({
          appId: "t58oG5hk",
          me: currentUser,
        });

        const conversation = session.getOrCreateConversation(Talk.oneOnOneId(currentUser, otherUser));
        conversation.setParticipant(currentUser);
        conversation.setParticipant(otherUser);

        const chatbox = session.createChatbox(conversation);
        chatbox.mount(chatboxEl.current);
      }).catch((error) => {
        console.error("Error with TalkJS initialization:", error);
      });
    }
  }, [senderId, receiverId, senderdata, receiverdata]);

  return (
    <div className="bg-gray-100 min-h-screen py-6 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-400 py-4 px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center text-green-600 font-bold">
                {isfarmer === "true" ? "F" : "B"}
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">
                  {isfarmer === "true" ? "Farmer Dashboard" : "Buyer Dashboard"}
                </h2>
                <p className="text-green-100 text-sm">
                  {isfarmer === "true" 
                    ? `Chatting with: ${receiverdata?.name || "Buyer"}`
                    : `Chatting with: ${receiverdata?.name || "Farmer"}`}
                </p>
              </div>
            </div>
            <div className="text-right text-white">
              <p className="text-sm text-green-100">Order ID:</p>
              <p className="font-mono text-xs bg-green-700 px-2 py-1 rounded">{orderId || "Loading..."}</p>
            </div>
          </div>
        </div>
        
        {/* Product Info Bar */}
        <div className="bg-gray-50 p-3 border-b flex flex-wrap gap-3 justify-between text-sm m-1.5">
          <div className="flex items-center text-gray-700">
            <span className="font-medium mr-2">Product:</span>
            <span>{order ? order.name : productDetails.name}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <span className="font-medium mr-2">Quantity:</span>
            <span>{ order ? order.quantity+" Kg" :  productDetails.quantity} </span>
          </div>
          <div className="flex items-center text-gray-700">
            <span className="font-medium mr-2">Quality:</span>
            <span>{ productDetails.quality}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <span className="font-medium mr-2">Duration:</span>
            <span>{order ? order.duration+" days" :  productDetails.deliveryDate}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <span className="font-medium mr-2">Status:</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              order?.isaccepted 
                ? "bg-green-100 text-green-800" 
                : "bg-yellow-100 text-yellow-800"
            }`}>
              {order?.isaccepted ? "Confirmed" : "Negotiating"}
            </span>
          </div>
        </div>
        
        {/* Main Chat Area */}
        <div className="flex flex-col md:flex-row">
          {/* Chat Box */}
          <div className="md:flex-grow md:w-2/3">
            <div ref={chatboxEl} className="h-96 md:h-[500px] w-full" />
          </div>
          
          {/* Sidebar with Order Details */}
          <div className="md:w-1/3 border-l border-gray-200 bg-gray-50 p-4">
            <div className="mb-4">
              <h3 className="font-semibold text-gray-800 mb-1">Price Information</h3>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Current Price:</span>
                  <span className="text-xl font-bold text-green-600">₹{order?.amount || "0"}</span>
                </div>
                {order?.priceHistory && (
                  <div className="mt-2 text-xs text-gray-500">
                    <div>Starting price: ₹{order?.priceHistory[0]?.price || order?.amount}</div>
                    <div>Last updated: {new Date().toLocaleDateString()}</div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Transaction Controls */}
            <div className="mt-6 text-black">
              <h3 className="font-semibold text-gray-800 mb-2">Transaction Controls</h3>
              
              {isfarmer === "true" ? (
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg ${
                    order?.isaccepted 
                      ? "bg-green-100 border border-green-200" 
                      : "bg-yellow-50 border border-yellow-200"
                  }`}>
                    <p className="text-center font-medium">
                      {order?.isaccepted 
                        ? "You've confirmed the order!" 
                        : `Do you accept the price offer of ₹${order?.amount}?`}
                    </p>
                  </div>
                  
                  {!order?.isaccepted && (
                    <div className="flex flex-col gap-2">
                      <button 
                        className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center justify-center"
                        onClick={confirmOrder}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Accept Price & Confirm
                      </button>
                      <button 
                        className="w-full py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center"
                        onClick={handleReload}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>
                        Refresh Price
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {!order?.isaccepted ? (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <p className="text-blue-700 font-medium mb-3">Make a new offer to the farmer:</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <span className="text-gray-700">₹</span>
                          <input 
                            className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-black" 
                            type="number" 
                            placeholder="Enter amount" 
                            value={tempamt} 
                            onChange={(e) => settempamt(e.target.value)} 
                          />
                        </div>
                        <button 
                          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
                          onClick={increasePrice}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                          </svg>
                          Submit Offer
                        </button>
                        <button 
                          className="w-full py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 flex items-center justify-center"
                          onClick={handleReload}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                          </svg>
                          Check Status
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="text-center mb-4">
                        <div className="inline-flex items-center justify-center bg-green-100 p-2 rounded-full mb-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-green-800">Order Confirmed!</h3>
                        <p className="text-green-600 mt-1">Proceed with payment to complete transaction</p>
                      </div>
                      
                      <div className="text-center py-2 mb-3 bg-white rounded-md">
                        <span className="text-lg font-medium text-gray-700">Total Amount: </span>
                        <span className="text-2xl font-bold text-green-600">₹{order?.amount}</span>
                      </div>
                      
                      <button 
                        className="w-full py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 disabled:opacity-50 flex items-center justify-center"
                        onClick={handlePayment} 
                        disabled={loading}
                      >
                        {loading ? (
                          <span className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            Pay Now
                          </span>
                        )}
                      </button>
                      
                      {paymentId && (
                        <div className="mt-4 p-3 bg-gray-100 rounded-md text-xs">
                          <h3 className="font-semibold text-gray-800 mb-1">Payment Details:</h3>
                          <div className="space-y-1 font-mono overflow-hidden">
                            <p><span className="inline-block w-20 font-medium">Payment ID:</span> {paymentId}</p>
                            <p><span className="inline-block w-20 font-medium">Order ID:</span> {orderrId}</p>
                            <p className="break-all"><span className="inline-block w-20 font-medium">Signature:</span> {signature}</p>
                          </div>
                        </div>
                      )}
                      
                      {verificationResult && (
                        <div className={`mt-3 p-2 rounded-md text-center text-sm font-medium ${
                          verificationResult.includes('Successfully') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {verificationResult}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-gray-50 m-2.5 px-6 py-3 text-xs text-gray-500 border-t">
          <div className="flex justify-between items-center">
            <div>Powered by Vedavik Farm Direct</div>
            <div>© 2025 All rights reserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}