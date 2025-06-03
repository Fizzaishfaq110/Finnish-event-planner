import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">EventAPP</div>

      <nav className="nav">
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/events">Events</NavLink>
          </li>
          <li>
            <NavLink to="/create">Create</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>

        <div className="auth-buttons">
          <NavLink to="/login" className="btn login">
            Login
          </NavLink>
          <NavLink to="/signup" className="btn signup">
            Sign Up
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
