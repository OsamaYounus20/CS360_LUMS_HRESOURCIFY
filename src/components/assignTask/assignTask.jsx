import React, { Component } from "react";
import "./assignTask.css";
import TextField from "@material-ui/core/TextField";
import Navbar from "../userNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import axios from 'axios';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
  } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import Calendar from "../calendar/calendar";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class assignTask extends Component {
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
componentDidMount() {
  const token = localStorage.getItem("token");
  if(token === null) {
    this.setState({
      loggedIn: false,
    });
  }
}
  onClickAssign(event) {
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
  onClickAssignTask(event) {
    this.props.history.push("/assign_task");
  }
  onClickViewAssignTask(event) {
    this.props.history.push("/view_assigned_task");
  }
  onClickToDoTask(event) {
    this.props.history.push("/to_do_task");
  }
  render() {
    if(this.state.loggedIn === false) {
      return <Link to="/" style={{ textDecoration: "none" }}>You are not LoggedIn( Click Here )</Link>
    }
    return (
      <div>
        <Navbar />
        <div className="ContainerPlacing">
        <Paper square>
              <Tabs
                indicatorColor="primary"
                textColor="primary"
                centered
              >
                <Tab label="Assign Task" onClick={this.onClickAssignTask.bind(this)}/>
                <Tab label="View Assigned Task"  onClick={this.onClickViewAssignTask.bind(this)}/>
                <Tab label="To Do Task" onClick={this.onClickToDoTask.bind(this)}/>
              </Tabs>
            </Paper>
          <Container fixed>
            <h1>Assign Task</h1>
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto" }}
            >
             
              
              <form>
                
                <div className="formpositioning">
                
                <div className="myform">
                  
                  <TextField
                    required
                    name="Task Name"
                    id="outlined-basic"
                    label="Task Name"
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
                      label="Assign Date"
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
                      label="Due Date"
                      format="yyyy/MM/dd"
                      value={this.state.toDate}
                      InputAdornmentProps={{ position: "start" }}
                      onChange={(date) => this.handleToDateChange(date)}
                    />
                  </MuiPickersUtilsProvider>
                  <TextField
                    required
                    name= "Status"
                    id="outlined-basic"
                    label="Status"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    required
                    name= "Priority"
                    id="outlined-basic"
                    label="Priority"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  
                  <TextField
                    required
                    name= "Assignee"
                    id="outlined-basic"
                    label="Assignee"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />

                  <TextField
                    required
                    name= "Team Lead"
                    id="outlined-basic"
                    label="Team Lead"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  
                 
                  
                </div>
                <div className="cal">
                  <Calendar/>
                </div>
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
                onClick={this.onClickAssign.bind(this)}
              >
                Assign
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

export default assignTask;
