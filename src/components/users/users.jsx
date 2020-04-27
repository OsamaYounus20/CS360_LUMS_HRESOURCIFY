import React, { Component } from "react";
import "./users.css";
import { makeStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import Navbar from "../adminNavbar/navbar";
// import logo from "./img/pngformat.png";
import Form from "../form/form";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
// export default function AddUser1() {
// const classes = useStyles();
class user extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAddUser(event) {
    this.props.history.push("/add_user");
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="formplacing">
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className="useStyle"
              onClick={this.onClickAddUser.bind(this)}
            >
              Add User
            </Button>
          </ThemeProvider>
          <Form />
        </div>
      </div>
    );
  }
}
export default user;
