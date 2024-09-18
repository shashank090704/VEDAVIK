import React from 'react';
import styles from './Slidebar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import{faFileContract}from '@fortawesome/free-solid-svg-icons';
import{faShield}from '@fortawesome/free-solid-svg-icons';
import{faCloud}from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
 
  return (
    <div className={styles.sidebar}>
     
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
        <a href="/Farmerorderlist"><button className={styles.button}>Find Contract
        <div className={styles.search}></div>
          
        </button></a>
        </li>
        </ul>
        <div className='others'>
          <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <a href='/Farmercontract'><button className={styles.button}> Contract Management <div className={styles.Cmanage}></div></button></a>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.button}>Security<div className={styles.Security}></div></button>
        </li>
        <li className={styles.menuItem}>
        <a href='/Farmerguide'><button className={styles.button}>Farming Guide<div className={styles.Fguide}></div></button></a> 
        </li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
