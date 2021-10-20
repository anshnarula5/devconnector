import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteAccount, getCurrentProfile } from "../../redux/actions/profile";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import DashboardActions from "./DashboardActions";
import Experience from "./Experience";
import Education from "./Education";

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
        <>
            <DashboardActions />
            {profile.experience.length ? <Experience experience={profile.experience}/> : <h2  className = "my-3">No Experiences yet, add one</h2>}
            {profile.education.length ? <Education education={profile.education}/> : <h2 className = "my-3">Add Education</h2>}
            <button className="btn btn-danger" onClick = {() => dispatch(deleteAccount())}>
            <i class="fas fa-user-minus text-primary"></i> Delete account
            </button>
        </>
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
