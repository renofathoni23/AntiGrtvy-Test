import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Outlet from './pages/Outlet/Outlet';
import Footer from './components/Footer/Footer';
import CarDetail from './pages/CarDetail/CarDetail';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/outlet' element={<Outlet></Outlet>}></Route>
          <Route path='/overview' element={<CarDetail></CarDetail>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
