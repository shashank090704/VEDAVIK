
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

'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import styles from "../../Stylesheet/Chat.module.css";
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
      description: 'Test Transaction',
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
    } catch (error) {
      console.error("Error fetching initial messages", error);
    }
  };

  // Increase the price
  const increasePrice = async () => {
    try {
      await axios.post("/api/buyer/increase", { senderId, orderId, tempamt });
      alert("Price has been increased.");
      handleReload();
    } catch (error) {
      console.error("Error increasing price", error);
    }
  };

  // Confirm the order
  const confirmOrder = async () => {
    try {
      await axios.post('/api/farmer/confirm', { senderId, orderId });
      alert("Order confirmed.");
      handleReload();
    } catch (error) {
      console.error("Error confirming order", error);
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
    <div className={styles.container}>
      <div ref={chatboxEl} className={styles.chatbox} />
      {isfarmer === "true" ? (
        <div className={styles.farmerActions}>
          <div>{order?.isaccepted ? "Order confirmed by you!" : `Confirm the price: ${order?.amount}`}</div>
          {!order?.isaccepted && <button className={styles.button} onClick={confirmOrder}>Confirm</button>}
          {!order?.isaccepted && <button className={styles.button} onClick={handleReload}>Get the latest price</button>}
        </div>
      ) : (
        <div className={styles.buyerActions}>
          {!order?.isaccepted ? (
            <>
              <div>Increase the current price: {order?.amount}</div>
              <input className={styles.input} type="text" placeholder="Increase the amount" value={tempamt} onChange={(e) => settempamt(e.target.value)} />
              <button className={styles.button} onClick={increasePrice}>Increase</button>
              <button className={styles.button} onClick={handleReload}>Check confirmation</button>
            </>
          ) : (
            <>
              <h1>Pay amount: {order?.amount}</h1>
              <button className={styles.button} style={{background : "green"}} onClick={handlePayment} disabled={loading}>{loading ? 'Processing...' : 'Pay Now'}</button>
              {paymentId && (
                <>
                  <h3>Payment Details:</h3>
                  <p>Payment ID: {paymentId}</p>
                  <p>Order ID: {orderrId}</p>
                  <p>Signature: {signature}</p>
                </>
              )}
              {verificationResult && <p>{verificationResult}</p>}
            </>
          )}
        </div>
      )}
    </div>
  );
}
