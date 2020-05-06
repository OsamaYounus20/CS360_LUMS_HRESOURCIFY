import React, { Component } from "react";
import "./applyLeaves.css";
import TextField from "@material-ui/core/TextField";
import Navbar from "../userNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
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
      fromDate: new Date(),
      toDate: new Date(),
      type: "",
      reason: "",
      loggedIn: true,
    };
    this.inputChange = this.inputChange.bind(this);
    this.handleDateChange = this.handleFromDateChange.bind(this);
    this.handleDateChange = this.handleToDateChange.bind(this);
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token === null) {
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
      [e.target.name]: e.target.value,
    });
  }
  onClickApply(event) {
    event.preventDefault();
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload = {
      message: "apply leave",
      userId: localStorage.getItem("user_id"),
      currentDate: new Date(),
      fromDate: this.state.fromDate,
      toDate: this.state.toDate,
      type: this.state.type,
      reason: this.state.reason
    };
    axios.post(apiBaseUrl + "apply_leave", payload).then(function (response) {
      if (response.data.code === 200) {
        self.props.history.push("/user_dashboard");
      }
    });
    return;
  }
  onClickCancel(event) {
    this.props.history.push("/user_dashboard");
  }
  render() {
    if (this.state.loggedIn === false) {
      return (
        <Link to="/" style={{ textDecoration: "none" }}>
          You are not LoggedIn( Click Here )
        </Link>
      );
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
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      required
                      autoOk
                      variant="inline"
                      inputVariant="outlined"
                      label="From"
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
                      label="To"
                      format="yyyy/MM/dd"
                      value={this.state.toDate}
                      InputAdornmentProps={{ position: "start" }}
                      onChange={(date) => this.handleToDateChange(date)}
                    />
                  </MuiPickersUtilsProvider>
                  <FormControl
                    required
                    variant="outlined"
                    className="typeDropdown"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Type
                    </InputLabel>
                    <Select
                      name="type"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={this.state.type}
                      onChange={this.inputChange}
                      label="Type"
                    >
                      <MenuItem value={"Medical"}>Medical</MenuItem>
                      <MenuItem value={"Unpaid"}>Unpaid</MenuItem>
                      <MenuItem value={"Maternity"}>Maternity</MenuItem>
                      <MenuItem value={"Sick"}>Sick</MenuItem>
                      <MenuItem value={"Annual"}>Annual</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                  </FormControl>
                  <TextField
                    required
                    name="reason"
                    id="outlined-multiline-static"
                    label="Reason"
                    rows={4}
                    multiline
                    variant="outlined"
                    defaultValue=""
                    onChange={this.inputChange}
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