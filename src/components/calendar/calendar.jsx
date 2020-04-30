import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Navbar from "../userNavbar/navbar";
import Calendar from 'react-calendar';
import dateFns from "date-fns";
import 'react-calendar/dist/Calendar.css';
import './calendar.css';
import useState from "react"; 


class calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: new Date(),
        event: '',
    };
    this.onChangedate = this.onChangedate.bind(this);
  }
  onChangedate= date => {
      this.setState({date})
      this.setState({
          event: '*event on this Date*',
      });
  };
  render() {
    return (
      <React.Fragment>
          <Navbar />
        <div className="placing">
        <Calendar onChange={this.onChangedate} value={this.state.date}/> 
        </div>
        <div style={{ fontSize:15 , color: "blue", textAlign: "center", marginTop: "20px"}}>
            {this.state.event}
        </div>
      </React.Fragment>
    );
  }
}
export default calendar;