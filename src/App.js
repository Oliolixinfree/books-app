import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import './scss/app.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFoundBlock from './components/NotFoundBlock';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFoundBlock />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
