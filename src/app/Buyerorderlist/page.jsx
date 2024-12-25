
// 'use client';
// import Order from '@/components/ordercomponentforbuyer/Order';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Page() {
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
//             const res = await axios.post('/api/buyer/getlistoforder', { buyerid });
//             console.log("hi");
//             console.log(res.data.orders, "order list");
//             setOrders(res.data.orders); // Directly set the orders array
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
//             getOrders();
//         }
//     }, [buyerid]);

//     // Debugging outputs
//     console.log(buyerid, "buyer ID");
//     console.log(orders, "orders");

//     if (loading) return <div>Loading...</div>;
//     if (error) return <div>{error}</div>;

//     return (
//         <div>
//             {orders.length === 0 ? (
//                 <div>No orders available</div>
//             ) : (
//                 orders.map((order) => (
//                     order.tempfarmid && order.tempfarmid.length > 0 ? (
//                         order.tempfarmid.map((tempfarmer, index) => (
//                             tempfarmer ? (
//                                 <React.Fragment key={`${order._id}-${index}`}>
//                                     <Order order={order} tempfarmer={tempfarmer} />
//                                     <h1>{tempfarmer}</h1>
//                                 </React.Fragment>
//                             ) : null
//                         ))
//                     ) : (
//                         <div key={order._id}>No farmers found for this order</div>
//                     )
//                 ))
//             )}
//         </div>
//     );
// }

// export default Page;

'use client';
import Navbar from '../../components/Navbar/Navbar';
import Order from '@/components/ordercomponentforbuyer/Order';
import axios from 'axios';
import styles from '../../Stylesheet/buyerorderlist.module.css'
import React, { useEffect, useState } from 'react';


function Page() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [buyerid, setBuyerId] = useState("");

    const getBuyerId = async () => {
        try {
            const res = await axios.post("/api/buyer/getbuyerdata");
            console.log(res.data.data._id, "buyer");
            setBuyerId(res.data.data._id);
        } catch (err) {
            console.error("Error fetching buyer data:", err);
            setError("Failed to fetch buyer data");
        }
    };

    const getOrders = async () => {
        try {
            if(buyerid){
            const res = await axios.post('/api/buyer/getlistoforder', { buyerid });
            // console.log("hi");
            // console.log(res.data.orders, "order list");
            setOrders(res.data.orders); // Directly set the orders array
            }
        } catch (err) {
            console.error("Error fetching orders:", err);
            setError("Failed to fetch orders");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (!buyerid) {
            getBuyerId();
        } else {
            // console.log(buyerid , "int useeffect")
            getOrders();
        }
    }, [buyerid]);

    // Debugging outputs
    if( buyerid && orders ){
    console.log(buyerid, "buyer ID 12");
    console.log(orders, "orders 12");
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div><Navbar/>
        <div className={styles.body}>
        
        <div className={styles.bodyone}>
       
        <div className={styles.orderbox}>
            <div className={styles.orderlistcontainer}>
            {orders.length === 0 ? (
                <div>No orders available</div>
            ) : (
                orders.map((order) => (
                    order.tempfarmid && order.tempfarmid.length > 0 ? (
                        order.tempfarmid.map((tempfarmer, index) => ( 
                            tempfarmer ? (
                                <React.Fragment key={`${order._id}-${index}`}>
                                    <Order order={order} tempfarmer={tempfarmer} />
                                    {/* <h1>{tempfarmer} hi</h1> */}
                                </React.Fragment>
                            ) : null
                        ))
                    ) 
                    : (
                        <div key={order._id}></div>
                    )
                ))
            )}  
            </div>
        </div>
        </div>
    </div>
    </div>
    );
}



export default Page;

