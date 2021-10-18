import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../../redux/actions/auth';

const Navbar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  const handleLogout = () => {
    dispatch(logout())
  }
    return (
    <nav className="navbar bg-dark">
      <h1>
        <Link to="/"><i className="fas fa-code"></i> DevConnector</Link>
      </h1>
      <ul>
        <li><Link to="profiles">Developers</Link></li>
        {!isAuthenticated && <li><Link to="/register">Register</Link></li>}
          {!isAuthenticated && <li><Link to="/login">Login</Link></li>}
          {isAuthenticated && <button onClick = {handleLogout}>Logout</button>}
      </ul>
    </nav>
    );
}

export default Navbar;
