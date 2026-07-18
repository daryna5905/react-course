import { useMemo, useState } from "react";
import styles from "./Cars.module.css";

const cars = [
  {
    id: 1,
    brand: "Mercedes",
    year: 2018,
    price: 25000,
  },
  {
    id: 2,
    brand: "Opel",
    year: 2000,
    price: 5000,
  },
  {
    id: 3,
    brand: "Opel",
    year: 2004,
    price: 15000,
  },
  {
    id: 4,
    brand: "Audi",
    year: 2000,
    price: 7000,
  },
  {
    id: 5,
    brand: "BMW",
    year: 2018,
    price: 27000,
  },
  {
    id: 6,
    brand: "Mercedes",
    year: 2015,
    price: 18000,
  },
  {
    id: 7,
    brand: "Audi",
    year: 2020,
    price: 32000,
  },
  {
    id: 8,
    brand: "Toyota",
    year: 2018,
    price: 22000,
  },
  {
    id: 9,
    brand: "BMW",
    year: 2004,
    price: 11000,
  },
  {
    id: 10,
    brand: "Toyota",
    year: 2000,
    price: 6500,
  },
  {
    id: 11,
    brand: "Opel",
    year: 2018,
    price: 14000,
  },
  {
    id: 12,
    brand: "Mercedes",
    year: 2020,
    price: 38000,
  },
];

function Cars() {
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedYear, setSelectedYear] = useState();

  const brandOptions = [...new Set(cars.map((car) => car.brand))];
  const yearOptions = [...new Set(cars.map((car) => car.year))];

  let carsArray;
  if (selectedBrand && selectedYear) {
    carsArray = cars.filter(
      (car) => car.brand === selectedBrand && car.year === Number(selectedYear),
    );
  } else if (!selectedBrand && selectedYear) {
    carsArray = cars.filter((car) => car.year === +selectedYear);
  } else if (selectedBrand && !selectedYear) {
    carsArray = cars.filter((car) => car.brand === +selectedBrand);
  }

  console.log(carsArray);

  return (
    <>
      <h1 className="task">Задача 8</h1>
      <div className="text">
        <p>
          Дано список автомобілів (марка, рік випуску, ціна). Сформувати
          елементи для фільтрування з використанням випадаючого списку (контент
          цих випадаючих списків сформувати у залежності від переданого списку).
        </p>
      </div>
      <h2 className={styles.title}>Фільтри пошуку</h2>
      <div className={styles.select}>
        <select
          name="brand"
          className={styles.selectOption}
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand ?? "default"}
        >
          <option disabled value="default">
            Виберіть марку
          </option>
          {brandOptions.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
        <select
          name="year"
          className={styles.selectOption}
          onChange={(e) => setSelectedYear(e.target.value)}
          value={selectedYear ?? "default"}
        >
          <option disabled value="default">
            Виберіть рік
          </option>
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <h2 className={styles.title}>Список автомобілів</h2>
      <ul className={styles.carsList}>
        {carsArray ? (
          carsArray.map((car) => (
            <li key={car.id} className={styles.carItem}>
              {car.brand}, {car.year} рік, {car.price}$
            </li>
          ))
        ) : (
          <li className={styles.carItem}>Нічого не знайдено</li>
        )}
      </ul>
    </>
  );
}

export default Cars;
