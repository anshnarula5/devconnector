import React, { Fragment, useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link, Redirect } from "react-router-dom";
import {login} from "../../redux/actions/auth";

const Login = () => {
  const dispatch = useDispatch()
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login({email, password}))
  };
  if (isAuthenticated) {
    return <Redirect to = "/dashboard" />
  }
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Login</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Log in to your account
        </p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Login" />
        </form>
        <p className="my-1">
          Dont have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Login;
