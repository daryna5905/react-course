import { useNavigate } from 'react-router';
import frontsRoutes from '../Router/frontsRoutes';
import styles from './GoHomeButton.module.css';

function GoHomeButton() {
  const navigate = useNavigate();
  return (
    <>
      <button
        className={styles.button}
        onClick={() => navigate(frontsRoutes.navigate.home)}
      >
        На головну
      </button>
    </>
  );
}

export default GoHomeButton;
