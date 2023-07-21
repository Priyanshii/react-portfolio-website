import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Pages from './pages';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);


  return (
    <Router>
      <Pages />
    </Router>
  );
}

export default App;
