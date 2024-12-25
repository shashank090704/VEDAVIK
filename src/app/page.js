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


//       {/* Buttons appear after animation */}
      
//         <div className={styles.buttonsContainer}>
//         <a href='/Farmerlogin'>  <button className={styles.farmerLogin}>Farmer Login</button></a>
//           <a href='/Buyerlogin'><button className={styles.buyerLogin}>Buyer Login</button></a>
//         </div>
      
//     </div>
//   );
// };
// export default HomePage;
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
      className={styles.container}
    >
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className={styles.navbar}
      >
        <div className={styles.logo}>VRISHTI</div>
        <ul className={styles.navLinks}>
          <li><a href="#">Features</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className={styles.authButtons}>
          {/* <a href="/login" className={styles.login}>Login</a>
          <a href="/signup" className={styles.signup}>Sign Up</a> */}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className={styles.heroSection}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } }
          }}
          className={styles.heroContent}
        >
          <motion.h1
           initial={{ y: -50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className={styles.title}
          >
            Connecting Farmers & Buyers for a Better Tomorrow.
          </motion.h1>
          <motion.p
           initial={{ y: -50, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className={styles.tagline}
          >
            Empowering farmers with fair trade opportunities and buyers with fresh produce.
          </motion.p>
          <motion.div
             initial={{ y: -50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className={styles.ctaButtons}
          >
            <a href="/Farmerlogin" className={styles.ctaFarmer}>For Farmers</a>
            <a href="/Buyerlogin" className={styles.ctaBuyer}>For Buyers</a>
          </motion.div>
        </motion.div>
      </section>

      {/* Partner Logos */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className={styles.partners}
      >
        <h3 style={{color : "gray"}}>Trusted by</h3>
        <motion.div
          className={styles.partnerLogos}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { delayChildren: 0.5, staggerChildren: 0.2 }
            }
          }}
        >
          <motion.img  src="https://imgs.search.brave.com/OMP8FYIpfLLKfurZmntE_pgcCK42fwik6UZGWLUp7jg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMtcmVkZXNpZ24u/Y25iY2ZtLmNvbS9k/aXN0LzI0NjllZDBh/OWE0Y2FmZGYwNTVl/LnN2Zw" alt="Partner 1" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} />
          <motion.img src="https://imgs.search.brave.com/jiHj1T2kRz_I03lYwSNPACeDikXrHH8PiWSGZsvQjns/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb21ha2VyLm5l/dC9pY29ucy9jYXRl/Z29yaWVzL2Zvb2Qv/bG9nbzQuc3Zn" alt="Partner 2" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} />
          <motion.img src="https://imgs.search.brave.com/BaHQsWozvOg6IxvjdcxvYkuwHl8C-BI055t2IPWlBmQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly8xMDAw/bG9nb3MubmV0L3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIzLzA0/L0RvbWlub3MtbG9n/by01MDB4MjgxLnBu/Zw" alt="Partner 3" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} />
          <motion.img src="https://imgs.search.brave.com/Mq_JQGaH49ThvcUCroai8REq97QQohF5c4-lNgmENSk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MTAyZDkwZmE4NDlj/NDAwMDRmOWExMzMu/cG5n" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} />
        </motion.div>
      </motion.section>
    </motion.div>
  );
};

export default HomePage;
