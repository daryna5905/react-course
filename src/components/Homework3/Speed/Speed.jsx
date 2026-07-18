import { useState } from "react";
import styles from "./Speed.module.css";
function Speed() {
  const [speedLimit, setSpeedLimit] = useState();
  const [currentSpeed, setCurrentSpeed] = useState();
  let danger = false;
  let background;
  if (currentSpeed < 0.5 * speedLimit) {
    background = styles["background-orange"];
  } else if (currentSpeed >= 0.5 * speedLimit && currentSpeed <= speedLimit) {
    background = styles["background-green"];
    if (currentSpeed > 0.9 * speedLimit) {
      danger = true;
    }
  } else if (currentSpeed > speedLimit) {
    background = styles["background-red"];
    danger = true;
  }
  return (
    <>
      <h1 className="task">Задача 3</h1>
      <p className="text">
        Вводиться дозволена швидкість і поточна швидкість авто. Якщо не введено
        дозволену швидкість, то елемент введення поточної швидкості
        заблокований. Якщо швидкість менше 50% дозволеної, то колір input –
        оранжевий, якщо від 50% до 100% - зелений, вище 100% - червоний. Якщо
        значення вище 90% починає блимати повідомлення «Увага!»
      </p>
      <input
        type="number"
        placeholder="Введіть дозволену швидкість"
        onChange={(e) => setSpeedLimit(Number(e.target.value))}
        className={styles.input}
      />
      <input
        type="number"
        placeholder="Введіть поточну швидкість"
        disabled={Boolean(!speedLimit)}
        onChange={(e) =>
          e.target.value === ""
            ? setCurrentSpeed()
            : setCurrentSpeed(Number(e.target.value))
        }
        className={`${background} ${styles.input}`}
      />
      {danger && <div className={styles.danger}>Увага!</div>}
    </>
  );
}

export default Speed;
