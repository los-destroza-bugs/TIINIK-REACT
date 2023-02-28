import '../css/NavBar.css';

function NavBar() {
  return (
    <div className="NavBar">
      <header className="NavBar-header">
        <a id="navbar-home-link" href="/">
          <h1>TIINIK</h1>
        </a>
      </header>
      <a href="/como-funciona">Cómo funciona</a>
      <div className="login-signin">
        <a href="/login">Login</a>
        <span> </span>
        <a href="/registro">Registrarse</a>
      </div>
    </div>
  );
}

export default NavBar;
