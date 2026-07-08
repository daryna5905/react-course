import { useState } from "react";
import styles from "./Authentication.module.css";
import emoji from "../../../assets/emoji.png";
function Authentication() {
  const users = [
    {
      login: "daryna",
      password: "daryna123",
    },
    {
      login: "ivan",
      password: "111",
    },
    {
      login: "olena",
      password: "secure789",
    },
    {
      login: "maksym",
      password: "pass2025",
    },
    {
      login: "sofia",
      password: "helloWorld",
    },
  ];

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSuccess, setIsSuccess] = useState();
  let content;
  const isAuthenticated = () => {
    const user = users.find(
      (user) => user.login === login && user.password === password,
    );

    if (user) {
      setIsSuccess(true);
    } else {
      setIsSuccess(false);
    }
  };
  if (isSuccess === true) {
    content = (
      <div className={styles.content}>
        <img src={emoji} alt="emoji" />
      </div>
    );
  } else if (isSuccess === false) {
    content = (
      <div
        className={
          login === "ivan" ? styles["content--blue"] : styles["content--red"]
        }
      >
        Invalid login or password.
      </div>
    );
  }
  return (
    <>
      <h1 className="task">Задача 1</h1>
      <div className="text">
        <p>
          Вводимо логін і пароль. Якщо логін вірний відображаємо смайл. Якщо ні,
          то: 1) якщо логін = Іван – колір повідомлення про помилку синій 2)
          якщо хтось інший, то колір повідомлення червоний
        </p>
      </div>
      <div className={styles.auth}>
        <div className={styles.input}>
          Login{" "}
          <input
            type="text"
            onChange={(e) => {
              setLogin(e.target.value);
              setIsSuccess(undefined);
            }}
          />
        </div>
        <div className={styles.password}>
          Password{" "}
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button className={styles.button} onClick={() => isAuthenticated()}>
          Go
        </button>
        {content}
      </div>
    </>
  );
}
export default Authentication;
