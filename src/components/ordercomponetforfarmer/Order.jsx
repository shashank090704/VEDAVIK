
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FaMapMarkerAlt, FaStar,FaUser } from 'react-icons/fa';


function Order(props) {

  function formatDateOnly(dateString) {
    const date = new Date(dateString);
  
    // Extract components
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    
    // Format as YYYY-MM-DD or MM/DD/YYYY
    return `${year}-${month}-${day}`; // Change format as needed
  }

  const styles = {
    card: {
      position: 'relative',  
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      background: 'linear-gradient(135deg, rgba(0, 100, 0, 0.8) 0%, rgba(0, 50, 0, 0.5) 100%)',
      padding: '20px',
      borderRadius:'5px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      maxWidth: '1000px',
      width:'700px',  
      margin: '20px auto',
    },
    leftSection: {
      flex: 1,
      paddingRight: '20px',
    },
    rightSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingLeft: '20px',
    },
    text: {
      fontSize: '16px',
      margin: '5px 0',
      color: '#fff',
    },
    icon: {
      marginLeft: '5px',
      color: '#f05a28',
    },
    image: {
      width: '150px',
      height: 'auto',
      borderRadius: '10px',
      marginLeft: '20px',
    },
    date: {
      position: 'absolute',
      top: '4px',
      right: '0px',
      fontSize: '14px',
      color: '#fff',
      paddingBottom:'20px',
      paddingRight:'9px',
      marginBottom:'40px',
    },
    profileContainer: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      backgroundColor: 'black',  // Black circular background
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '10px',
    },
    profileIcon: {
      fontSize: '30px',
      color: 'white', // White person icon
    },
    rating: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '10px',
    },
    star: {
      color: '#f5b50a',
      marginRight: '3px',
    },
    inactiveStar: {
      color: '#ccc',
      marginRight: '3px',
    },
    button: {
      backgroundColor: '#28a745',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      boxShadow: '0 0 10px 2px rgba(40, 167, 69, 0.7)', // Green glow
      transition: 'box-shadow 0.3s ease-in-out',
    },
    // Add hover effect for green glow
    buttonHover: {
      boxShadow: '0 0 20px 4px rgba(40, 167, 69, 1)', // Stronger green glow on hover
    }
  };




    const router = useRouter();
    const tempFarmId = props.farmerid;
    const buyerId = props.order.buyerid;
    const orderId = props.order._id;
   
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
           await localStorage.setItem('myData', JSON.stringify({ senderId: tempFarmId, receiverId: buyerId , orderId : orderId , isfarmer : "true" }));
           router.push("/Chating")
        } catch (error) {
            console.error("Error navigating:", error);
        }
    };

    return (
        // <>
        //     <button onClick={contact}>Contact Buyer</button>
        // </>
        <div style={styles.card}>
        <div style={styles.leftSection}>
          <p style={styles.text}><strong>Duration:</strong> {props.order.duration} months</p>
          <p style={styles.text}><strong>Crop Name:</strong> {props.order.name} </p>
          <p style={styles.text}><strong>Payment:</strong> {props.order.amount} Rs/kg</p>
          <p style={styles.text}><strong>Location:</strong> {props.order.city} <FaMapMarkerAlt style={styles.icon} /></p>
        </div>
        {/* <img src="https://i.imgur.com/oCkEbrA.jpg" alt="wheat" style={styles.image} /> */}
        <div style={styles.rightSection}>
          <p style={styles.date}>{formatDateOnly(props.order.date)}</p> {/* Date at top right */}
          
          <div style={styles.profileContainer}> {/* Black circle with white person */}
            <FaUser style={styles.profileIcon} />
          </div>
          
          <div style={styles.rating}> {/* Rating below profile pic */}
            <FaStar style={styles.star} />
            <FaStar style={styles.star} />
            <FaStar style={styles.star} />
            <FaStar style={styles.star} />
            <FaStar style={styles.inactiveStar} />
          </div>
          
          <button style={styles.button}onMouseEnter={(e) => e.target.style.boxShadow = styles.buttonHover.boxShadow}
  onMouseLeave={(e) => e.target.style.boxShadow = styles.button.boxShadow} onClick={contact}>Contact with buyer</button>
        </div>
      </div>
    );
}

export default Order;
