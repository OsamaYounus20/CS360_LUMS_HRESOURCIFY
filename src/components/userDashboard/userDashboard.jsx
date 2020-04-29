import React, { Component } from "react";
import "./userDashboard.css";
import Button from "@material-ui/core/Button";
import Navbar from "../userNavbar/navbar";
import Clock from "../clock/clock";
class userDashBoard extends Component {
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
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="clockContainer">
          <Clock />
        </div>
        <div className="pageContainer">
          <div className="userDashboard">
            <Button
              variant="contained"
              style={{
                marginLeft: "100px",
                // marginTop: "100px",
                minWidth: "140px",
                minHeight: "140px",
                maxWidth: "140px",
                maxHeight: "140px",
                background: "#292770",
                borderRadius: "30px",
                fontSize: "1em",
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
                // marginTop: "100px",
                minWidth: "140px",
                minHeight: "140px",
                maxWidth: "140px",
                maxHeight: "140px",
                background: "#292770",
                borderRadius: "30px",
                fontSize: "1em",
              }}
              size="large"
              color="default"
            >
              Add Department
            </Button>
            <Button
              variant="contained"
              style={{
                marginLeft: "100px",
                // marginTop: "100px",
                minWidth: "140px",
                minHeight: "140px",
                maxWidth: "140px",
                maxHeight: "140px",
                background: "#292770",
                borderRadius: "30px",
                fontSize: "1em",
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
                minWidth: "140px",
                minHeight: "140px",
                maxWidth: "140px",
                maxHeight: "140px",
                background: "#292770",
                borderRadius: "30px",
                fontSize: "1em",
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
                minWidth: "140px",
                minHeight: "140px",
                maxWidth: "140px",
                maxHeight: "140px",
                background: "#292770",
                borderRadius: "30px",
                fontSize: "1em",
              }}
              size="large"
              color="default"
            >
              Delete Department
            </Button>
            <Button
              variant="contained"
              style={{
                marginLeft: "100px",
                marginTop: "100px",
                minWidth: "140px",
                minHeight: "140px",
                maxWidth: "140px",
                maxHeight: "140px",
                background: "#292770",
                borderRadius: "30px",
                fontSize: "1em",
              }}
              size="large"
              color="default"
            >
              View Benefit Request
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default userDashBoard;
