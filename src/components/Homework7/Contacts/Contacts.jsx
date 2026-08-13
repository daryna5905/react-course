import styles from './Contacts.module.css';

function Contacts() {
  return (
    <>
      <div className={styles.text}>
        <p>Нас дуже легко знайти</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>1) Потягом до Ужгорода</li>
        <li className={styles.listItem}>
          2)Шукаєте бабу Галю (вона дорогу покаже)
        </li>
        <div className={styles.text}>
          <p>До зустрічі</p>
        </div>
      </ul>
    </>
  );
}

export default Contacts;
