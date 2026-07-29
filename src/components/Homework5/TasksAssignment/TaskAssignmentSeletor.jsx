import { useCallback, useEffect, useState } from 'react';
import styles from './TaskAssigned.module.css';
import taskEventEmitter from '../taskEventEmitter';

function TaskAssignmentSeletor({ task, workersList, onSelect }) {
  const [workerId, setWorkerId] = useState(task.workerId ?? '');
  const onWorkerSelect = (e) => {
    const workerId = e.target.value;
    setWorkerId(e.target.value);
    onSelect(task.id, workerId);
  };

  const handleTaskDelete = useCallback((deletedTask) => {
    if (deletedTask.id === task.id) {
      setWorkerId('');
    }
  }, []);

  useEffect(() => {
    taskEventEmitter.subscribe('taskDelete', handleTaskDelete);
    return () => {
      taskEventEmitter.unsubscribe('taskDelete', handleTaskDelete);
    };
  }, []);

  return (
    <div>
      <label className={styles.taskOption}>
        {task.title}
        <select
          value={workerId}
          onChange={onWorkerSelect}
          className={styles.workerNameOption}
        >
          <option value=''>Виберіть виконавця</option>
          {workersList.map((worker) => (
            <option key={worker.id} value={worker.id}>
              {worker.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default TaskAssignmentSeletor;
