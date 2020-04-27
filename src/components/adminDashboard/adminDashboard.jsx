import "./adminDashboard.css";
import React,{Component} from "react";

import Container from "@material-ui/core/Container";
import Navbar from "../adminNavbar/navbar";

//export default function ClippedDrawer() {
class adminDashBoard extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAddUser(event) {
    this.props.history.push("/add_user");
  }
  onClickDeleteUser(){
    this.props.history.push("/user");
  }
  render(){
  return (
    <div>
      <Navbar />
      <div className="ContainerPlacing">
        <Container fixed>
          <ul>
            <li>
              <button className="addUserButton" onClick={this.onClickAddUser.bind(this)}>
                <h3 className="buttonText">
                  <b>Add User</b>
                </h3>
              </button>
            </li>
            <li>
              <button className="addDepartmentButton">
                <h3 className="buttonText2">
                  <b>Add Department</b>
                </h3>
              </button>
            </li>
            <li>
              <button className="leaveButton">
                <h3 className="buttonText2">
                  <b>View Leave Request</b>
                </h3>
              </button>
            </li>
            <li>
              <button className="deleteUserButton">
                <h3 className="buttonText" onClick={this.onClickDeleteUser.bind(this)}>
                  <b>Users</b>
                </h3>
              </button>
            </li>
            <li>
              <button className="deleteDepartmentButton">
                <h3 className="buttonText2">
                  <b>Delete Department</b>
                </h3>
              </button>
            </li>
            <li>
              <button className="benefitButton">
                <h3 className="buttonText2">
                  <b>View Benefit Request</b>
                </h3>
              </button>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
  }
}
export default adminDashBoard;