import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import homepage from "./pages/homePage";
import registerPage from "./pages/registerPage";
import dashboardPage from "./pages/dashboardPage";
import "./App.css";

function App() {
  const routes = (
    <Switch>
      <Route path="/" component={homepage} exact></Route>
      <Route path="/register" component={registerPage}></Route>
      <Route path="/dashboard" component={dashboardPage}></Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
  return <div className="App">{routes}</div>;
}

export default App;
