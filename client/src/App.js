import "./App.css";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import { Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Switch>
        <section className="container">
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </section>
      </Switch>
    </>
  );
}

export default App;
