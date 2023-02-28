import './App.css';
import Button from './utils/Button.js';
import Footer from './utils/Footer.js';
import NavBar from './utils/NavBar.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <div className="intro-container">
          <h2> BIENVENIDO A TIINIK</h2>
          <p>
            TIINIK es una aplicación tipo Trivial social: los propios usuarios publican las
            preguntas, y el sistema se encarga de ordenarlas por dificultad. Así puedes elegir
            cualquier temática para jugar, con preguntas cada vez más difíciles.
          </p>
          <p>¡Pruébalo!</p>
          <Button />
        </div>
      </header>
      <Footer />
    </div>
  );
}

export default App;
