import { useState } from 'react';
import useWindowSize from './useWindowSize';
import styles from './WindowSize.module.css';
import phone from '../../../assets/phone.png';
import tablet from '../../../assets/tablet.png';
import monitor from '../../../assets/monitor.png';
function WindowSize() {
  const size = useWindowSize();
  let device;
  if (size.width < 767) {
    device = phone;
  } else if (size.width >= 768 && size.width < 1024) {
    device = tablet;
  }
  if (size.width >= 1024) {
    device = monitor;
  }

  return (
    <>
      <h1 className='task'>Задача 3</h1>
      <p className='text'>
        Створіть кастомний хук useWindowSize, який повертає поточну ширину та
        висоту вікна браузера. Він повинен оновлюватися при зміні розміру вікна.
        Створіть компонент, який відображає поточні розміри вікна браузера
        (ширина x висота), використовуючи useWindowSize. На основі розмірів
        відображати іконки монітора, планшета або телефона.
      </p>
      <div>
        <h2
          className={styles.windowSize}
        >{`ширина:${size.width}, висота: ${size.height}`}</h2>
        {device && (
          <div className={styles.deviceImg}>
            <img src={device} alt='device' />
          </div>
        )}
        
      </div>
    </>
  );
}

export default WindowSize;
