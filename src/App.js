// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Products from './pages/ContactPage';
import PageTemplate from './PageTemplate';

const App = () => {
   return (
      <PageTemplate>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </PageTemplate>
   );
};

export default App;