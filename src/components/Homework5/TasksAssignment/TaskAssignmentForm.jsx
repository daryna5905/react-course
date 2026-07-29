import TaskAssignmentSeletor from './TaskAssignmentSeletor';
import styles from './TaskAssigned.module.css';

function TaskAssignmentForm({ tasksList, workersList, onSelect }) {
  return (
    <div className={styles.taskSelector}>
      <h1 className={styles['taskSelector-title']}>Розподілювач задач</h1>
      <div>
        {tasksList.map((task) => (
          <TaskAssignmentSeletor
            key={task.id}
            task={task}
            workersList={workersList}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskAssignmentForm;
