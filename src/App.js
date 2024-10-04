import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Protfolio from './page/Protfolio';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/protfolio' element={<Protfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
