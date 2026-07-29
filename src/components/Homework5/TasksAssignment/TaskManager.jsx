import { useState } from 'react';
import TaskAssignmentForm from './TaskAssignmentForm';
import AssignedTasksSection from './AssignedTasksSection';
import taskEventEmitter from '../taskEventEmitter';

function TaskManager({ workersList, tasksList }) {
  const [tasksData, setTasksData] = useState(() =>
    JSON.parse(JSON.stringify(tasksList)),
  );
  const onSelect = (taskId, selectedWorkerId) => {
    setTasksData((prevTasksData) =>
      prevTasksData.map((task) =>
        task.id === taskId
          ? { ...task, workerId: Number(selectedWorkerId) }
          : task,
      ),
    );
  };

  const onDelete = (taskId) => {
    let deletedTask;
    setTasksData((prevTasksData) =>
      prevTasksData.map((task) => {
        if (task.id === taskId) {
          deletedTask = task;
          return { ...task, workerId: null };
        }
        return task;
      }),
    );

    setTimeout(() => taskEventEmitter.emit('taskDelete', deletedTask), 100);
  };

  return (
    <div>
      <h1 className='task'>Задача 1</h1>
      <p className='text'>
        Доробити проєкт з призначеняням задач.
        <br /> 1) коли додаємо задачу іншому працівнику, то у попереднього
        працівника треба забрати <br /> 2) коли видаляємо задачу, то у формі
        треба скидувати значення селекта
      </p>
      <TaskAssignmentForm
        workersList={workersList}
        tasksList={tasksData}
        onSelect={onSelect}
      />
      <AssignedTasksSection
        tasksList={tasksData}
        workersList={workersList}
        onDelete={onDelete}
      />
    </div>
  );
}

export default TaskManager;
