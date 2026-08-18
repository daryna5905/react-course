import { useNavigate } from 'react-router';
import frontsRoutes from '../../Router/frontsRoutes';
import styles from './TeacherCard.module.css';

function TeacherCard({ teacher, onSelect, isSelected }) {
  const buttonLabel = isSelected ? 'Вибрано' : 'Вибрати на збори';
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.section1}>
          <img src={teacher.photo} alt='teacher' />
          <div className={styles.text}>
            <div>{teacher.name}</div>
            <div>{teacher.subject}</div>
          </div>
        </div>
        <div onClick={() => onSelect(teacher.id)} className={styles.section2}>
          {!!onSelect ? <button>{buttonLabel}</button> : null}
        </div>
      </div>
    </>
  );
}

export default TeacherCard;
