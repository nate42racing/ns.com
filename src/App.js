// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import PageTemplate from './PageTemplate';
import Work from './pages/WorkPage'
import Dropdown from './components/Dropdown';

const App = () => {
   const navitems = [
      { label: 'Home', value: 'home' },
      { label: 'About', value: 'about' },
      { label: 'Work', value: 'work' },
      { label: 'Contact', value: 'contact' },
   ];

   return (
      <div>
         <Dropdown navitems={navitems} />
      </div>
   );
};

export default App;