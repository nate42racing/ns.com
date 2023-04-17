import { Routes, Route, Link } from 'react-router-dom';
import routes from './Routes';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} component={route.component} exact />
        ))}
      </Routes>
    </div>
  );
}

export default App