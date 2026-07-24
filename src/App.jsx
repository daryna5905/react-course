import { useState } from 'react';
import './App.css';
import Authentication from './components/Homework2/Authentication';
import Plane from './components/Homework2/Plane';
import EnglishCard from './components/Homework2/EnglishCard';
import SalaryList from './components/Homework2/SalaryList';
import CookingTable from './components/Homework2/CookingTable';
import Homework2 from './components/Homework2/Homework2';
import Homework3 from './components/Homework3/Homework3';
import Homework4 from './components/Homework4/Homework4';

function App() {
  const [component, setComponent] = useState('');
  function handleClick(id) {
    switch (id) {
      case '1':
        setComponent(<Homework2 />);
        break;
      case '2':
        setComponent(<Homework3 />);
        break;
      case '3':
        setComponent(<Homework4 />);
        break;

      default:
        break;
    }
  }

  return (
    <>
      <ul>
        <li
          id='1'
          style={{ cursor: 'pointer' }}
          onClick={(e) => handleClick(e.target.id)}
        >
          Homework 2
        </li>
        <li
          id='2'
          style={{ cursor: 'pointer' }}
          onClick={(e) => handleClick(e.target.id)}
        >
          Homework 3
        </li>
        <li
          id='3'
          style={{ cursor: 'pointer' }}
          onClick={(e) => handleClick(e.target.id)}
        >
          Homework 4
        </li>
      </ul>
      {component}
    </>
  );
}

export default App;
