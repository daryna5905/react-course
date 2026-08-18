import { Outlet } from 'react-router';
import Footer from './components/Footer/Footer';
import MainMenu from './components/MainMenu/MainMenu';
import styles from './MainLayout.module.css';

function MainLayout() {
  return (
    <div className={styles.container}>
      <MainMenu />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
