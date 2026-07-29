import styles from './TicTacToeGame.module.css';

function GameBlock({ handleClick, imgSrc, id }) {
  return (
    <>
      <div className={styles.gameBlock} onClick={() => handleClick(id)}>
        {imgSrc}
      </div>
    </>
  );
}

export default GameBlock;
