// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ContactPage';
import './App.css'

const App = () => {
 return (
    <div className='container'>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
       </Routes>
    </div>
 );
};

export default App;