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
    this.props.history.push("/pending_leave_request");
  }
  onClickDeny(event) {
    this.props.history.push("/pending_leave_request");
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
        department: response.data[0].full_name,
        HOD: response.data[0].full_name,
        fromDate: response.data[0].full_name,
        toDate: response.data[0].full_name,
        type: response.data[0].full_name,
        reason: response.data[0].full_name,
        
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
            <h1>Leave Request</h1>
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto" }}
              className="ContainerPlacing"
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
                        <b>Department:</b>
                      </h5>
                      <h4> {this.state.department}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>H.O.D:</b>
                      </h5>
                      <h4>{this.state.HOD}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>From Date:</b>
                      </h5>
                      <h4> {this.state.fromDate}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>To Date:</b>
                      </h5>
                      <h4>{this.state.toDate}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Type:</b>
                      </h5>
                      <h4> {this.state.type}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      
                    </div>
                  </li>
                  <li>
                    <div>
                     
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Reason:</b>
                      </h5>
                      <h4> {this.state.reason}</h4>
                    </div>
                  </li>
                  
                  
                </ul>
              </div>
            </Typography>
          </Container >
            
          
        
        <div >
            <ThemeProvider theme={theme }  >
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
