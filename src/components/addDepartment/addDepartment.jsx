import React, { Component } from "react";
import "./addDepartment.css";
import TextField from "@material-ui/core/TextField";
import Navbar from "../adminNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import axios from "axios";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class addDepartment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Email: "",
      ExtNO: "",
      HeadofDept: "",
      hodID: "",
    };
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onClickAddUser(event) {
    event.preventDefault();
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload = {
      name: this.state.Name,
      email: this.state.Email,
      extNo: this.state.ExtNO,
      hod: this.state.HeadofDept,
      hodID: this.state.hodID,
    };
    axios.post(apiBaseUrl + "add_dept", payload).then(function (response) {
      if (response.data.code === 200) {
        // successful login
        self.props.history.push("/department");
      } else if (response.data.code === 400) {
        // hod id name do not match
      }
    });
    return;
  }
  onClickCancel(event) {
    this.props.history.push("/department");
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="ContainerPlacing">
          <Container fixed>
            <h1>Add New Department</h1>
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto" }}
            >
              <form>
                <div className="formContainer">
                  <TextField
                    required
                    name="Name"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    defaultValue=""
                    margin="auto"
                    onChange={this.inputChange}
                  />
                  <TextField
                    required
                    name="Email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    defaultValue=""
                    onChange={this.inputChange}
                  />
                  <TextField
                    required
                    name="ExtNO"
                    id="outlined-basic"
                    label="Extension Code"
                    variant="outlined"
                    defaultValue=""
                    onChange={this.inputChange}
                  />
                  <TextField
                    required
                    name="HeadofDept"
                    id="outlined-basic"
                    label="HOD Name"
                    variant="outlined"
                    defaultValue=""
                    onChange={this.inputChange}
                  />
                  {
                    <TextField
                      required
                      name="hodID"
                      id="outlined-basic"
                      label="HOD ID"
                      variant="outlined"
                      defaultValue=""
                      onChange={this.inputChange}
                    />
                  }{" "}
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
                onClick={this.onClickAddUser.bind(this)}
              >
                Add
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

export default addDepartment;
