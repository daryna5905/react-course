import { useNavigate } from 'react-router';
import frontsRoutes from '../../Router/frontsRoutes';
import styles from './EditDeleteButtons.module.css';

function EditDeleteButtons({ id, deleteTeacher }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    await deleteTeacher(id);
  };

  return (
    <div className={styles.buttons}>
      <button
        onClick={() => navigate(frontsRoutes.navigate.teachers.edit(id))}
        className={`${styles.button} ${styles['button--blue']}`}
      >
        Редагувати
      </button>
      <button
        className={`${styles.button} ${styles['button--red']}`}
        onClick={handleDelete}
      >
        Видалити
      </button>
    </div>
  );
}

export default EditDeleteButtons;
