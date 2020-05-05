import React, { Component } from "react";
import "./userDashboard.css";
import Button from "@material-ui/core/Button";
import Navbar from "../userNavbar/navbar";
import Clock from "../clock/clock";
import Piechart from "../piechart/piechart";
import { Link } from "react-router-dom";

class userDashBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userID: "",
        userType: "",
      },
      loggedIn: true,
    };
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if(token === null) {
      this.setState({
        loggedIn: false,
      });
    }
  }
  onClickPersonalInfo(event) {
    this.props.history.push("/view_info");
  }
  onClickViewAssignedTasks() {
    // console.log(userclass.returnUser());
    // console.log("abhi krna hai");
    this.props.history.push("/view_assigned_task");
  }
  onClickToDoTasks() {
    // console.log("abhi krna hai");
    this.props.history.push("/to_do_task");
  }
  onClickAssignTasks() {
    // console.log("abhi krna hai");
    this.props.history.push("/assign_task");
  }
  onClickCalendar(event) {
    this.props.history.push("/calendar");
  }
  onClickLeave(event) {
    this.props.history.push("/apply_leaves");
    console.log("abhi krna hai");
  }
  onClickAttendance(event) {
    this.props.history.push("/attendance");
  }

  render() {
    if(this.state.loggedIn === false) {
      return <Link to="/" style={{ textDecoration: "none" }}>You are not LoggedIn( Click Here )</Link>
    }
    return (
      <React.Fragment>
        <Navbar />
        <div className="pageContainer">
          <div className="clockContainer">
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
                onClick={this.onClickAssignTasks.bind(this)}
              >
                Assign Tasks
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
                onClick={this.onClickViewAssignedTasks.bind(this)}
              >
                View Assigned Tasks
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
                onClick={this.onClickToDoTasks.bind(this)}
              >
                To Do Tasks
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
                onClick={this.onClickCalendar.bind(this)}
              >
                Calendar
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
                onClick={this.onClickLeave.bind(this)}
              >
                Leave
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
                onClick={this.onClickPersonalInfo.bind(this)}
              >
                Personal Info
              </Button>
            </div>
            <button
              className="piechart"
              onClick={this.onClickAttendance.bind(this)}
            >
              <h1>Attendance</h1>
              <Piechart />
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default userDashBoard;
