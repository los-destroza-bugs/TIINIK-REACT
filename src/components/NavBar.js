import '../css/NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <header className="NavBar-header">
        <h2>TIINIK</h2>
      </header>
      <a href="/como-funciona">Cómo funciona</a>
      <a href="/registro">Regístrate</a>
    </div>
  );
}

export default NavBar;
