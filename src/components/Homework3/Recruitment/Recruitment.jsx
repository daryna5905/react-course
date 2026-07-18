import { useState } from "react";
import styles from "./Recruitment.module.css";

const employees = [
  {
    id: 1,
    name: "Іванов І.І",
  },
  {
    id: 2,
    name: "Петров П.П",
  },
  {
    id: 3,
    name: "Скрипка С.П",
  },
  {
    id: 4,
    name: "Гончаренко Г.О",
  },
  {
    id: 5,
    name: "Івась І.І",
  },
];

function Recruitment() {
  const [employee, setEmployee] = useState();

  const searchResult = () => {
    const filteredEmployees = employees.filter(
      (item) => item.name.toLowerCase().search(employee.toLowerCase()) !== -1,
    );
    return filteredEmployees.map((item) => (
      <li key={item.id} className={styles.employeeItem}>
        {item.name}
      </li>
    ));
  };

  return (
    <>
      <h1 className="task">Задача 7</h1>
      <p className="text">
        {" "}
        Динамічний пошук. Є список працівників і поле пошуку. При введенні
        відображаються усі, які містять вказаний фрагмент
      </p>
      <div className={styles.employees}>
        <label htmlFor="employeeName">
          <input
            className={styles.employeesSearch}
            type="text"
            id="employeeName"
            placeholder="Я шукаю..."
            onChange={(e) => setEmployee(e.target.value)}
          />
        </label>
        <h2 className={styles.employeesTitle}>Працівники</h2>
        <ul className={styles["employeesList"]}>
          {!employee
            ? employees.map((employee) => (
                <li key={employee.id} className={styles.employeeItem}>
                  {employee.name}
                </li>
              ))
            : searchResult()}
        </ul>
      </div>
    </>
  );
}

export default Recruitment;
