import styles from './Rules.module.css';

function Rules() {
  return (
    <>
      <ul className={styles.list}>
        <li className={styles.listItem}>При отриманні</li>
        <li className={styles.listItem}>Переказ на картку</li>
        <li className={styles.listItem}>Записати у зошит</li>
      </ul>
    </>
  );
}

export default Rules;
