import React from 'react';
import styles from './Buttons.module.css';

export default function Buttons({ btnClick }) {
  let btn = ['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', '.', '0', '=', '/', '⌫', 'C'];
  return (
    <div className={styles.but}>
      {btn.map((val, index) => (
        <button
          key={index}
          className={val === 'C' ? ` ${styles.c}` : styles.calcBtn}
          onClick={()=>btnClick(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
}
