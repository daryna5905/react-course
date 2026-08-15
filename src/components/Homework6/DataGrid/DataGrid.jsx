import {
  useCallback,
  useDeferredValue,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import styles from './DataGrid.module.css';
import GridRow from './GridRow';

function DataGrid() {
  const [fruits, setFruits] = useState([]);
  const [inputValue, setInputValue] = useState();
  const abortControllerRef = useRef();
  const defferedValues = useDeferredValue(inputValue);
  const [nameOrder, setNameOrder] = useState();
  const [priceOrder, setPriceOrder] = useState();
  const deferredNameOrder = useDeferredValue(nameOrder);
  const deferredPriceOrder = useDeferredValue(priceOrder);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    const fetchProducts = async () => {
      const response = await fetch(`${import.meta.env.BASE_URL}fruits.json`, {
        signal: abortControllerRef.current.signal,
      });
      const data = await response.json();
      setFruits(data);
    };
    fetchProducts();
    return () => abortControllerRef.current.abort();
  }, []);

  const result = useMemo(() => {
    let data = [...fruits];
    if (defferedValues) {
      data = data.filter((fruit) => {
        return fruit.name.toLowerCase().includes(defferedValues.toLowerCase());
      });
      data.sort((a, b) => {
        if (deferredPriceOrder) {
          const priceDiff =
            deferredPriceOrder === 'asc'
              ? a.price - b.price
              : b.price - a.price;

          if (priceDiff !== 0) {
            return priceDiff;
          }
        }
        if (deferredNameOrder) {
          const nameDiff =
            deferredNameOrder === 'asc'
              ? a.name.toLowerCase().localeCompare(b.name.toLowerCase())
              : b.name.toLowerCase().localeCompare(a.name.toLowerCase());

          if (nameDiff !== 0) {
            return nameDiff;
          }
        }
        return 0;
      });
    }

    return data;
  }, [deferredNameOrder, deferredPriceOrder, fruits, defferedValues]);

  const handleSortNameAsc = useCallback(() => {
    setNameOrder('asc');
    setPriceOrder();
  }, []);
  const handleSortNameDesc = useCallback(() => {
    (setNameOrder('desc'), setPriceOrder());
  }, []);

  const handleSortPriceAsc = useCallback(() => {
    (setPriceOrder('asc'), setNameOrder());
  }, []);
  const handleSortPriceDesc = useCallback(() => {
    (setPriceOrder('desc'), setNameOrder());
  }, []);

  return (
    <>
      <h1 className='task'>Задача 2</h1>
      <p className='text'>
        Таблиця з фільтрацією та сортуванням, чутлива до UI <br />
        Створіть компонент DataGrid (батьківський) та GridRow (дочірній). <br />
        DataGrid отримує великий масив даних, має поле вводу для фільтрації,
        кнопки для сортування за різними колонками. <br />
        GridRow (обгорнутий у React.memo) відображає один рядок даних.
        <br /> Використайте useDeferredValue для пошукового запиту та/або
        параметрів сортування. <br />
        Використайте useMemo для обчислення відфільтрованих та відсортованих
        даних на основі відкладених значень.
        <br />
        Використайте useCallback для функцій-обробників сортування та інших
        інтерактивних елементів, які передаються до дочірніх компонентів. <br />
        Мета: забезпечити швидкий відгук на введення та кліки, навіть якщо
        обробка даних займає час.
      </p>
      <input
        type='text'
        placeholder='Введіть назву фрукта'
        className={styles.digitInput}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
      />
      <div className={styles.filterButtons}>
        <button
          className={`${styles.sortByNameAsc} ${styles.filterButton}`}
          disabled={Boolean(!inputValue)}
          onClick={handleSortNameAsc}
        >
          від А до Я
        </button>
        <button
          className={`${styles.sortByNameDesc} ${styles.filterButton}`}
          disabled={Boolean(!inputValue)}
          onClick={handleSortNameDesc}
        >
          від Я до А
        </button>
        <button
          className={`${styles.sortByPriceAsc} ${styles.filterButton}`}
          disabled={Boolean(!inputValue)}
          onClick={handleSortPriceAsc}
        >
          Прайс: за зростанням
        </button>
        <button
          className={`${styles.sortByPriceDesc} ${styles.filterButton}`}
          disabled={Boolean(!inputValue)}
          onClick={handleSortPriceDesc}
        >
          Прайс: за спаданням
        </button>
      </div>
      <ul>
        {result &&
          result.map((result) => <GridRow fruit={result} key={result.id} />)}
      </ul>
    </>
  );
}

export default DataGrid;
