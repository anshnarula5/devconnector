import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const Privateroute = ({ component: Component, ...rest }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && !loading ? (
          <Component {...props} />
        ) : ( 
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default Privateroute;
