import React, { Component } from "react";
import "./toDoTask.css";
import Navbar from "../userNavbar/navbar";
import Form from "./toDoTaskTable";
import { withRouter } from "react-router-dom";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from "react-router-dom";

class toDoTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <h1>To Do Tasks</h1>
          <Form />
        </div>
      </div>
    );
  }
}
export default withRouter(toDoTask);
