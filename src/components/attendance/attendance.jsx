
import React, { Component } from "react";
import "./attendance.css";
import Navbar from "../userNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { createMuiTheme} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
class Attendance extends Component {
  constructor(props) {
    super(props);
    this.state = {
        attendance: 330,
        leaves: 25,
        absences: 10,
        loggedIn: true,
    };
  }

  render() {
    if(this.state.loggedIn === false) {
      return <Link to="/" style={{ textDecoration: "none" }}>You are not LoggedIn( Click Here )</Link>
    }
    return (
      <div>
        <Navbar />
        <div className="ContainerPlacing">
          <Container fixed>
            <h1>Attendance</h1>
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto", marginTop: "50px"}}
            >
              <div>
                <ul>
                  <li>
                    <div>
                      <h5>
                        <b>Attendence:</b>
                      </h5>
                      <h4> {this.state.attendance}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Absences:</b>
                      </h5>
                      <h4> {this.state.absences}</h4>
                    </div>
                  </li>
                  <li>
                    <div>
                      <h5>
                        <b>Leaves:</b>
                      </h5>
                      <h4>{this.state.leaves}</h4>
                    </div>
                  </li>
                </ul>
              </div>
            </Typography>
          </Container>
        </div>
      </div>
    );
  }
}
export default Attendance;