import { useEffect, useMemo, useState } from 'react';
import styles from './Debounce.module.css';
import useDebounce from './useDebounce';

const products = [
  { id: 1, name: 'Яблуко' },
  { id: 2, name: 'Банан' },
  { id: 3, name: 'Апельсин' },
  { id: 4, name: 'Манго' },
  { id: 5, name: 'Ананас' },
  { id: 6, name: 'Кавун' },
  { id: 7, name: 'Полуниця' },
  { id: 8, name: 'Лохина' },
  { id: 9, name: 'Черешня' },
  { id: 10, name: 'Персик' },
  { id: 11, name: 'Груша' },
  { id: 12, name: 'Ківі' },
  { id: 13, name: 'Лимон' },
  { id: 14, name: 'Лайм' },
  { id: 15, name: 'Виноград' },
  { id: 16, name: 'Абрикос' },
  { id: 17, name: 'Слива' },
  { id: 18, name: 'Мандарин' },
  { id: 19, name: 'Гранат' },
  { id: 20, name: 'Інжир' },
  { id: 21, name: 'Хурма' },
  { id: 22, name: 'Диня' },
  { id: 23, name: 'Кокос' },
  { id: 24, name: 'Папая' },
  { id: 25, name: 'Маракуя' },
  { id: 26, name: 'Авокадо' },
  { id: 27, name: 'Айва' },
  { id: 28, name: 'Помело' },
  { id: 29, name: 'Грейпфрут' },
  { id: 30, name: 'Нектарин' },
  { id: 31, name: 'Аґрус' },
  { id: 32, name: 'Малина' },
  { id: 33, name: 'Ожина' },
  { id: 34, name: 'Смородина' },
  { id: 35, name: 'Порічка' },
  { id: 36, name: 'Журавлина' },
  { id: 37, name: 'Брусниця' },
  { id: 38, name: 'Обліпиха' },
  { id: 39, name: 'Шовковиця' },
  { id: 40, name: 'Кизил' },
  { id: 41, name: 'Фінік' },
  { id: 42, name: 'Рамбутан' },
  { id: 43, name: 'Лічі' },
  { id: 44, name: 'Карамбола' },
  { id: 45, name: 'Фейхоа' },
  { id: 46, name: 'Гуава' },
  { id: 47, name: 'Кумкват' },
  { id: 48, name: 'Драконів фрукт' },
  { id: 49, name: 'Чорниця' },
  { id: 50, name: 'Вишня' },
  { id: 51, name: 'Яблуко Голден' },
  { id: 52, name: 'Яблуко Фуджі' },
  { id: 53, name: 'Груша Конференція' },
  { id: 54, name: 'Білий виноград' },
  { id: 55, name: 'Червоний виноград' },
  { id: 56, name: 'Зелений банан' },
  { id: 57, name: 'Червоне яблуко' },
  { id: 58, name: 'Зелене яблуко' },
  { id: 59, name: 'Жовтий персик' },
  { id: 60, name: 'Солодкий апельсин' },
];

function Debounce() {
  const [input, setInput] = useState('');
  const debounceValue = useDebounce(input, 1000);

  const result = useMemo(() => {
    console.log(debounceValue);
    if (debounceValue === '') {
      return [];
    }
    const filteredArr = products.filter((product) =>
      product.name
        .toLocaleLowerCase()
        .includes(debounceValue.toLocaleLowerCase()),
    );
    return filteredArr;
  }, [debounceValue]);

  return (
    <>
      <h1 className='task'>Задача 4</h1>
      <p className='text'>
        Створіть кастомний хук useDebounce, який приймає значення та затримку в
        мілісекундах. Він повинен повертати "відкладене" значення, яке
        оновлюється лише після того, як минув заданий час без змін. Створіть
        поле пошуку, де результати пошуку оновлюються не відразу після кожного
        символу, а з невеликою затримкою (наприклад, 500мс) після зупинки
        введення, використовуючи useDebounce.
      </p>
      <input
        type='text'
        className={styles.searchInput}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Введіть назву фрукту'
      />
      <h2 className={styles.resultTitle}>Результати пошуку</h2>
      <ul className={styles.resultList}>
        {result.length === 0
          ? 'Нічого не знайдено'
          : result.map((elem) => (
              <li className={styles.resultItem} key={elem.id}>
                {elem.name}
              </li>
            ))}
      </ul>
    </>
  );
}

export default Debounce;
