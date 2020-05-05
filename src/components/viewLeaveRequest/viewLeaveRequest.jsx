import React, { Component } from "react";
import "./viewLeaveRequest.css";
import Navbar from "../adminNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import image1 from "../img/imagetest.jpg";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
  style:{
      height: "auto",
      margin: "auto",
  }
});
class viewLeaveRequest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
  }
  onClickGrant(event) {
    this.props.history.push("/pending_leave_requests");
  }
  onClickDeny(event) {
    this.props.history.push("/pending_leave_requests");
  }
  componentDidMount() {
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload = {
      msg: "Send Data",
      id: 2001,
    };
    axios.post(apiBaseUrl + "view_info", payload).then(function (response) {
      self.setState({
        // rows: response.data,
        name: response.data[0].full_name,
        phone: response.data[0].contact_no,
        address: response.data[0].address,
        email: response.data[0].email,
        cnic: response.data[0].cnic,
        dob: response.data[0].dob,
        gender: response.data[0].gender,
        status: response.data[0].marital_status,
      });
    });
    return;
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="ContainerPlacing">
          <Container fixed>
            <h1>Personal Info</h1>
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto" }}
            >
              <div>
                <div className="pictureBG">
                  <Avatar alt="Remy Sharp" src={image1} className="picture" />
                </div>
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
                        <b>Department:</b>
                      </h5>
                      <h4> {this.state.email}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>H.O.D:</b>
                      </h5>
                      <h4>{this.state.phone}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>From Date:</b>
                      </h5>
                      <h4> {this.state.cnic}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>To Date:</b>
                      </h5>
                      <h4>{this.state.dob}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Type:</b>
                      </h5>
                      <h4> {this.state.status}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Reason:</b>
                      </h5>
                      <h4> {this.state.bloodgrp}</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </Typography>
          </Container>
            
          <div className="centerplacing">
            <ThemeProvider theme={theme} >
              <Button
                variant="contained"
                size="small"
                color="primary"
                className="margin"
                onClick={this.onClickGrant.bind(this)}

              >
                Grant
              </Button>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className="margin"
                onClick={this.onClickDeny.bind(this)}
              >
                Deny
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}
export default viewLeaveRequest;
