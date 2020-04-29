import React, { Component } from "react";
import "./clock.css";

/*
code Borrowed from 
https://github.com/anil-sidhu/reactjs/blob/master/time_clock_in_react_js.js
*/
class clock extends Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  currentTime() {
    this.setState({
      time: new Date(),
    });
  }
  componentWillMount() {
    setInterval(() => this.currentTime(), 1000);
  }

  render() {
    return (
      <React.Fragment>
        <div className="clockBackground">
          <h1 className="clockText">
            {
              this.state.time.toLocaleTimeString(navigator.language, {
                hour: "2-digit",
                minute: "2-digit",
              })
              //   .replace(/(:\d{2}| [AP]M)$/, "")
            }
          </h1>
          <h1 className="dateText">
            {
              this.state.time.toLocaleDateString(navigator.language, {})
              //   .replace(/(:\d{2}| [AP]M)$/, "")
            }
          </h1>
        </div>
      </React.Fragment>
    );
  }
}

export default clock;