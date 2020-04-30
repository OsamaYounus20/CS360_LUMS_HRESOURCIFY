import React, { Component } from "react";
import "./adminDashboard.css";
import Button from "@material-ui/core/Button";

import Navbar from "../adminNavbar/navbar";

class adminDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAddUser(event) {
    this.props.history.push("/add_user");
  }
  onClickDeleteUser() {
    this.props.history.push("/user");
  }
  onClickAddDepartment() {
    this.props.history.push("/add_department");
  }
  onClickDepartment() {
    this.props.history.push("/department");
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="dashboard">
          <Button
            variant="contained"
            style={{
              marginLeft: "100px",
              marginTop: "100px",
              minWidth: "200px",
              minHeight: "200px",
              maxWidth: "200px",
              maxHeight: "200px",
              background: "#292770",
              borderRadius: "30px",
              fontSize: "1.5em",
            }}
            size="large"
            color="default"
            onClick={this.onClickDeleteUser.bind(this)}
          >
            Users
          </Button>
          <Button
            variant="contained"
            style={{
              marginLeft: "100px",
              marginTop: "100px",
              minWidth: "200px",
              minHeight: "200px",
              maxWidth: "200px",
              maxHeight: "200px",
              background: "#292770",
              borderRadius: "30px",
              fontSize: "1.5em",
            }}
            size="large"
            color="default"
            onClick={this.onClickDepartment.bind(this)}
          >
            Departments
          </Button>
          <Button
            variant="contained"
            style={{
              marginLeft: "100px",
              marginTop: "100px",
              minWidth: "200px",
              minHeight: "200px",
              maxWidth: "200px",
              maxHeight: "200px",
              background: "#292770",
              borderRadius: "30px",
              fontSize: "1.5em",
            }}
            size="large"
            color="default"
          >
            View Leave Request
          </Button>
          <Button
            variant="contained"
            style={{
              marginLeft: "100px",
              marginTop: "100px",
              minWidth: "200px",
              minHeight: "200px",
              maxWidth: "200px",
              maxHeight: "200px",
              background: "#292770",
              borderRadius: "30px",
              fontSize: "1.5em",
            }}
            size="large"
            color="default"
            onClick={this.onClickAddUser.bind(this)}
          >
            Add User
          </Button>
          <Button
            variant="contained"
            style={{
              marginLeft: "100px",
              marginTop: "100px",
              minWidth: "200px",
              minHeight: "200px",
              maxWidth: "200px",
              maxHeight: "200px",
              background: "#292770",
              borderRadius: "30px",
              fontSize: "1.5em",
            }}
            size="large"
            color="default"
            onClick={this.onClickAddDepartment.bind(this)}
          >
            Add Department
          </Button>
          <Button
            variant="contained"
            style={{
              marginLeft: "100px",
              marginTop: "100px",
              minWidth: "200px",
              minHeight: "200px",
              maxWidth: "200px",
              maxHeight: "200px",
              background: "#292770",
              borderRadius: "30px",
              fontSize: "1.5em",
            }}
            size="large"
            color="default"
            
          >
            View Benefit Request
          </Button>
        </div>
      </div>
    );
  }
}
export default adminDashBoard;
