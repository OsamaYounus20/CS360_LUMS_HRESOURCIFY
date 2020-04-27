import React from "react";
import "./App.css";
import "./components/util.css";
import Login from "./components/login/login";
import Loading from "./components/loading/loading";
import adminDasboard from "./components/adminDashboard/adminDashboard";
import user from "./components/users/users";
import editUser from "./components/editUser/editUser";
import addUser from "./components/addUser/addUser";
import viewInfo from "./components/viewInfo/viewInfo";
import editInfo from "./components/editInfo/editInfo";
import deleteUser from "./components/deleteUser/deleteUser";



import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/edit_info" component={editInfo} />
          <Route exact path="/view_info" component={viewInfo} />
          <Route exact path="/user" component={user} />
          <Route exact path="/add_user" component={addUser} />
          <Route exact path="/edit_user" component={editUser} />
          <Route exact path="/admin_dashboard" component={adminDasboard} />
          <Route exact path="/" component={Login} />
          <Route exact path="/loading" component={Loading} />
          <Route exact path="/delete_user" component={deleteUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
