import React, { Component } from "react";
import "./viewAssignedTask.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import Navbar from "../userNavbar/navbar";
import Form from "./viewAssignedTaskTable";
import { Route, withRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
const theme = createMuiTheme({
    palette: {
      primary: green,
    },
    style:{
        height: "auto",
        margin: "auto",
    }
  });

class viewAssignedTask extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    return (
      <div>
        <Navbar />
        
        <div className="formplacing">
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
        <h1>View Assiged Tasks</h1>
          <Form />
        </div>
      </div>
    );
  }
}
export default withRouter(viewAssignedTask);
