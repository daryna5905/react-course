import { useState } from "react";
import styles from "./Dancing.module.css";

const girls = [
  {
    id: 1,
    name: "Оксана",
  },
  {
    id: 2,
    name: "Наталія",
  },
  {
    id: 3,
    name: "Тетяна",
  },
  {
    id: 4,
    name: "Ольга",
  },
  {
    id: 5,
    name: "Роксолана",
  },
];
const boys = [
  {
    id: 1,
    name: "Іван",
  },
  {
    id: 2,
    name: "Петро",
  },
  {
    id: 3,
    name: "Степан",
  },
  {
    id: 4,
    name: "Олег",
  },
  {
    id: 5,
    name: "Сергій",
  },
  {
    id: 6,
    name: "Станіслав",
  },
];

function Dancing() {
  const [boysDancers, setBoysDancers] = useState(boys);
  const [girlsDancers, setGirlsDancers] = useState(girls);
  const [chosenBoy, setChosenBoy] = useState();
  const [chosenGirl, setChosenGirl] = useState();
  const [pairs, setPairs] = useState([]);
  const [pair, setPair] = useState();
  const pairsKey = (pair) => {
    return pair.girlName + pair.boysName;
  };

  return (
    <>
      <h1 className="task">Задача 6</h1>
      <p className="text">
        Пари для танців. Поступово вибираємо хлопця, дівчину і додаємо у обрані
        пари. Пару можна видалити. Поки не вибрано хлопця і дівчину кнопка
        «Додати» заблокована. Якщо не вистачає хлопців або дівчат вибір також
        блокується.
      </p>
      <div className={styles.dancing}>
        <div className={styles["dancing__person"]}>
          <h2 className={styles["dancing__person-title"]}>Хлопці</h2>
          <ul className={styles["dancing__person-list"]}>
            {boysDancers.map((boy) => (
              <li
                key={boy.id}
                className={`${styles["dancing__person-item"]} ${boy.id === chosenBoy?.id ? styles.activeBorder : ""}`}
                onClick={() => setChosenBoy({ id: boy.id, name: boy.name })}
              >
                {boy.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["dancing__person"]}>
          <h2 className={styles["dancing__person-title"]}>Дівчата</h2>
          <ul className={styles["dancing__person-list"]}>
            {girlsDancers.map((girl) => (
              <li
                key={girl.id}
                className={`${styles["dancing__person-item"]} ${girl.id === chosenGirl?.id ? styles.activeBorder : ""}`}
                onClick={() => setChosenGirl({ id: girl.id, name: girl.name })}
              >
                {girl.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["dancing__pairs"]}>
          <h2 className={styles["dancing__pairs-title"]}>Обрані пари</h2>
          <ul className={styles["dancing__pairs-list"]}>
            {pairs.map((pairItem) => (
              <li
                className={`${styles["dancing__pairs-item"]} ${pairItem.girlId === pair?.girlId && pairItem.boyId === pair?.boyId ? styles.activeBorder : ""}`}
                key={pairsKey(pairItem)}
                onClick={() =>
                  setPair({
                    boyId: pairItem.boyId,
                    girlId: pairItem.girlId,
                    boysName: pairItem.boysName,
                    girlName: pairItem.girlName,
                  })
                }
              >
                {pairItem.boysName} - {pairItem.girlName}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["dancing__button"]}>
          <button
            disabled={Boolean(!chosenBoy || !chosenGirl)}
            className={styles.createPairs}
            onClick={() => {
              setPairs((prev) => [
                ...prev,
                {
                  boyId: chosenBoy.id,
                  boysName: chosenBoy.name,
                  girlId: chosenGirl.id,
                  girlName: chosenGirl.name,
                },
              ]);
              setBoysDancers((prev) =>
                prev.filter((item) => chosenBoy.id !== item.id),
              );
              setGirlsDancers((prev) =>
                prev.filter((item) => chosenGirl.id !== item.id),
              );
              setChosenBoy(undefined);
              setChosenGirl(undefined);
            }}
          >
            Додати
          </button>
          {pairs && (
            <button
              disabled={Boolean(!pair)}
              className={styles.deletePair}
              onClick={() => {
                setPairs((prev) =>
                  prev.filter(
                    (item) =>
                      item.boyId != pair.boyId && item.girlId != pair.girlId,
                  ),
                );
                setBoysDancers((prev) => [
                  ...prev,
                  { id: pair.boyId, name: pair.boysName },
                ]);
                setGirlsDancers((prev) => [
                  ...prev,
                  { id: pair.girlId, name: pair.girlName },
                ]);
                setPair(undefined);
              }}
            >
              Видалити
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Dancing;
