import { Link, NavLink } from 'react-router';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <>
      <header>
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li className={styles.navigationItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
                to='/Homework7'
                end
              >
                Головна
              </NavLink>
            </li>
            <li className={styles.navigationItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
                to={'shop'}
              >
                Магазин
              </NavLink>
            </li>
            <li className={styles.navigationItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
                to={'rules'}
              >
                Правила оплати
              </NavLink>
            </li>
            <li className={styles.navigationItem}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ''
                }
                to={'contacts'}
              >
                Контакти
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navigation;
