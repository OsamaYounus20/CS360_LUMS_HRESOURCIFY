import React, { Component } from "react";
import "./deleteUser.css";
import Navbar from "../adminNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import image1 from "../img/imagetest.jpg";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import { Route, withRouter } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class deleteUser extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onClickEditUser(event) {
    this.props.history.push("/edit_user");
  }
  onClickDeleteUser(event) {
    this.props.history.push("/user");
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="ContainerPlacing">
          <Container fixed>
            <h1>Employee Info</h1>
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto" }}
            >
              <div>
                <div className="pictureBG">
                  <Avatar alt="Remy Sharp" src={image1} className="picture" />
                </div>
                <ul>
                  <li>
                    <div>
                      <h5>
                        <b>Name:</b>
                      </h5>
                      <h4> John Doe</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Email:</b>
                      </h5>
                      <h4> johndoe@johndoe.com</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Phone Number:</b>
                      </h5>
                      <h4> 090078601</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>CNIC:</b>
                      </h5>
                      <h4> 12345-12345678-6</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>D.O.B:</b>
                      </h5>
                      <h4> 19 June 1980</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Marital Status:</b>
                      </h5>
                      <h4> Married</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Blood Group:</b>
                      </h5>
                      <h4> B+</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Designation:</b>
                      </h5>
                      <h4> Manager</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Department:</b>
                      </h5>
                      <h4> HR</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Location:</b>
                      </h5>
                      <h4> Karachi Head Office</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Nationality:</b>
                      </h5>
                      <h4> Pakistan</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Address:</b>
                      </h5>
                      <h4> 192-B, Bakers Street, Downtown, Karachi</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </Typography>
          </Container>
          <div className="centerplacing">
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                size="small"
                color="primary"
                className="margin"
                onClick={this.onClickEditUser.bind(this)}
              >
                Edit
              </Button>

              <Button
                variant="contained"
                size="small"
                color="primary"
                className="margin"
                onClick={this.onClickDeleteUser.bind(this)}
              >
                Delete
              </Button>
            </ThemeProvider>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(deleteUser);
