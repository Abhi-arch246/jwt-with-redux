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
          <Route path='/' element={<PublicRoutes> <Login /> </PublicRoutes>} />
          <Route path='/dashboard' element={<ProtectedRoutes> <Dashboard /> </ProtectedRoutes>} />
          <Route path='/register' element={<PublicRoutes> <Register /> </PublicRoutes>} />
        </Routes>
      </Router>
    </div>
  );
}

export function ProtectedRoutes({ children }) {
  const user = localStorage.getItem('currentUser')
  if (user) {
    return children
  } else {
    return <Navigate to="/" />
  }
}

export function PublicRoutes({ children }) {
  const user = localStorage.getItem('currentUser')
  if (user) {
    return <Navigate to='/dashboard' />
  } else {
    return children
  }
}

export default App;
