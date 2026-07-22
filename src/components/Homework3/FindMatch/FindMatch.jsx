import { useEffect, useState } from 'react';
import styles from './FindMatch.module.css';
const dictionary = [
  { id: 0, en: 'table', ua: 'стіл' },
  { id: 1, en: 'car', ua: 'автомобіль' },
  { id: 2, en: 'bus', ua: 'автобус' },
  { id: 3, en: 'man', ua: 'людина' },
  { id: 4, en: 'boy', ua: 'хлопець' },
  { id: 5, en: 'girl', ua: 'дівчина' },
  { id: 6, en: 'book', ua: 'книга' },
  { id: 7, en: 'house', ua: 'будинок' },
  { id: 8, en: 'tree', ua: 'дерево' },
  { id: 9, en: 'dog', ua: 'собака' },
  { id: 10, en: 'cat', ua: 'кіт' },
];

function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function FindMatch() {
  const [uaWord, setUaWord] = useState();
  const [enWord, setEnWord] = useState();
  const [isCorrect, setIsCorret] = useState(true);
  const [enWords, setEnWords] = useState(
    shuffle(dictionary.map(({ en, id }) => ({ id, en }))),
  );
  const [uaWords, setUaWords] = useState(
    shuffle(dictionary.map(({ ua, id }) => ({ id, ua }))),
  );

  useEffect(() => {
    if (enWord && uaWord) {
      const check = enWord.id === uaWord.id;
      setIsCorret(check);
      const timeout = setTimeout(() => {
        if (check) {
          setEnWords((prev) => prev.filter((word) => word.id !== enWord.id));
          setUaWords((prev) => prev.filter((word) => word.id !== uaWord.id));
        }
        setEnWord();
        setUaWord();
        setIsCorret(true);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [enWord, uaWord]);

  return (
    <>
      <h1 className='task'>Задача 9</h1>
      <div className='text'>
        <p>
          Перекладач. Користувачу виводять змішані картки з словами на
          англійській і українській мові. Користувач поступово клікає на картки
          (виділяємо синьою рамкою). Якщо знайдено правильні пари карток, що
          відповідають одному слову, то видаляємо ці картки. Інакше - виділяємо
          червоною рамкою і через секунду забираємо рамку.
        </p>
      </div>
      <h2 className={styles.title}>Знайдіть пари слів</h2>
      <div className={styles.words}>
        <ul className={styles.englishWords}>
          {enWords.map((word) => (
            <li
              onClick={() => setEnWord(word)}
              key={word.id}
              className={`${styles.englishWord} ${enWord?.en === word.en ? (isCorrect ? styles.activeBorder : styles.borderMistake) : ''}`}
            >
              {word.en}
            </li>
          ))}
        </ul>
        <ul className={styles.ukrainianWords}>
          {uaWords.map((word) => (
            <li
              onClick={() => setUaWord(word)}
              key={word.id}
              className={`${styles.ukrainianWord} ${uaWord?.ua === word.ua ? (isCorrect ? styles.activeBorder : styles.borderMistake) : ''}`}
            >
              {word.ua}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default FindMatch;
