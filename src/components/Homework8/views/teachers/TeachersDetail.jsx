function TeachersDetail() {
  return (
    <>
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
    </>
  );
}

export default TeachersDetail;
