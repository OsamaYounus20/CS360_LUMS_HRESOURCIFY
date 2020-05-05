import React, { Component } from "react";
import "./login.css";
import logo from "./img/pngformat.png";
import axios from "axios";
import { Link } from "react-router-dom";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: "",
      Password: "",
      errorMessage: "",
      user: {
        userID: "",
        userType: "",
      },
      loggedIn: false,
    };
    // let myuser = new userclass()
    this.handleClick = this.handleClick.bind(this);
    this.inputChange = this.inputChange.bind(this);
  }
  componentDidMount() {
    const token = localStorage.getItem("token")
    if(token === null) {
      this.setState({loggedIn: false})
    } else {
      this.setState({loggedIn: true})
    }
  }
  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleClick(event) {
    event.preventDefault();
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload = {
      Username: this.state.Username,
      Password: this.state.Password,
    };
    axios.post(apiBaseUrl + "login", payload).then(function (response) {
      if (response.data.code === 200) {
        // successful login
        if (response.data.user === "admin") {
          localStorage.setItem("token","LoggedInAsAdmin")
          localStorage.setItem("user_id",self.state.Username)
          self.setState({loggedIn: true})
          self.props.history.push("/admin_dashboard");
        } else if (response.data.user === "employee") {
          localStorage.setItem("token","LoggedInAsEmployee")
          localStorage.setItem("user_id",self.state.Username)
          self.setState({loggedIn: true})
          self.props.history.push("/user_dashboard");
        }
      } else if (response.data.code === 204) {
        self.setState({
          errorMessage: "Invalid Email or Password",
        }); // incorrect email or password
      } else if (response.data.code === 206) {
        self.setState({
          errorMessage: "Employee Does Not Exist",
        }); // employee does not exist
      }
    });
    return;
  }
  render() {
    if(this.state.loggedIn === true){
      const token = localStorage.getItem("token")
        if(token === "LoggedInAsAdmin") {
          return <Link to="/admin_dashboard" style={{ textDecoration: "none" }}>You are already Logged In</Link>
        } else {
          return <Link to="/user_dashboard" style={{ textDecoration: "none" }}>You are already Logged In</Link>
        }
    }
    return (
      <div className="container-login">
        <div className="wrap-login">
          <img src={logo} alt="logo" />
          <div id="CUTTING_EDGE__SOLUTION__to_all">
            <h2>
              CUTTING-EDGE
              <br />
              SOLUTION
            </h2>
            <h1>to all your </h1>
            <h2>HR</h2>
            <h1>needs</h1>
          </div>
          <form className="login-form validate-form">
            <span className="login-form-title">Login</span>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="text"
                name="Username"
                placeholder="Username"
                required
                onChange={this.inputChange}
              ></input>
            </div>

            <div className="wrap-input100 validate-input">
              <input
                className="input100"
                type="password"
                name="Password"
                placeholder="Password"
                required
                onChange={this.inputChange}
              ></input>
            </div>
            <div style={{ fontSize: 12, color: "red", textAlign: "center" }}>
              {this.state.errorMessage}
            </div>
            <div className="container-login-form-btn">
              <button className="login-form-btn" onClick={this.handleClick}>
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Counter;
