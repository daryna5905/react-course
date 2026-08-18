import useTeachersApi from '../../../hooks/useTeachersApi';
import apiRoutes from '../../../../../api/apiRoutes';
import { useEffect, useState } from 'react';
import TeacherCard from '../../../components/teachers/TeacherCard';
import { useNavigate } from 'react-router';
import frontsRoutes from '../../../Router/frontsRoutes';
import styles from './TeachersList.module.css';
import EditDeleteButtons from '../../../components/EditDeleteButtons/EditDeleteButtons';

function TeachersList() {
  const {
    data: teachersList,
    isLoading,
    error,
    fetchData,
    deleteTeacher,
  } = useTeachersApi();
  const [selectedTeachersList, setSelectedTeachersList] = useState([]);
  const navigate = useNavigate();

  const onSelect = (teacherId) => {
    if (selectedTeachersList.includes(teacherId)) {
      setSelectedTeachersList((prevList) =>
        prevList.filter((id) => id !== teacherId),
      );
    } else {
      setSelectedTeachersList((prevList) => [...prevList, teacherId]);
    }
  };

  const goToMeeting = () => {
    const teachersListForMeeting = teachersList.filter((teacher) =>
      selectedTeachersList.includes(teacher.id),
    );
    navigate(frontsRoutes.navigate.meeting, {
      state: {
        teachersListForMeeting,
      },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  let currentContent;
  if (isLoading) {
    currentContent = <div className={styles.loader}></div>;
  } else if (error) {
    currentContent = <div className={styles.error}>Error</div>;
  } else {
    currentContent = (
      <div className={styles.listCards}>
        {!teachersList || teachersList?.length === 0 ? (
          <div>Список порожній</div>
        ) : (
          teachersList.map((teacher) => (
            <div className={styles.card} key={teacher.id}>
              <TeacherCard
                teacher={teacher}
                onSelect={onSelect}
                isSelected={selectedTeachersList.includes(teacher.id)}
              />
              <EditDeleteButtons
                key={teacher.id}
                id={teacher.id}
                deleteTeacher={deleteTeacher}
              />
            </div>
          ))
        )}
      </div>
    );
  }
  const selectedTeachersCount = selectedTeachersList.length;

  return (
    <div className={styles.list}>
      <h1 className={styles.title}>Список вчителів</h1>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${styles['button--color']}`}
          onClick={() => navigate(frontsRoutes.navigate.teachers.add)}
        >
          Додати нового вчителя
        </button>
        {!!selectedTeachersCount && (
          <button onClick={() => goToMeeting()} className={styles.button}>
            Викликати {selectedTeachersCount} вчителів на збори
          </button>
        )}
      </div>
      <div>{currentContent}</div>
    </div>
  );
}

export default TeachersList;
