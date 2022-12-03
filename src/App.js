import logo from './logo.svg';
import './App.css';
import { 
  ProductCardCollection 
} from './ui-components';
import Exercise from './pages/exercise'
import Best from './pages/best'
import Home from './pages/home'
import Navbar from './pages/navbar'
import Workouts from './pages/workouts'
import {Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router} from "react-router-dom";


//testing
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
    <Route path="/home" element={<Home/>} />
    <Route path="/workouts" element={<Workouts/>} />
    <Route path="/best" element={<Best />} />
    <Route path="/exercise" element={<Exercise/>} />
    </Routes>
    </div>
  );
}

export default App;
