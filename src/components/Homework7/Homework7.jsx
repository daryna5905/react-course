import Navigation from './Navigation';
import styles from './Homework7.module.css';
import { Outlet } from 'react-router';

function Homework7() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Homework7;
