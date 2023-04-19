// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';
import PageTemplate from './PageTemplate';
import Work from './pages/WorkPage'

const App = () => {




   return (
      <div>
         <PageTemplate>
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/contact" element={<Contact />} />
               <Route path='/work' element={<Work />} />
               <Route path="/about" element={<About />} />
            </Routes>
         </PageTemplate>
      </div>
   );
};

export default App;