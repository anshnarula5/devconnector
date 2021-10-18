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
        </Switch>
      </section>
    </>
  );
}

export default App;
