import { useNavigate } from 'react-router';
import useTeachersApi from '../../../hooks/useTeachersApi';
import styles from './AddNewTeacher.module.css';
import frontsRoutes from '../../../Router/frontsRoutes';
import { useRef, useState } from 'react';

function AddNewTeacher() {
  const inputNameRef = useRef(null);
  const inputSubjectRef = useRef(null);
  const [emptyInput, setEmptyInput] = useState({
    emptyName: false,
    emptySubject: false,
  });
  const { isLoading, addNewTeacher, error } = useTeachersApi();
  const navigate = useNavigate();
  const handleClick = async () => {
    if (
      inputNameRef.current.value.trim() &&
      inputSubjectRef.current.value.trim()
    ) {
      setEmptyInput((prev) => ({
        ...prev,
        emptyName: false,
        emptySubject: false,
      }));
      const result = await addNewTeacher({
        name: inputNameRef.current.value.trim(),
        subject: inputSubjectRef.current.value.trim(),
      });
      if (result) {
        navigate(frontsRoutes.navigate.teachers.root);
      }
    } else if (
      !inputNameRef.current.value.trim() &&
      !inputSubjectRef.current.value.trim()
    ) {
      setEmptyInput((prev) => ({
        ...prev,
        emptyName: true,
        emptySubject: true,
      }));
    } else if (
      !inputSubjectRef.current.value.trim() &&
      inputNameRef.current.value.trim()
    ) {
      setEmptyInput((prev) => ({
        ...prev,
        emptyName: false,
        emptySubject: true,
      }));
    } else if (
      inputSubjectRef.current.value.trim() &&
      !inputNameRef.current.value.trim()
    ) {
      setEmptyInput((prev) => ({
        ...prev,
        emptyName: true,
        emptySubject: false,
      }));
    }
  };
  return (
    <div className={styles.addNewTeacherBlock}>
      <h1 className={styles.title}>Дані вчителя</h1>
      <input
        ref={inputNameRef}
        className={`${styles.input} ${emptyInput.emptyName === true ? styles.error : ''}`}
        type='text'
        placeholder="Ім'я та Прізвище"
      />
      <input
        ref={inputSubjectRef}
        className={`${styles.input} ${emptyInput.emptySubject === true ? styles.error : ''}`}
        type='text'
        placeholder='Предмет'
      />
      <button onClick={handleClick} className={styles.button}>
        Додати вчителя
      </button>
    </div>
  );
}

export default AddNewTeacher;
