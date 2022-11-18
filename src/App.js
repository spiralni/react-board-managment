import Header from './components/Header/Header'
import Board from './pages/Board/Board'
import './App.css'
import Backlog from './pages/Backlog/Backlog';

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
      <Backlog />
    </div>
  );
}

export default App;
