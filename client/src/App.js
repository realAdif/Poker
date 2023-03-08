import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import PrizeStructure from './PrizeStructure';
import TournamentClock from './TournamentClock';
import TournamentTimer from './TournamentTimer'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Sidebar>{<PrizeStructure/>}</Sidebar>}/>
          <Route path='/TourmamentClock' element={<Sidebar>{<TournamentClock/>}</Sidebar>}/>
          <Route path='/timer' element={<TournamentTimer/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
