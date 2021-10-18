import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { profile, loading } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);
  return loading && profile === null ? (
    <div style={{ width: "200px", margin: "auto", display: "block" }}>
      <Spinner />
    </div>
  ) : (
    <>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Welcome {user && user.name}
      </p>
      {profile ? (
        <>has</>
      ) : (
        <>
          <p>No profile yet, want to create one ?</p>
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </>
  );
};

export default Dashboard;
