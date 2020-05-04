import React, { Component } from "react";
import "./pendingLeaveRequests.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import Navbar from "../adminNavbar/navbar";
import Form from "../leaveTable/leaveTable";
import { Route, withRouter } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class pendingLeaveRequests extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAddUser(event) {
    this.props.history.push("/add_user");
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="formplacing">
        <h1>Pending Leave Requests</h1>
          <Form />
        </div>
      </div>
    );
  }
}
export default withRouter(pendingLeaveRequests);
