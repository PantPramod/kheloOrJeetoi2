import logo from './logo.svg';
import './App.css';
import Create from './Create';
import { Routes, Route, NavLink } from 'react-router-dom'
import Show from './Show';
function App() {
  return (
    <div className="app">
      <header>
        Khelo & Jeeto
      </header>
      <nav>
        <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/"> Add</NavLink>
        <NavLink className={(navData) => navData.isActive ? "active" : ""} to="/show">Show</NavLink>
    
      </nav>
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/show" element={<Show />} />
      </Routes>

    </div>
  );
}

export default App;
