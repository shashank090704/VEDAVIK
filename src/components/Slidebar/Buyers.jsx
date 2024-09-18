import React from 'react';
import styles from './Slidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from '@fortawesome/free-solid-svg-icons';
import{faFileContract}from '@fortawesome/free-solid-svg-icons';
import{faCartShopping}from '@fortawesome/free-solid-svg-icons';
import{faClockRotateLeft}from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* <div className={styles.profileSection}>
        <div className={styles.profileIcon}>#A001</div>
      </div> */}
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
        <a href="/Createorder"><button className={styles.button}>Create Contract<div className={styles.CreateContract}></div></button></a>
        </li>
        </ul>
        <div className='others'>
          <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <button className={styles.button}>Contract Management <div className={styles.Cmanage}></div></button>
        </li>
        <li className={styles.menuItem}>
         <a href='/Buyerorderlist'> <button className={styles.button}>Orders<div className={styles.Orders}></div></button> </a>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.button}>History<div className={styles.History}></div></button>
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
