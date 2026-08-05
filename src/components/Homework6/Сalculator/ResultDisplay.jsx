import { memo } from 'react';
import styles from './Calculator.module.css';

function ResultDisplay({ calculatedResult }) {
  console.log('ResultDisplay рендериться');
  return (
    <>
      <div className={styles.calculatedResult}>{calculatedResult}</div>
    </>
  );
}

export default memo(ResultDisplay);
