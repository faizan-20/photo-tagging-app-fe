import { Route, Routes } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import RoboCity from './components/RoboCity';
import Home from './components/Home';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/robo-city' element={<RoboCity/>} />
      </Routes>
    </>
  );
}

export default App;
