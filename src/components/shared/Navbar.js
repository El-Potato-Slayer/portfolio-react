import { Link, NavLink } from "react-router-dom";

function Navbar(props) {
  function handle(e) {
    e.target.blur();
  }
  
  return (
    <nav className="navbar">
      <NavLink className="nav-link" activeClassName="active-link" exact={true} onClick={(e) => {handle(e)}} to="/">Home</NavLink>
      <NavLink className="nav-link" activeClassName="active-link" onClick={(e) => {props.handlePageLoad(); handle(e)}} to="/projects">Projects</NavLink>
      <NavLink className="nav-link" activeClassName="active-link" onClick={(e) => {props.handlePageLoad(); handle(e)}} to="about-me">About Me</NavLink>
    </nav>
  );
}

export default Navbar;
