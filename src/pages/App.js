import React from "react";
import Signup from "./Signup";

import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import NavSidebar from "../components/nav-sidebar/nav-sidebar";
import FarmHouse from "./farm-houses";
import CreateFarmHouse from "./farm-house-create";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />

          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/farm-houses" component={FarmHouse} />
          <PrivateRoute
            exact
            path="/create-farmhouse"
            component={CreateFarmHouse}
          />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
