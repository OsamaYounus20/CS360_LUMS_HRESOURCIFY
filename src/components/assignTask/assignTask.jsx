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
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
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
      subordinateList: [],
      subordinateDictionary: {},
      priorityList: ['Low', 'Medium', 'High'],
      priority: 'Low',
      taskName : '',
      deadline: new Date(),
      assignee: '',
      assignedOn: new Date(),
      loggedIn: true,
    };
    this.inputChange = this.inputChange.bind(this);
    this.inputChangePriority = this.inputChangePriority.bind(this);
    this.handleDateChange = this.handleDeadlineChange.bind(this);
    this.inputChangeSubordinate = this.inputChangeSubordinate.bind(this);
  }
  inputChangeSubordinate(e) {
    this.setState({
      assignee: this.state.subordinateDictionary[e.target.value]
    });
  }
  handleDeadlineChange(date) {
    this.setState({
      deadline: date,
    });
  }
  inputChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    });
  }
  inputChangePriority(e) {
    this.setState({
      priority: this.state.priorityList[e.target.value]
    });
  }
componentDidMount() {
  const token = localStorage.getItem("token");
  // this.setState({
  //   userId: localStorage.getItem("user_id")
  // });
  console.log(localStorage.getItem("user_id"));
  if(token === null) {
    this.setState({
      loggedIn: false,
    });
  }
  var apiBaseUrl =  "http://3.8.136.131:4000/api/";
  var self = this;
  var payload = {
      'message': 'subordinates',
      'userId': localStorage.getItem("user_id"),
      // 'description': this.state.taskName,
      // 'deadline' : this.state.deadline,
      // 'priority': this.state.priorityList,
      // 'assigned_to': this.state.assignee,
      // 'assigned_on': date,
      // 'type': this.state.type,
      // 'reason': this.state.reason,
  }
  axios.post(apiBaseUrl+'assign_task', payload)
  .then(function(response){
      self.setState({
        subordinateDictionary: response.data.dict,
        subordinateList: response.data.list
      });
  })
}
  onClickAssign(event) {
    event.preventDefault()
    var apiBaseUrl =  "http://3.8.136.131:4000/api/";
    var self = this;
    var payload = {
        'user_id': localStorage.getItem("user_id"),
        'description': this.state.taskName,
        'deadline' : this.state.deadline,
        'priority': this.state.priority,
        'assigned_to': this.state.assignee,
        'assigned_on': this.state.assignedOn
        // 'assigned_on': date,
        // 'type': this.state.type,
        // 'reason': this.state.reason,
    }
    axios.post(apiBaseUrl+'assign_task', payload)
    .then(function(response){
        if (response.data.code === 200) {
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
            <div className = "heading">
            <h1>Assign Task</h1></div>
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto" }}
            >
             
              
              <form>
                
                <div className="formpositioning">
                
                <div className="myform">
                  
                  <TextField
                    required
                    name="taskName"
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
                      label="Deadline"
                      format="yyyy/MM/dd"
                      value={this.state.toDate}
                      InputAdornmentProps={{ position: "start" }}
                      onChange={(date) => this.handleDeadlineChange(date)}
                    />
                  </MuiPickersUtilsProvider>
                  
                  <FormControl
                    variant="outlined"
                    className="priorityDropdown"
                    required
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Priority
                    </InputLabel>
                    <Select
                      name="priority"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={this.state.priority}
                      onChange={this.inputChangePriority}
                      label="Priority"
                    >
                      {this.state.priorityList.map((d) => {
                        return <MenuItem value={d}>{d}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                  
                  <FormControl
                    variant="outlined"
                    className="priorityDropdown"
                    required
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Assignee
                    </InputLabel>
                    <Select
                      name="assignee"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={this.state.assignee}
                      onChange={this.inputChangeSubordinate}
                      label="Assignee"
                    >
                      {this.state.subordinateList.map((d) => {
                        return <MenuItem value={d}>{d}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>

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
