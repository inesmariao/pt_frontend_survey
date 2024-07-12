import './App.css';
import { CapituloI } from './components/CapituloI';
import { CapituloII } from './components/CapituloII';
import { CapituloIII } from './components/CapituloIII';

function App() {
  return (
    <div className="App">
      <div className="container">
        <CapituloI />
        <CapituloII />
        <CapituloIII />
      </div>
    </div>
  );
}

export default App;
