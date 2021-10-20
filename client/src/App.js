import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Alert from "./components/layout/Alert";
import { loadUser } from "./redux/actions/auth";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import setAuthToken from "./utils/setAuthToken";
import Dashboard from "./components/dashboard/Dashboard";
import Privateroute from "./components/routing/Privateroute";
import Createprofile from "./components/layout/profileForms/CreateProfile";
import EditProfile from "./components/layout/profileForms/EditProfile";
import AddExperience from "./components/layout/profileForms/AddExperience";
import AddEducation from "./components/layout/profileForms/AddEducation";

if (localStorage.token) {
  setAuthToken(localStorage.token)
}

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Alert />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Privateroute exact path="/dashboard" component={Dashboard} />
          <Route exact path="/create-profile" component={Createprofile} />
          <Route exact path="/edit-profile" component={EditProfile} />
          <Route exact path="/add-experience" component={AddExperience} />
          <Route exact path="/add-education" component={AddEducation} />
        </Switch>
      </section>
    </>
  );
}

export default App;
