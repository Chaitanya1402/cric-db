import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerInfo from './components/PlayerInfo';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Jumbotron />} />
          <Route path='players' element={<PlayerList />} />
          <Route path='players/:id/:name' element={<PlayerInfo />} />
          {/* For error page */}
          {/* <Route path='*' element={<Jumbotron />} /> */}

        </Routes>
      </Router>
    </>
  );
}

export default App;
