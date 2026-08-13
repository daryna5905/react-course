import styles from './Main.module.css';

function Main() {
  return (
    <>
      <h1 className={styles.title}>
        Цей магазин належить програмісту на фрілансі
      </h1>
      <div className={styles.text}>
        <p>Toму</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>Магазин працює коли хоче</li>
        <li className={styles.listItem}>Товари надсилає швидко</li>
        <li className={styles.listItem}>
          На запитання відповідає коли висипається
        </li>
      </ul>
    </>
  );
}

export default Main;
