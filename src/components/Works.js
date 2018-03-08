import React from 'react';
import styles from '../styles/components/_works.scss';

const Works = () => (
  <div className={styles.main_container}>
    <h1>Works</h1>
    <div className={styles.card_container}>
      <div className={styles.card}>Sites</div>
      <div className={styles.card}>Games</div>
      <div className={styles.card}>Apps</div>
    </div>
  </div>
);

export default Works;
