import { workerList } from '../../../data/tasks_devider';
import WorkerCard from './WorkerCard';
import styles from './TaskAssigned.module.css';

function AssignedTasksSection({ tasksList, onDelete }) {
  const data = {};

  const getWorkerById = (workerId) => {
    return workerList.find((worker) => workerId === worker.id);
  };

  for (const task of tasksList) {
    if (task.workerId) {
      if (task.workerId in data) {
        data[task.workerId].tasks.push(task);
      } else {
        data[task.workerId] = {
          worker: getWorkerById(task.workerId),
          tasks: [task],
        };
      }
    }
  }

  return (
    <div className={styles.workerCardsBlock}>
      <h2 className={styles['workerCards-title']}>Призначені задачі</h2>
      <div className={styles.workerCards}>
        {Object.keys(data).map((workerId) => (
          <WorkerCard
            key={workerId}
            worker={data[workerId].worker}
            workerTaskList={data[workerId].tasks}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default AssignedTasksSection;
