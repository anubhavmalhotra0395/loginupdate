import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  return (
  <>
  <Router > 
      <Routes>
      <Route path='/' exact element={<Home />} />  
      <Route path='/dashboard' exact element={<Dashboard />} />  
      </Routes>
  </Router>
  </>
  );
}

export default App;
