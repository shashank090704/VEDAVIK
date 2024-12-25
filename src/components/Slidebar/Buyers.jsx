import React from 'react';
import styles from './Slidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import{faFileContract}from '@fortawesome/free-solid-svg-icons';
import{faCartShopping}from '@fortawesome/free-solid-svg-icons';
import{faClockRotateLeft}from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      {/* <div className={styles.profileSection}>
        <div className={styles.profileIcon}>#A001</div>
      </div> */}
      <ul className={styles.menuList}>
        <li className={styles.menuItem}>
        <a href="/Createorder"><button className={styles.menuButton}>Create Contract</button></a>
        </li>
        
        <li className={styles.menuItem}>
          <button className={styles.menuButton}>Contract Management </button>
        </li>
        <li className={styles.menuItem}>
         <a href='/Buyerorderlist'> <button className={styles.menuButton}>Orders</button> </a>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.menuButton}>History</button>
        </li>
      </ul>
      </div>
    
  );
};

export default Sidebar;
