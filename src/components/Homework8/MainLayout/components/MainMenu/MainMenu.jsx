import { NavLink } from 'react-router';
import styles from './MainMenu.module.css';
import frontsRoutes from '../../../Router/frontsRoutes';

function MainMenu() {
  return (
    <header className={styles.container}>
      <NavLink
        to={frontsRoutes.navigate.teachers.root}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Вчителі
      </NavLink>
      <NavLink
        to={frontsRoutes.navigate.meeting}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Збори
      </NavLink>
      <NavLink
        to={frontsRoutes.navigate.about}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Про додаток
      </NavLink>
      <NavLink
        to={frontsRoutes.navigate.aboutDev}
        className={({ isActive }) => (isActive ? styles.active : '')}
      >
        Про розробника
      </NavLink>
    </header>
  );
}

export default MainMenu;
