import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
