import logo from './logo.svg';
import './App.css';
import Chest from './pages/dropdown/chest'
import Best from './pages/best'
import Home from './pages/home'
import Navbar from './pages/navbar'
import Workouts from './pages/workouts'
import {Route, Routes} from 'react-router-dom';
import Back from './pages/dropdown/back'
import Shoulders from './pages/dropdown/shoulders'
import Forearms from './pages/dropdown/forearms'
import Biceps from './pages/dropdown/biceps'
import Triceps from './pages/dropdown/triceps'


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
    <Route path="/shoulders" element={<Shoulders/>} />
    <Route path="/forearms" element={<Forearms/>} />
    <Route path="/biceps" element={<Biceps/>} />
    <Route path="/triceps" element={<Triceps/>} />
    </Routes>
    </div>
  );
}

export default App;
