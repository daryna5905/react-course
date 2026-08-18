import { useEffect, useState } from 'react';
import styles from './TeachersEdit.module.css';
import useTeachersApi from '../../../hooks/useTeachersApi';
import { useNavigate, useParams } from 'react-router';
import frontsRoutes from '../../../Router/frontsRoutes';

function TeacherEdit() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [emptyInput, setEmptyInput] = useState({
    emptyName: false,
    emptySubject: false,
  });
  const { isLoading, editTeacher, getTeacherById, error } = useTeachersApi();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTeacher = async () => {
      const teacher = await getTeacherById(id);
      if (teacher) {
        setName(teacher.name ?? '');
        setSubject(teacher.subject ?? '');
      }
    };
    loadTeacher();
  }, [id, getTeacherById]);

  const handleClick = async () => {
    const trimmedName = name.trim();
    const trimmedSubject = subject.trim();

    if (trimmedName && trimmedSubject) {
      setEmptyInput({ emptyName: false, emptySubject: false });
      const result = await editTeacher({
        id,
        name: trimmedName,
        subject: trimmedSubject,
      });
      if (result) {
        navigate(frontsRoutes.navigate.teachers.root);
      }
    } else if (!trimmedName && !trimmedSubject) {
      setEmptyInput({ emptyName: true, emptySubject: true });
    } else if (!trimmedSubject) {
      setEmptyInput({ emptyName: false, emptySubject: true });
    } else {
      setEmptyInput({ emptyName: true, emptySubject: false });
    }
  };

  return (
    <>
      <div className={styles.addNewTeacherBlock}>
        <h1 className={styles.title}>Редагувати вчителя</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${styles.input} ${emptyInput.emptyName ? styles.error : ''}`}
          type='text'
          placeholder="Ім'я та Прізвище"
        />
        <input
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className={`${styles.input} ${emptyInput.emptySubject ? styles.error : ''}`}
          type='text'
          placeholder='Предмет'
        />
        <button
          onClick={handleClick}
          className={styles.button}
          disabled={isLoading}
        >
          Оновити вчителя
        </button>
      </div>
    </>
  );
}

export default TeacherEdit;
