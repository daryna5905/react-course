import { useState } from 'react';
import styles from './Messenger.module.css';

function Message({ message }) {
  const [likeCounter, setLikeCounter] = useState(0);
  return (
    <>
      <div className={styles.message}>
        <div className={styles.text}>{message}</div>
        <button
          className={styles.likeButton}
          onClick={() => setLikeCounter((prev) => prev + 1)}
        >
          Like
        </button>
        <button
          className={styles.dislikeButton}
          onClick={() => setLikeCounter((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          Dislike
        </button>
        <div className={styles.likeCount}>Likes:{likeCounter}</div>
      </div>
    </>
  );
}

export default Message;
