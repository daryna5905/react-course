import { useState } from "react";
import styles from "./EnglishCard.module.css";
import table from "../../../assets/table.png";
import book from "../../../assets/book.jpg";
import cat from "../../../assets/cat.jpg";

const dictionary = {
  table: "стіл",
  cat: "кіт",
  book: "книга",
};
const steps = Object.keys(dictionary).length;

function EnglishCard() {
  let imgLink;
  let description;
  let title = "";
  let subtitle;
  const [count, setCount] = useState(1);
  const [translation, setTranslation] = useState("");
  const [isCorrect, setIsCorrect] = useState();
  function isCorrectTranslate() {
    if (dictionary[title].toUpperCase() === translation.toUpperCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  }
  switch (count) {
    case 1:
      imgLink = table;
      description = "table";
      title = "table";
      break;
    case 2:
      imgLink = book;
      description = "book";
      title = "book";
      break;
    case 3:
      imgLink = cat;
      description = "cat";
      title = "cat";
      break;

    default:
  }

  let borderStyle;
  if (isCorrect) {
    subtitle = "Добре.Молодець!";
    borderStyle = styles["card--green"];
  } else if (isCorrect == false) {
    subtitle = "Невірно, спробуйте ще раз";
    borderStyle = styles["card--red"];
  } else {
    subtitle = "Введіть переклад";
  }
  return (
    <>
      <h1 className="task">Задача 3</h1>
      <div className="text">
        <p>
          Елемент тренажера англійської. Виводимо зображення елемента і слово.
          Користувач вводить відповідь. Якщо вірно – відтворюємо фразу «Добре.
          Молодець!» (і додаємо зелену рамку до елемента), якщо ні - то
          відтворюємо фразу «Невірно, спробуйте ще раз» (і додаємо червону
          рамку).
        </p>
      </div>
      <div className={`${styles.card} ${borderStyle}`}>
        <div className={styles.img}>
          <img src={imgLink} alt={description} />
        </div>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <input
          className={styles.input}
          value={translation}
          type="text"
          onChange={(e) => setTranslation(e.target.value)}
        />
        {!isCorrect && (
          <button className={styles.button} onClick={isCorrectTranslate}>
            Перевірити
          </button>
        )}
        {isCorrect && (
          <button
            disabled={count == steps}
            className={styles.button}
            onClick={() => {
              setIsCorrect();
              setTranslation("");
              setCount((prev) => (prev < steps ? prev + 1 : prev));
            }}
          >
            {count < steps ? " Наступне слово" : "Кінець"}
          </button>
        )}
        <div className={styles.counter}>
          {count}/{steps}
        </div>
      </div>
    </>
  );
}

export default EnglishCard;
