import styles from "./Plane.module.css";
import { useState } from "react";
import clouds from "../../../assets/clouds.jpg";
import seats from "../../../assets/seats.jpg";
const travelOptions = [
  {
    type: "Економ",
    options: [
      {
        id: "beer",
        label: "Пиво",
        types: ["Світле", "Темне"],
      },
      {
        id: "chips",
        label: "Чипси",
        types: ["Зі смаком сиру", "Зі смаком сметани та зелені"],
      },
    ],
    imgLink: clouds,
    alt: "clouds",
  },
  {
    type: "Бізнес",
    options: [
      {
        id: "newspapers",
        label: "Газета",
        types: ["Голос України", "Дзеркало тижня", "День"],
      },
      {
        id: "cognac",
        label: "Коньяк",
        types: ["Hennessy", "Martell", "Rémy Martin", "Courvoisier"],
        subtypes: ["Закуски"],
      },
    ],
    imgLink: seats,
    alt: "seats",
  },
];

function Plane() {
  const [plane, setPlane] = useState();
  const onPlaneChange = (planeType) => {
    const plane = travelOptions.find((option) => planeType === option.type);
    setPlane({
      ...plane,
      options: plane.options.map((o) => ({ ...o, selected: false })),
    });
  };

  const updateOption = (id, checked) => {
    setPlane({
      ...plane,
      options: plane.options.map((o) =>
        o.id === id ? { ...o, selected: checked } : o,
      ),
    });
  };

  return (
    <>
      <h1 className="task">Задача 2</h1>
      <div className="text">
        <p>
          З випадаючого списку вибираємо клас квитка у літаку. Якщо 1) бізнес -
          виводимо елементи для вибору газети та коньяку (якщо вибрано коньяк,
          то запропонувати закуску (так/ні)), на фоні зображення бізнес кают 2)
          економ – виводимо елементи для вибору типу пива і чипсів, на фоні
          хмарки.
        </p>
      </div>

      <div>
        <select
          name="travelClass"
          className={styles.select}
          onChange={(e) => onPlaneChange(e.target.value)}
        >
          <option defaultValue={undefined}>Оберіть клас літака</option>
          {travelOptions.map((o) => (
            <option value={o.type} key={o.type}>
              {o.type}
            </option>
          ))}
        </select>
        {plane && (
          <div className={styles.travelOption}>
            <div className={styles.img}>
              <img src={plane.imgLink} alt={plane.alt} />
            </div>
            <div className={styles.textWrapper}>
              {plane.options.map((type) => (
                <div className={styles.text} key={type.id}>
                  <div className={styles.box}>
                    <input
                      id={type.id}
                      value={type.id}
                      type="checkbox"
                      onChange={(e) =>
                        updateOption(e.target.id, e.target.checked)
                      }
                    />
                    <label className={styles.types} htmlFor={type.id}>
                      {type.label}
                    </label>
                  </div>
                  {type.types && type.selected && (
                    <div className={styles.subtypesWrapper}>
                      {type.types.map((t) => (
                        <div key={t} className="radioboxWrapper">
                          <input type="radio" id={t} value={t} name="type" />
                          <label htmlFor={t}>{t}</label>
                        </div>
                      ))}
                      {type.subtypes &&
                        type.subtypes.map((s) => (
                          <div key={s}>
                            <input id={s} type="checkbox" value={s} />
                            <label className={styles.types} htmlFor={s}>
                              {s}
                            </label>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
export default Plane;
