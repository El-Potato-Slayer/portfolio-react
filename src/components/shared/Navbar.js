import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" onClick={props.handlePageLoad} to="/projects">Projects</Link>
      <Link className="nav-link" onClick={props.handlePageLoad} to="about-me">About Me</Link>
    </nav>
  );
}

export default Navbar;
