import React from 'react';
import styles from './Slidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.profileSection}>
        <div className={styles.profileIcon}>#A001</div>
      </div>
      <ul className={styles.menu}>
        <li className={styles.menuItem}>
          <button className={styles.button}>Find Contract</button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.button}>Contract Management</button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.button}>Security</button>
        </li>
        <li className={styles.menuItem}>
          <button className={styles.button}>Farming Guide</button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
