import logo from './logo.svg';
import './App.css';
import Chest from './pages/dropdown/chest'
import Best from './pages/best'
import Home from './pages/home'
import Navbar from './pages/navbar'
import Workouts from './pages/workouts'
import {Route, Routes} from 'react-router-dom';
import Back from './pages/dropdown/back'


//testing
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/workouts" element={<Workouts/>} />
    <Route path="/best" element={<Best />} />
    <Route path="/chest" element={<Chest/>} />
    <Route path="/back" element={<Back/>} />
    </Routes>
    </div>
  );
}

export default App;
