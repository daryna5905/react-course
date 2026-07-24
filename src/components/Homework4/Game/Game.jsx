import { useEffect, useState } from 'react';
import ControlBlock from './ControlBlock';
import styles from './Game.module.css';
import NumberView from './NumberView';

const generateNumberArray = () => {
  return Array.from(Math.floor(Math.random() * 1000).toString());
};
const allMoves = new Map();

function Game() {
  const [numberArray, setNumberArray] = useState(
    generateNumberArray().map((num) => ({
      number: num,
    })),
  );

  const [message, setMessage] = useState('');
  const [currentPlayer, setCurrentPlayer] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      const solved = numberArray.filter((obj) => obj.playerNumber);
      if (solved.length === 3) {
        let firstPlayer = 0;
        let secondPlayer = 0;
        solved.forEach((obj) => {
          if (obj.playerNumber === 1) {
            firstPlayer += 1;
          } else {
            secondPlayer += 1;
          }
        });

        if (firstPlayer > secondPlayer) {
          alert('First player won');
        } else {
          alert('Second player won');
        }
      }
    });
  }, [numberArray]);

  const makeMove = (inputValue, playerNumber) => {
    if (!allMoves.has(inputValue)) {
      setCurrentPlayer(playerNumber === 1 ? 2 : 1);
      const guess = numberArray.findIndex(
        (item) => item.number === inputValue && !item.playerNumber,
      );
      if (guess !== -1) {
        setNumberArray((prev) =>
          prev.map((item, index) =>
            index === guess
              ? {
                  ...item,
                  playerNumber,
                  color: playerNumber === 1 ? 'red' : 'blue',
                }
              : item,
          ),
        );
      } else {
        allMoves.set(inputValue, playerNumber);
      }
      setMessage('');
    } else {
      setMessage('Це число вже використовувалось, оберіть інше число');
    }
  };

  return (
    <>
      <h1 className='task'>Задача 2</h1>
      <p className='text'>
        Гра “Вгадай число”. Правила гри: <br /> 1) комп”ютер генерує трицифрове
        число;
        <br />
        2) кожен гравець по черзі задає цифру, якої ще не було (відсліковуємо,
        щоб цифри не повторювалися гравцями — не дозволяємо повторно ввести
        (блокуємо кнопку “Зробити хід”)).
        <br /> 3) якщо цифру вгадано, вона відображаться у полі гри “Число”;{' '}
        <br /> 4) програє той, хто вгадав останню цифру.
      </p>
      <div className={styles.gameBlock}>
        <NumberView numberArray={numberArray} />
        {message && <div className={styles.message}>{message}</div>}
        <div className={styles.controlPanel}>
          <ControlBlock
            playerNumber={1}
            makeMove={makeMove}
            message={message}
            isBlocked={currentPlayer !== 1}
          />
          <ControlBlock
            playerNumber={2}
            makeMove={makeMove}
            message={message}
            isBlocked={currentPlayer !== 2}
          />
        </div>
      </div>
    </>
  );
}

export default Game;
