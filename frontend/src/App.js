import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PlayerInfo from './components/PlayerInfo';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<><Jumbotron /> <About /></>} />
          <Route path='players' element={<PlayerList />} />
          <Route path='players/:id/:name' element={<PlayerInfo />} />
          <Route path='about' element={<About />} />
          <Route path="contact" element={<Contact />} />
          {/* For error page */}
          <Route path='*' element={<ErrorPage />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
