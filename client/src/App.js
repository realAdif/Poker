import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import PrizeStructure from './PrizeStructure'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Sidebar>{<PrizeStructure/>}</Sidebar>}/>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
