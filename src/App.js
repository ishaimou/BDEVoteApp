import React from "react";
import "antd/dist/antd.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Intralogin from "./pages/Login/intraLogin";
import Login from "./pages/Login/Login";
import PrivateRoute from "./services/PrivateRoute";
import NotFound from "./pages/Notfound/404";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route exact path="/intralogin">
              <Intralogin />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/:id" component={Details} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
