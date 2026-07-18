import { useState } from "react";
import styles from "./Temperature.module.css";

function Temperature() {
  let background;
  const [temp, setTemp] = useState();
  if (temp < 0) {
    background = styles["temperature-white"];
  } else if (temp >= 0 && temp <= 10) {
    background = styles["temperature-blue"];
  } else if (temp >= 11 && temp <= 22) {
    background = styles["temperature-green"];
  } else if (temp > 22) {
    background = styles["temperature-red"];
  }

  return (
    <>
      <h1 className="task">Задача 2</h1>
      <p className="text">
        З клавіатури вводиться температура. Змінювати колір фону у залежності
        від значення: менше нуля – білий від 0 до 10 – синій, від 11 до 22 –
        зелений вище 22 – червоний Реалізувати з класами і стилями.
      </p>
      <input
        type="number"
        placeholder="Введіть температуру"
        onChange={(e) =>
          e.target.value === ""
            ? setTemp(undefined)
            : setTemp(Number(e.target.value))
        }
        className={`${background} ${styles["input-back"]}`}
      />
    </>
  );
}

export default Temperature;
