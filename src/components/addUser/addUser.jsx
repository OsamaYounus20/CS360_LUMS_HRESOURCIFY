import React, { Component } from "react";
import "./addUser.css";
import TextField from "@material-ui/core/TextField";
import Navbar from "../adminNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAddUser(event) {
    this.props.history.push("/user");
  }
  onClickCancel(event) {
    this.props.history.push("/user");
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="ContainerPlacing">
          <Container fixed>
            <h1>Add New Employee</h1>
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
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="CNIC"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="D.O.B"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="Marital Status"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="Blood Group"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="Designation"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="Department"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="Nationality"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    defaultValue=""
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Address"
                    rows={4}
                    multiline
                    variant="outlined"
                    defaultValue=""
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

export default addUser;
