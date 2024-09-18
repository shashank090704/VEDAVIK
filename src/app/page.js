// // src/Homepage.js
// 'use client'

// import React from 'react';
// import { useState,useEffect} from 'react';
// import { motion } from 'framer-motion';
// import styles from './page.module.css';

// const HomePage = () => {
//   const [showButtons, setShowButtons] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowButtons(true), 3000); // Buttons appear after 3 seconds (animation time)
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className={styles.container}>
//         <div className={styles.marque}>
//     <h1>Dior Model 2024</h1>
//     <h1>Dior Model 2024</h1>
//     <h1>Dior Model 2024</h1>
//     <h1>Dior Model 2024</h1>
//     <h1>Dior Model 2024</h1>
//    </div>

//       {/* Website Title */}
//       <h1 className={styles.title}>VRISHTI</h1>

//       {/* Farmer and Buyer */}
//       <div className={styles.farmer}>👩‍🌾</div>
//       <div className={styles.buyer}>🧑‍💼</div>

//       {/* Buttons appear after animation */}
//       {showButtons && (
//         <div className={styles.buttonsContainer}>
//         <a href='/Farmerlogin'>  <button className={styles.farmerLogin}>Farmer Login</button></a>
//           <a href='/Buyerlogin'><button className={styles.buyerLogin}>Buyer Login</button></a>
//         </div>
//       )}
//     </div>
//   );
// };
// export default HomePage;

// src/Homepage.js
'use client'

import React from 'react';
import { useState,useEffect} from 'react';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const HomePage = () => {
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowButtons(true), 3000); // Buttons appear after 3 seconds (animation time)
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.container}>


      {/* Buttons appear after animation */}
      
        <div className={styles.buttonsContainer}>
        <a href='/Farmerlogin'>  <button className={styles.farmerLogin}>Farmer Login</button></a>
          <a href='/Buyerlogin'><button className={styles.buyerLogin}>Buyer Login</button></a>
        </div>
      
    </div>
  );
};
export default HomePage;



