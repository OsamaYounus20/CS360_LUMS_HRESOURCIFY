import React, { Component } from "react";
import "./applyLeaves.css";
import TextField from "@material-ui/core/TextField";
import Navbar from "../userNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import axios from 'axios';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
  } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class applyLeave extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name : '',
      Department: '',
      HOD: '',
      fromDate: '2020/01/01',
      toDate: '2020/01/11',
      type: '',
      reason: '',
      loggedIn: true,
      
    };
    this.inputChange = this.inputChange.bind(this);
    this.handleDateChange = this.handleFromDateChange.bind(this);
    this.handleDateChange = this.handleToDateChange.bind(this);
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if(token === null) {
      this.setState({
        loggedIn: false,
      });
    }
  }
  handleFromDateChange(date) {
    this.setState({
      fromDate: date,
    });
  }
  handleToDateChange(date) {
    this.setState({
      toDate: date,
    });
  }
  inputChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    });
}
  onClickApply(event) {
    event.preventDefault()
    var apiBaseUrl =  "http://localhost:4000/api/";
    var self = this;
    var payload = {
        'Name': this.state.Name,
        'Department': this.state.Department,
        'HOD' : this.state.HOD,
        'fromDate': this.state.fromDate,
        'toDate': this.state.toDate,
        'type': this.state.type,
        'reason': this.state.reason,
    }
    axios.post(apiBaseUrl+'add_user', payload)
    .then(function(response){
        if (response.data.code === 200) {           // successful login
            self.props.history.push('/user_dashboard');
        }
    })
    return
  }
  onClickCancel(event) {
    this.props.history.push("/user_dashboard");
  }
  render() {
    if(this.state.loggedIn === false) {
      return <Link to="/" style={{ textDecoration: "none" }}>You are not LoggedIn( Click Here )</Link>
    }
    return (
      <div>
        <Navbar />
        <div className="ContainerPlacing">
          <Container fixed>
            <h1>Apply for Leave</h1>
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto" }}
            >
              <form>
                <div className="formContainer">
                  <div>
                    <Avatar alt="Remy Sharp" className="picture" />
                  </div>
                  <TextField
                    required
                    name="Name"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    required
                    name= "Department"
                    id="outlined-basic"
                    label="Department"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    required
                    name= "Head of Department"
                    id="outlined-basic"
                    label="Head of Department"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      required
                      autoOk
                      variant="inline"
                      inputVariant="outlined"
                      label="From Date"
                      format="yyyy/MM/dd"
                      value={this.state.fromDate}
                      InputAdornmentProps={{ position: "start" }}
                      onChange={(date) => this.handleDateChange(date)}
                    />
                  </MuiPickersUtilsProvider>
                  
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      required
                      autoOk
                      variant="inline"
                      inputVariant="outlined"
                      label="To Date"
                      format="yyyy/MM/dd"
                      value={this.state.toDate}
                      InputAdornmentProps={{ position: "start" }}
                      onChange={(date) => this.handleToDateChange(date)}
                    />
                  </MuiPickersUtilsProvider>
                  <TextField
                    required
                    name= "Type"
                    id="outlined-basic"
                    label="Type"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  

                  <TextField
                    required
                    name="Reason"
                    id="outlined-multiline-static"
                    label="Reason"
                    rows={4}
                    multiline
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />{" "}
                </div>
              </form>
            </Typography>
          </Container>
          <div className="centerplacing">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className="margin"
                onClick={this.onClickApply.bind(this)}
              >
                Apply
              </Button>

              <Button
                variant="contained"
                size="small"
                color="primary"
                className="margin"
                onClick={this.onClickCancel.bind(this)}
              >
                Cancel
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}

export default applyLeave;
