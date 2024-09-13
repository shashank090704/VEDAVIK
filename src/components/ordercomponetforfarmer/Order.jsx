
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react';



function Order(props) {
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
           await localStorage.setItem('myData', JSON.stringify({ senderId: tempFarmId, receiverId: buyerId }));
           router.push("/Chating")
        } catch (error) {
            console.error("Error navigating:", error);
        }
    };

    return (
        <>
            <button onClick={contact}>Contact Buyer</button>
        </>
    );
}

export default Order;
