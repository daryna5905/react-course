import { useState } from 'react';
import styles from './App.module.css';
import Authentication from './components/Homework2/Authentication';
import Plane from './components/Homework2/Plane';
import EnglishCard from './components/Homework2/EnglishCard';
import SalaryList from './components/Homework2/SalaryList';
import CookingTable from './components/Homework2/CookingTable';
import Homework2 from './components/Homework2/Homework2';
import Homework3 from './components/Homework3/Homework3';
import Homework4 from './components/Homework4/Homework4';
import Homework5 from './components/Homework5/Homework5';
import Homework6 from './components/Homework6/Homework6';
import { Link, Route, Routes } from 'react-router';
import Homework7 from './components/Homework7/Homework7';
import Shop from './components/Homework7/Shop';
import Rules from './components/Homework7/Rules';
import Contacts from './components/Homework7/Contacts';
import Main from './components/Homework7/Main';
import Category from './components/Homework7/Shop/Category';

function App() {
  return (
    <>
      <ul className={styles.list}>
        <li>
          <Link to={'/Homework2'}>Homework 2</Link>
        </li>
        <li>
          <Link to={'/Homework3'}>Homework 3</Link>
        </li>
        <li>
          <Link to={'/Homework4'}>Homework 4</Link>
        </li>
        <li>
          <Link to={'/Homework5'}>Homework 5</Link>
        </li>
        <li>
          <Link to={'/Homework6'}>Homework 6</Link>
        </li>
        <li>
          <Link to={'/Homework7'}>Homework 7</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/Homework2' element={<Homework2 />} />
        <Route path='/Homework3' element={<Homework3 />} />
        <Route path='/Homework4' element={<Homework4 />} />
        <Route path='/Homework5' element={<Homework5 />} />
        <Route path='/Homework6' element={<Homework6 />} />
        <Route path='/Homework7' element={<Homework7 />}>
          <Route index element={<Main />} />
          <Route path='shop' element={<Shop />}>
            <Route path=':category' element={<Category />} />
          </Route>
          <Route path='rules' element={<Rules />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
