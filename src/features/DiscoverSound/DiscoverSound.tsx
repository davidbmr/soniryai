import React from 'react';
import styles from './DiscoverSound.module.css';

const DiscoverSound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <p className={styles.subtitle}>Potenc<span className={styles.ia}>ia</span> tu empresa</p>
        <h1 className={styles.title}>¿A qué suena tu marca?</h1>
        <button className={styles.button}>Descúbrelo</button>
      </div>
    </div>
  );
}

export default DiscoverSound;
