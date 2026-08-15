import { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import styles from './Category.module.css';
import { Link, useNavigate, useParams } from 'react-router';

function Category() {
  const [data, setData] = useState([]);
  const { category } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}products.json`)
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error(error));
  }, []);

  const products = data.filter((item) => item.category === category);
  return (
    <>
      <Link to='/Homework7' className={styles.returnToMain}>
        На головну
      </Link>
      <div className={styles.productsCards}>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            name={product.name}
            price={product.price}
            oldPrice={product.oldPrice}
            image={product.image}
          />
        ))}
      </div>
    </>
  );
}

export default Category;
