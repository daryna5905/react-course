import { workerList } from '../../../data/tasks_devider';
import AssignedTaskCard from './AssignedTaskCard';
import styles from './TaskAssigned.module.css';

function WorkerCard({ worker, workerTaskList, onDelete }) {
  return (
    <div className={styles.workerCard}>
      <h2 className={styles.workerName}>Виконавець: {worker.name}</h2>
      <div className={styles.workerTasks}>
        {workerTaskList.map((task) => (
          <AssignedTaskCard key={task.id} task={task} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
}

export default WorkerCard;
