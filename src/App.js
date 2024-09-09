import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/product">Product</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='product' element={<Product />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
