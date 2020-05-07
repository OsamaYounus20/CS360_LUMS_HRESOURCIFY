import React, { Component } from "react";
import "./viewUserInfo.css";
import Navbar from "../adminNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import axios from "axios";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

// above components imported from material-ui.com and modified to fit our code
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
class viewUserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
      open: false,
    };
  }
  handleClickOpen() {
    this.setState({
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleClickEditUser(event) {
    var apiBaseUrl = "http://3.8.136.131:4000/api/";
    var payload = {
      Message: "give user info",
      Id: this.state.id,
    };
    axios
      .post(apiBaseUrl + "edit_user_info", payload)
      .then(function (response) {});
    this.props.history.push("/edit_user");
  }
  handleClickDeleteUser(event) {
    var apiBaseUrl = "http://3.8.136.131:4000/api/";
    var payload = {
      Message: "delete user info",
      Id: this.state.id,
    };
    axios
      .post(apiBaseUrl + "delete_user", payload)
      .then(function (response) {});
    this.props.history.push("/user");
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token === null) {
      this.setState({
        loggedIn: false,
      });
    }
    var apiBaseUrl = "http://3.8.136.131:4000/api/";
    var self = this;
    var payload = {
      // asking server for data
      msg: "Send Data",
      id: -1,
    };
    axios
      .post(apiBaseUrl + "view_user_info", payload)
      .then(function (response) {
        // data being recieved from server
        self.setState({
          id: response.data.user_id,
          name: response.data.full_name,
          phone: response.data.contact_no,
          address: response.data.address,
          email: response.data.email,
          cnic: response.data.cnic,
          dob: response.data.dob,
          gender: response.data.gender,
          status: response.data.marital_status,
          dept: response.data.department,
          job: response.data.job_title,
          loc: response.data.location,
          nationality: response.data.nationality,
          bloodgrp: response.data.blood_type,
          manager: response.data.manager,
        });
      });
    return;
  }
  render() {
    if (this.state.loggedIn === false) {
      return (
        <Link to="/" style={{ textDecoration: "none" }}>
          You are not LoggedIn( Click Here )
        </Link>
      );
    }
    return (
      <div>
        <Navbar />
        <div className="ContainerPlacing">
          <h1>Employee Info</h1>
          <div className="userInfo">
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto" }}
            >
              <div>
                <ul>
                  <li>
                    <div>
                      <h5>
                        <b>Name:</b>
                      </h5>
                      <h4> {this.state.name}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Email:</b>
                      </h5>
                      <h4> {this.state.email}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Phone Number:</b>
                      </h5>
                      <h4>{this.state.phone}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>CNIC:</b>
                      </h5>
                      <h4> {this.state.cnic}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>D.O.B:</b>
                      </h5>
                      <h4>{this.state.dob}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Marital Status:</b>
                      </h5>
                      <h4> {this.state.status}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Blood Group:</b>
                      </h5>
                      <h4> {this.state.bloodgrp}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Job Title:</b>
                      </h5>
                      <h4> {this.state.job}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Department:</b>
                      </h5>
                      <h4> {this.state.dept}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Manager:</b>
                      </h5>
                      <h4> {this.state.manager}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Location:</b>
                      </h5>
                      <h4> {this.state.loc}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Nationality:</b>
                      </h5>
                      <h4> {this.state.nationality}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Address:</b>
                      </h5>
                      <h4> {this.state.address}</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </Typography>
          </div>
        </div>
        <div>
          <Dialog
            open={this.state.open}
            onClose={this.handleClose.bind(this)}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{"Warning"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure you want to delete this user?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button
                className="colorButton"
                onClick={this.handleClose.bind(this)}
                color="primary"
              >
                Cancel
              </Button>
              <Button
                onClick={this.handleClickDeleteUser.bind(this)}
                color="primary"
                autoFocus
                className="colorButton"
              >
                Delete
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="centerplacing">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className="buttonmargin"
              onClick={this.handleClickEditUser.bind(this)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className="buttonmargin"
              onClick={this.handleClickOpen.bind(this)}
            >
              Delete
            </Button>
          </ThemeProvider>
        </div>
      </div>
    );
  }
}
export default viewUserInfo;
