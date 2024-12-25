import React from 'react';
import styles from './Slidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
          <a href='/Farmerorderlist'><button className={styles.menuButton}>Find Contract</button> </a>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton}>Contract Management</button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton}>Security</button>
        </li>
        <li className={styles.menuItem}>
         <a href='/Farmerguide'> <button className={styles.menuButton}>Farming Guide</button> </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
