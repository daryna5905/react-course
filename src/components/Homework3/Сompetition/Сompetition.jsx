import { useState } from "react";
import styles from "./Competition.module.css";
const athletes = [
  {
    id: 1,
    name: "John",
    surname: "Depp",
  },
  {
    id: 2,
    name: "Sara",
    surname: "Wik",
  },
  {
    id: 3,
    name: "Den",
    surname: "Miro",
  },
  {
    id: 4,
    name: "Alan",
    surname: "Woo",
  },
  {
    id: 5,
    name: "Olga",
    surname: "Sich",
  },
  {
    id: 6,
    name: "Ivan",
    surname: "Hal",
  },
];
function Competition() {
  const [allAthletes, setAllAthletes] = useState(athletes);
  const [competitionAthletes, setCompetitionAthletes] = useState([]);

  return (
    <>
      <h1 className="task">Задача 5</h1>
      <p className="text">
        Дано список спортсменів. Потрібно сформувати список тих, які будуть
        брати участь у змаганні. При цьому є два стовпці. В одному відображені
        всі спортсмени, в іншому – список тих, хто був вибраний. При натисканні
        на зелену стрілку спортсмен переміщається у список для змагань. При
        натисканні на червону стрілку спортсмен переміщається у загальний
        список.
      </p>
      <div className={styles.competition}>
        <div className={styles["competition__block"]}>
          <h2 className={styles["competition__block-title"]}>
            Загальний список
          </h2>
          <ul className={styles["competition__list"]}>
            {allAthletes.map((athlete) => (
              <li key={athlete.id} className={styles["competition__list-item"]}>
                {athlete.name} {athlete.surname}
                <span
                  className={`${styles["arrow"]} ${styles["arrow--green"]}`}
                  onClick={() => {
                    setAllAthletes((prev) =>
                      prev.filter((item) => item.id !== athlete.id),
                    );
                    setCompetitionAthletes((prev) => [...prev, athlete]);
                  }}
                ></span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["competition__block"]}>
          <h2 className={styles["competition__block-title"]}>
            Обрані для змагання
          </h2>
          <ul className={styles["competition__list"]}>
            {competitionAthletes &&
              competitionAthletes.map((athlete) => (
                <li
                  key={athlete.id}
                  className={styles["competition__list-item"]}
                >
                  {athlete.name} {athlete.surname}
                  <span
                    className={`${styles["arrow"]} ${styles["arrow--red"]}`}
                    onClick={() => {
                      setCompetitionAthletes((prev) =>
                        prev.filter((item) => item.id !== athlete.id),
                      );
                      setAllAthletes((prev) => [...prev, athlete]);
                    }}
                  ></span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Competition;
