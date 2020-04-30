import React, { Component } from "react";
import "./department.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import Navbar from "../adminNavbar/navbar";
import Form from "../departmentTable/departmentTable";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
class department extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickAddUser(event) {
    this.props.history.push("/add_department");
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
              Add Department
            </Button>
          </ThemeProvider>
          <Form />
        </div>
      </div>
    );
  }
}
export default department;
