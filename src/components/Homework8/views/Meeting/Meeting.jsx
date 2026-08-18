import { useLocation, useNavigate } from 'react-router';
import TeacherCard from '../../components/teachers/TeacherCard';
import styles from './Meeting.module.css';
import frontsRoutes from '../../Router/frontsRoutes';

function Meeting() {
  const { state } = useLocation();
  const teachersListForMeeting = state?.teachersListForMeeting;
  const navigate = useNavigate();
  const teachersOnMeeting = () => {
    return (
      <>
        <div className={styles.countsOfTeacher}>
          Список вчителів ({teachersListForMeeting.length}) для виклику на збори
        </div>
        <div className={styles.list}>
          {teachersListForMeeting.map((teacher) => (
            <TeacherCard key={teacher.id} teacher={teacher} />
          ))}
        </div>
      </>
    );
  };

  return (
    <div>
      <h1 className={styles.title}>Учасники зборів</h1>
      {teachersListForMeeting?.length > 0 ? (
        teachersOnMeeting()
      ) : (
        <div className={styles.emptyList}>Список порожній</div>
      )}
      <button
        onClick={() => navigate(frontsRoutes.navigate.teachers.root)}
        className={styles.button}
      >
        Повернутися до списку вчителів
      </button>
    </div>
  );
}

export default Meeting;
