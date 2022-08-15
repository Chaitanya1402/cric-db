import './App.css';
import Jumbotron from './components/Jumbotron';
import Navbar from './components/Navbar';
import PlayerList from './components/PlayerList';

function App() {
  return (
    <>
      <Navbar />
      <Jumbotron />
      <PlayerList />
    </>
  );
}

export default App;
