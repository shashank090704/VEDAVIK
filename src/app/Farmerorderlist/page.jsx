
'use client';
import Order from '@/components/ordercomponetforfarmer/Order';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from '../../Stylesheet/farmerorderlist.module.css'
import Navbar from '@/components/Navbar/Navbar';
import Searchbar from '@/components/Searchbar';
function Page() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [farmid, setFarmid] = useState("");

    const getFarmid = async () => {
        try {
            const res = await axios.post("/api/farmer/getfarmerdata");
            console.log(res.data.data._id, "farmer");
            setFarmid(res.data.data._id);
        } catch (err) {
            console.error("Error fetching farmer data:", err);
            setError("Failed to fetch farmer data");
        }
    };

    const getOrders = async () => {
        try {
            const res = await axios.post('/api/farmer/getlistoforder');
            console.log("hi");
            console.log(res.data.orders);
            setOrders(res.data.orders); // Directly set the orders array
        } catch (err) {
            console.error("Error fetching orders:", err);
            setError("Failed to fetch orders");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getOrders();
        getFarmid();
    }, []);

    // Debugging outputs
    console.log(farmid, "farmi");

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        // <div>
        //     {orders.map((order) => (
        //         <React.Fragment key={order._id}> {/* Adjust the key according to your order object structure */}
        //             <Order order={order} farmerid={farmid} />
        //             <h1>hi</h1>
        //         </React.Fragment>
        //     ))}
        // </div>
        <div className={styles.bo}>
        <Navbar></Navbar>
        <div className={styles.body}>
        
        <div className={styles.bodyone}>
        <Searchbar />
        <div className={styles.orderbox}>
            <div className={styles.orderlistcontainer}>  {orders.map((order) => (
            <React.Fragment key={order._id}> 
                <Order order={order} farmerid={farmid} />

               
            </React.Fragment>

        ))}</div>
        </div>
        </div>
    </div>
    </div>
    );
}

export default Page;

