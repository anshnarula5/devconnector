import React, { Fragment, useState } from "react";
import {Link} from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <section className="container">
        <h1 className="large text-primary">Sign In</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Log in to your account
        </p>
        <form className="form" action="create-profile.html">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              required
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary"
            value="Register"
          />
        </form>
        <p className="my-1">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

export default Login;