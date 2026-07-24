import { useState } from 'react';
import styles from './Game.module.css';

function NumberView({ numberArray }) {
  return (
    <>
      <h1 className={styles.title}>Число</h1>
      <div className={styles.numberBlock}>
        <div className={styles.digitBlock}>
          {numberArray[0].number}
          <div
            style={{ border: `3px solid ${numberArray[0].color} ` }}
            className={`${styles.mask} ${numberArray[0].playerNumber ? styles.clearBackground : ''}`}
          ></div>
        </div>
        <div
          className={styles.digitBlock}
          style={{ border: `3px solid ${numberArray[1].color} ` }}
        >
          {numberArray[1].number}
          <div
            className={`${styles.mask}  ${numberArray[1].playerNumber ? styles.clearBackground : ''}`}
          ></div>
        </div>
        <div
          className={styles.digitBlock}
          style={{ border: `3px solid ${numberArray[2].color} ` }}
        >
          {numberArray[2].number}
          <div
            className={`${styles.mask}  ${numberArray[2].playerNumber ? styles.clearBackground : ''}`}
          ></div>
        </div>
      </div>
    </>
  );
}

export default NumberView;
