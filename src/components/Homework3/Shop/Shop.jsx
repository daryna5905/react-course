import { useState } from 'react';
import styles from './Shop.module.css';

const section = [
  { id: 1, section: 'Головне' },
  { id: 2, section: 'Оптовий' },
  { id: 3, section: 'Магазин 1' },
  { id: 4, section: 'Магазин 2' },
  { id: 5, section: 'Магазин 3' },
];
const goods = [
  { id: 1, good: 'Телефони' },
  { id: 2, good: 'телевізори' },
  { id: 3, good: 'Мікрохвильові печі' },
  { id: 4, good: 'Пральні машини' },
  { id: 5, good: 'Фени' },
  { id: 6, good: 'Чайники' },
];

function Shop() {
  const [shop, setShop] = useState();
  const [products, setProducts] = useState([]);
  const [result, setResult] = useState([]);

  return (
    <>
      <h1 className='task'>Задача 12</h1>
      <p className='text'>
        Мережа магазинів. Дано список відділень та список товарів. Для кожного
        відділення можна вибирати декілька товарів. Вибирати та відображати
        перелік вибраних товарів для кожного відділення
      </p>
      <div className={styles.wrapper}>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Відділення</h2>
          <ul className={styles.shopList}>
            {section.map((item) => (
              <li
                onClick={() => setShop(item)}
                key={item.id}
                className={`${styles.shopItem} ${shop && shop.id == item.id ? styles.activeBorder : ''}`}
              >
                {item.section}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Товари</h2>
          <ul className={styles.goodsList}>
            {goods.map((item) => (
              <li
                onClick={() => {
                  if (products.find((product) => product.id === item.id)) {
                    return;
                  }
                  setProducts((prev) => [
                    ...prev,
                    { good: item.good, id: item.id },
                  ]);
                }}
                key={item.id}
                className={`${styles.goodItem} ${products.find((product) => product.id === item.id) ? styles.activeBorder : ''}`}
              >
                {item.good}
              </li>
            ))}
          </ul>
        </div>
        <button
          disabled={!shop || !products.length}
          onClick={() => {
            const existing = result.find((item) => item.shop.id === shop.id);

            if (existing) {
              const idsSet = new Set(existing.products.map((p) => p.id));
              const unique = products.filter((p) => !idsSet.has(p.id));
              setResult((prev) =>
                prev.map((r) => {
                  if (r === existing) {
                    return {
                      ...r,
                      products: [...r.products, ...unique],
                    };
                  }
                  return r;
                }),
              );
            } else {
              setResult((prev) => [...prev, { shop, products }]);
            }
            setProducts([]);
            setShop();
          }}
          className={styles.addButton}
        >
          Додати
        </button>
      </div>
      <div className={styles.block}>
        <h2 className={styles.blockTitle}>Товари</h2>
        {!!result.length && (
          <ul className={styles.distributionGoods}>
            {result.map(({ shop, products }) => (
              <div key={shop.id}>
                <li className={styles.distributionGoodItem}>{shop.section}</li>

                <ul>
                  {products.map(({ id, good }) => (
                    <li key={id} className={styles.distributionItem}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Shop;
