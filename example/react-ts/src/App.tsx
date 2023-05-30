import { Router, Routes, Route } from 'wap-router';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ProductDetailPage from './pages/ProductDetailPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/main/product" element={<ProductPage />} />
        <Route
          path="/main/product/:productId/user/:userId"
          element={<ProductDetailPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
