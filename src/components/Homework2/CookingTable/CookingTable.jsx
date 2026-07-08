import { useState } from "react";
import styles from "./CookingTable.module.css";
function CookingTable() {
  const [waitingList, setWaitingList] = useState([]);
  const [processingList, setProcessingList] = useState([]);
  const [completedList, setCompletedList] = useState([]);
  const [dish, setDish] = useState("");

  const getRandomNumber = () => {
    return Math.random().toFixed(6);
  };

  const startCook = (dish) => {
    setWaitingList((prev) => prev.filter((item) => dish !== item));
    setProcessingList((prev) => [...prev, dish]);
  };
  const readyToEat = (dish) => {
    setProcessingList((prev) => prev.filter((item) => dish !== item));
    setCompletedList((prev) => [...prev, dish]);
  };
  const completedOrder = (dish) => {
    setCompletedList((prev) => prev.filter((item) => dish !== item));
  };

  return (
    <div className={styles.wrapper}>
      <h1 className="task">Задача 6</h1>
      <div className="text">
        <p>
          На кухню поступають замовлення. Спочатку ми додаємо їх у список
          “Очікують на виконання”, якщо повар береться робити — замовлення
          переходить у список “Виконуються”, якщо замовлення виконано —
          переходить у список “Готові до виносу”. Якщо натиснути на “Подано” -
          страва зникає з таблиці
        </p>
      </div>
      <div className={styles.searchBlock}>
        Нова замовлена страва:
        <input
          className={styles["searchBlock__input"]}
          value={dish}
          type="text"
          onChange={(e) => setDish(e.target.value)}
        />
        <button
          className={styles["searchBlock__button"]}
          onClick={() => {
            dish && setWaitingList((prev) => [...prev, dish]);
            setDish("");
          }}
        >
          Додати
        </button>
      </div>
      <div className={styles.cookingBlock}>
        <ul className={styles.waitingList}>
          <li className={`${styles["waitingList__title"]} ${styles.title}`}>
            Очікують на виконання
          </li>
          {waitingList.map((item) => (
            <li
              key={item + getRandomNumber()}
              className={styles["waitingList__item"]}
            >
              {item}
              <button
                className={styles["waitingList__item-button"]}
                onClick={() => {
                  startCook(item);
                }}
              >
                Готувати
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.processingList}>
          <li className={`${styles["processingList__title"]} ${styles.title}`}>
            Виконуються
          </li>
          {processingList.map((item) => (
            <li
              key={item + getRandomNumber()}
              className={`${styles["processingList__item"]}`}
            >
              {item}
              <button
                className={`${styles["processingList__item-button"]}`}
                onClick={() => readyToEat(item)}
              >
                Приготовано
              </button>
            </li>
          ))}
        </ul>
        <ul className={styles.completedList}>
          <li className={`${styles["completedList__title"]} ${styles.title}`}>
            Готові до виносу
          </li>
          {completedList.map((item) => (
            <li
              key={item + getRandomNumber()}
              className={`${styles["completedList__item"]}`}
            >
              {item}
              <button
                className={`${styles["completedList__item-button"]}`}
                onClick={() => completedOrder(item)}
              >
                Приготовано
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CookingTable;
