import { useState } from 'react';
import styles from './Game.module.css';

function ControlBlock({ playerNumber, makeMove, isBlocked }) {
  const [inputValue, setInputValue] = useState('');
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.panelTitle}>Гравець {playerNumber}</h2>
      <div className={styles.panelBlock}>
        <input
          type='number'
          className={styles.input}
          placeholder='Введіть цифру'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value[0])}
        />
        <button
          onClick={() => {
            makeMove(inputValue, playerNumber);
            setInputValue('');
          }}
          className={styles.makeMoveButton}
          disabled={isBlocked}
        >
          Зробити хід
        </button>
      </div>
    </div>
  );
}

export default ControlBlock;
