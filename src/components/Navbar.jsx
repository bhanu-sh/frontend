import React from "react";
import { NavLink } from "react-router-dom";
import UseAppContext from "../AppContext";

const Navbar = () => {

  const {loggedin, logout} = UseAppContext();

  const displayUserOption = () => {
    if(loggedin){
      return(
        <li className="nav-item">
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        </li>
      );
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Navbar
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/event">
                Event Handling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/state">
                State Management
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/fbpost">
                Facebook Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/todo">
                To-Do List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/browse">
                Browse
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/manageuser">
                Manage User
              </NavLink>
            </li>
          </ul>
          
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {displayUserOption()}
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
