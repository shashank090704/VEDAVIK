// import React from 'react';
// import { FaUser } from 'react-icons/fa';
// import styles from './Navbar.module.css';
// import { useRouter } from 'next/router';

// const Navbar = () => {
//   const router = useRouter();
//   const logout = async()=>{
//     try {
//       const res = await axios.post("/api/farmer/logout")
//       router.push('/')
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   return (
//     <div className={styles.navbarContainer}>
//       <div className={styles.brand}>FarmConnect</div>
//       <div className={styles.navItems}>
//         <FaUser className={styles.profileIcon} />
//         <button className={styles.logoutButton} onClick={logout}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React from 'react';
import { FaUser } from 'react-icons/fa';
import styles from './Navbar.module.css';
import axios from 'axios';  // Add the axios import

const Navbar = () => {

  const logout = async () => {
    try {
      const res = await axios.post("/api/farmer/logout");
      window.location.href = '/';  // Use window.location.href for navigation
    } catch (error) {
      console.error(error);  // Use console.error for logging errors
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <div className={styles.brand}>FarmConnect</div>
      <div className={styles.navItems}>
        <FaUser className={styles.profileIcon} />
        <button className={styles.logoutButton} onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
