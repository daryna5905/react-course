import styles from './ProductItem.module.css';

function ProductItem({ name, price, oldPrice, image }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={image} alt='product' />
        </div>
        <div className={styles.body}>
          <h2 className={styles.title}>{name}</h2>
          <div className={styles.price}>
            <p>{price} грн</p>
          </div>
          <div className={styles.oldPrice}>
            <p>{oldPrice} грн</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
