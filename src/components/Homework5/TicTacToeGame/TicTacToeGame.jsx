import { useEffect, useState } from 'react';
import GameBlock from './GameBlock';
import styles from './TicTacToeGame.module.css';
import xImg from '../../../assets/x.png';
import oImg from '../../../assets/o.png';

const winGame = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 6, 9],
  [3, 5, 7],
  [4, 5, 6],
  [7, 8, 9],
];

function TicTacToeGame() {
  const [historyGame, setHistoryGame] = useState([]);
  const [imgSrc, setImgSrc] = useState({});
  const handleClick = (id) => {
    if (!historyGame.find((obj) => obj.id === id)) {
      if (
        historyGame.length === 0 ||
        historyGame[historyGame.length - 1].title === 'o'
      ) {
        setHistoryGame((prev) => {
          return [...prev, { title: 'x', id }];
        });
        setImgSrc((prev) => {
          return {
            ...prev,
            [id]: <img className={styles.img} src={xImg} alt='x' />,
          };
        });
      } else {
        setHistoryGame((prev) => {
          return [...prev, { title: 'o', id }];
        });
        setImgSrc((prev) => {
          return { ...prev, [id]: <img src={oImg} alt='o' /> };
        });
      }
    }
  };
  useEffect(() => {
    console.log({ historyGame });

    if (historyGame.length >= 5) {
      if (historyGame.length % 2 !== 0) {
        const onlyX = new Set(
          historyGame.filter((obj) => obj.title === 'x').map((item) => item.id),
        );
        const matchX = winGame.find((elem) =>
          elem.every((num) => onlyX.has(num)),
        );
        if (matchX) {
          setTimeout(() => alert('Game over. "X" winner !!!'), 100);
          setHistoryGame([]);
          setImgSrc({});
        } else if (historyGame.length === 9) {
          setTimeout(() => alert('Game over. Try again'), 100);
          setHistoryGame([]);
          setImgSrc({});
        }
      } else {
        const onlyO = new Set(
          historyGame.filter((obj) => obj.title === 'o').map((item) => item.id),
        );
        const matchO = winGame.find((elem) =>
          elem.every((num) => onlyO.has(num)),
        );
        if (matchO) {
          setTimeout(() => alert('Game over. "O" winner !!!'), 100);
          setHistoryGame([]);
          setImgSrc({});
        } else if (historyGame.length === 9) {
          setTimeout(() => alert('Game over. Try again'), 100);
          setHistoryGame([]);
          setImgSrc({});
        }
      }
    }
  }, [imgSrc, historyGame]);
  return (
    <>
      <h1 className='task'>Задача 2</h1>
      <p className='text'>
        Хрестики-нулики. З історією (можна повернутись назад)
      </p>
      <div className={styles.gameBlocks}>
        <GameBlock imgSrc={imgSrc[1]} handleClick={handleClick} id={1} />
        <GameBlock imgSrc={imgSrc[2]} handleClick={handleClick} id={2} />
        <GameBlock imgSrc={imgSrc[3]} handleClick={handleClick} id={3} />
        <GameBlock imgSrc={imgSrc[4]} handleClick={handleClick} id={4} />
        <GameBlock imgSrc={imgSrc[5]} handleClick={handleClick} id={5} />
        <GameBlock imgSrc={imgSrc[6]} handleClick={handleClick} id={6} />
        <GameBlock imgSrc={imgSrc[7]} handleClick={handleClick} id={7} />
        <GameBlock imgSrc={imgSrc[8]} handleClick={handleClick} id={8} />
        <GameBlock imgSrc={imgSrc[9]} handleClick={handleClick} id={9} />
      </div>
    </>
  );
}

export default TicTacToeGame;
