import { workerList, tasksList } from '../../data/tasks_devider';
import TaskManager from './TasksAssignment/TaskManager';
import TicTacToeGame from './TicTacToeGame';

function Homework5() {
  return (
    <>
      <TaskManager tasksList={tasksList} workersList={workerList} />
      <TicTacToeGame />
    </>
  );
}

export default Homework5;
