import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  const handleFocus = (e) => {
    e.target.blur();
  }
  
  return (
    <nav className="navbar">
      <NavLink className="nav-link" activeClassName="active-link" exact={true} onClick={handleFocus} to="/">Home</NavLink>
      <NavLink className="nav-link" activeClassName="active-link" onClick={props.handlePageLoad && handleFocus} to="/projects">Projects</NavLink>
      <NavLink className="nav-link" activeClassName="active-link" onClick={props.handlePageLoad && handleFocus} to="about-me">About Me</NavLink>
    </nav>
  );
}

export default Navbar;
