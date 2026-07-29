import styles from './TaskAssigned.module.css';

function AssignedTaskCard({ task, onDelete }) {
  const onTaskDelete = () => {
    onDelete(task.id);
  };
  return (
    <div className={styles.taskCard}>
      <div>{task.title}</div>
      <button className={styles.deleteButton} onClick={onTaskDelete}>
        Delete
      </button>
    </div>
  );
}

export default AssignedTaskCard;
