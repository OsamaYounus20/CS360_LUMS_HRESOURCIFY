import React from "react";
import "./App.css";
import "./components/util.css";
import Login from "./components/login/login";
import Loading from "./components/loading/loading";
import adminDasboard from "./components/adminDashboard/adminDashboard";
import user from "./components/users/users";
import editUser from "./components/editUser/editUser";
import addUser from "./components/addUser/addUser";
import viewPersonalInfo from "./components/viewPersonaInfo/viewPersonalInfo";
import editInfo from "./components/editInfo/editInfo";
import department from "./components/department/department";
import addDepartment from "./components/addDepartment/addDepartment";
import deleteDepartment from "./components/deleteDepartment/deleteDepartment";
import editDepartment from "./components/editDepartment/editDepartment";
// import userDasboard from "./components/userDashboard/userDashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import viewUserInfo from "./components/viewUserInfo/viewUserInfo";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/edit_info" component={editInfo} />
          <Route exact path="/view_personal_info" component={viewPersonalInfo} />
          <Route exact path="/user" component={user} />
          <Route exact path="/add_user" component={addUser} />
          <Route exact path="/edit_user" component={editUser} />
          <Route exact path="/admin_dashboard" component={adminDasboard} />
          <Route exact path="/" component={Login} />
          <Route exact path="/loading" component={Loading} />
          <Route exact path="/view_user_info" component={viewUserInfo} />
          <Route exact path="/department" component={department} />
          <Route exact path="/add_department" component={addDepartment}/>
          <Route exact path="/edit_department" component={editDepartment}/>
          <Route exact path="/delete_department" component={deleteDepartment}/>
          {/* <Route exact path="/user_dashboard" component={userDasboard}/> */}
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
