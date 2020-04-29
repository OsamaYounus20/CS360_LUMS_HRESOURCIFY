import React, { Component } from "react";
import "./userDashboard.css";
import Button from "@material-ui/core/Button";
import Navbar from "../userNavbar/navbar";
import Clock from "../clock/clock";
import Piechart from "../piechart/piechart";

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
        <div className="pageContainer">
              <div className="compo">
                  <div className="clock">
                    <Clock />
                  </div>
              </div>
            <div className="positioning">
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
              color="default"
            >
              View Benefit Request
            </Button>
          </div>
          <div className="piechart">
              <h1>piechart</h1>
          </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default userDashBoard;