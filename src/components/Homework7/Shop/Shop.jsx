import { Link, Outlet } from 'react-router';
import styles from './Shop.module.css';

function Shop() {
  return (
    <>
      <div className={styles.text}>
        <p>Список товарів</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link to='televisions'>Телевізори</Link>
        </li>
        <li className={styles.listItem}>
          <Link to='laptops'>Ноутбуки</Link>
        </li>
        <li className={styles.listItem}>
          <Link to='phones'>Телефони</Link>
        </li>
        <li className={styles.listItem}>
          <Link to='monitors'>Монітори</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
}

export default Shop;
