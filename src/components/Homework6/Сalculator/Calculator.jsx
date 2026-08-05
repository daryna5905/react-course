import { useMemo, useState } from 'react';
import styles from './Calculator.module.css';
import ResultDisplay from './ResultDisplay';

function Calculator() {
  const [numberA, setNumberA] = useState();
  const [numberB, setNumberB] = useState();
  const [counter, setCounter] = useState(0);
  console.log('Calculator рендериться');

  const calculateResult = useMemo(() => {
    console.log('useMemo пeрeраховує calculateResult');
    if (!numberA || !numberB) {
      return null;
    }
    return numberA + numberB;
  }, [numberA, numberB]);
  return (
    <>
      <h1 className='task'>Задача 1</h1>
      <p className='text'>
        Створіть компонент-калькулятор, який має два незалежні поля вводу: одне
        для числа A і одне для числа B. Також є окремий компонент ResultDisplay,
        який відображає A + B. Обгорніть ResultDisplay у React.memo().
        Використайте useMemo в батьківському компоненті, щоб обчислити A + B і
        передати цей результат до ResultDisplay. Переконайтеся, що ResultDisplay
        ререндериться лише тоді, коли змінюються A або B, а не коли змінюється
        інший незалежний стан у батьківському компоненті (наприклад, лічильник,
        що не впливає на A чи B).
      </p>
      <div className={styles.calculatorInputs}>
        <input
          type='number'
          placeholder='Введіть число'
          className={styles.calculatorInput}
          onChange={(e) => setNumberA(+e.target.value)}
        />
        <input
          type='number'
          placeholder='Введіть число'
          className={styles.calculatorInput}
          onChange={(e) => setNumberB(+e.target.value)}
        />
      </div>
      <ResultDisplay calculatedResult={calculateResult} />
      <div className={styles.counter}>
        <button
          className={styles.counterButton}
          onClick={() => setCounter((prev) => prev + 1)}
        >
          +
        </button>
        <button
          className={styles.counterButton}
          onClick={() => setCounter((prev) => prev - 1)}
        >
          -
        </button>
      </div>
      <div className={styles.counterResult}>{counter}</div>
    </>
  );
}

export default Calculator;
