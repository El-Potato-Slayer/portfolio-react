import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/projects">Projects</Link>
      <Link className="nav-link" to="about-me">About Me</Link>
    </nav>
  );
}

export default Navbar;
