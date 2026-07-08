import styles from "./SalaryList.module.css";

function SalaryList() {
  const workerList = [
    {
      id: "1",
      name: "Іванов",
      salary: 10000,
    },
    {
      id: "2",
      name: "Петров",
      salary: 20000,
    },
    {
      id: "3",
      name: "Сидоров",
      salary: 50000,
    },
  ];
  return (
    <>
      <h1 className="task">Задача 4</h1>
      <div className="text">
        <p>
          Вивести список як маркований список з елементами у форматі (name:
          salary)
        </p>
      </div>
      <ul className={styles.salaryList}>
        {workerList.map((worker) => (
          <li key={worker.id}>
            {worker.name}:{worker.salary}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SalaryList;
