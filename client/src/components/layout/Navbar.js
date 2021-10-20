import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  logout } from "../../redux/actions/auth";

const Navbar = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  const authLinks = (
    <ul>
      <li>
        <Link to = "/dashboard"> <i className="fas fa-user" ></i> <span className="hide-sm">Dashboard</span></Link>
      </li>
      <li onClick={handleLogout}>
      <a href = "#!"> <i className="fas fa-sign-out-alt" ></i> <span className="hide-sm">Logout</span></a>
      </li>
      <li>
        <Link to="/profiles">Profiles</Link>
      </li>
    </ul>
  );
  const geustLinks = (
    <ul>
      <li>
        <Link to="profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/profiles">Profiles</Link>
      </li>
    </ul>
  );
  return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      {!loading && <> {isAuthenticated ? authLinks : geustLinks}</>}
    </nav>
  );
};

export default Navbar;
