import { useNavigate } from 'react-router';
import styles from './HomePage.module.css';
import frontsRoutes from '../../../Router/frontsRoutes';

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Ласкаво просимо до Додатку "Вчителі"!</h1>
      <p className={styles.text}>
        Цей додаток допоможе вам керувати інформацією про вчителів, викликати їх
        на збори та дізнаватися про розробника
      </p>
      <div className={styles.buttons}>
        <button
          onClick={() => navigate(frontsRoutes.navigate.teachers.root)}
          className={styles.button}
        >
          Переглянути вчителів
        </button>
        <button
          onClick={() => navigate(frontsRoutes.navigate.meeting)}
          className={styles.button}
        >
          Переглянути список для зборів
        </button>
      </div>
    </div>
  );
}

export default HomePage;
