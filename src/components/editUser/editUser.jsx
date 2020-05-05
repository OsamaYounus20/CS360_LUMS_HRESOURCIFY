import React, { Component } from "react";
import "./editUser.css";
import TextField from "@material-ui/core/TextField";
import Navbar from "../adminNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import image1 from "../img/imagetest.jpg";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import axios from 'axios';
import { Link } from "react-router-dom";

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class editUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentDictionary: {},
      departmentList: [],
      department: "",
      user_id: "",
      name: "",
      phone: "",
      address: "",
      email: "",
      status : "",
      department: "",
      designation:"",
      location:"" ,
      nationality: "",
      bloodType: "",
      manager: "",
      loggedIn: true,
    };
    this.inputChange = this.inputChange.bind(this);
    this.inputChangeDepartment = this.inputChangeDepartment.bind(this);
  }
  inputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  inputChangeDepartment(e) {
    this.setState({
      department: this.state.departmentDictionary[e.target.value]
    });
  }
  onClickSave(event) {
    var apiBaseUrl = "http://localhost:4000/api/";

    var payload = {
      Message: "updated info",
      Id: this.state.user_id,
      Name: this.state.name,
      Email: this.state.email,
      phoneNumber: this.state.phone,
      maritalStatus: this.state.status,
      bloodGroup: this.state.bloodType,
      designation: this.state.designation,
      department: this.state.department,
      nationality: this.state.nationality,
      location: this.state.location,
      address: this.state.address,
      manager: this.state.manager
    };

    axios.post(apiBaseUrl + 'edit_user_info', payload).then(function(response) {
      // console.log(response.data);
    });
    this.props.history.push("/user");
  }
  onClickCancel(event) {
    this.props.history.push("/user");
  }
  componentDidMount() {
    const token = localStorage.getItem("token");
    if(token === null) {
      this.setState({
        loggedIn: false,
      });
    }
    var apiBaseUrl = "http://localhost:4000/api/";
    var self = this;
    var payload = {
      Message: "give user info",
      Id: -1
    };
    axios.post(apiBaseUrl + 'edit_user_info', payload).then(function(response) {
      console.log(response.data);
      var tempdept = Object.keys(response.data.dept);
      self.setState({
        user_id: response.data.user.user_id,
        name: response.data.user.full_name.toString(),
        phone: response.data.user.contact_no.toString(),
        address: response.data.user.address.toString(),
        email: response.data.user.email.toString(),
        status: response.data.user.marital_status.toString(),
        department: response.data.user.department,
        designation: response.data.user.job_title.toString(),
        location: response.data.user.location.toString(),
        nationality: response.data.user.nationality.toString(),
        manager: response.data.user.manager,
        bloodType: response.data.user.blood_type.toString(),
        departmentDictionary: response.data.dept,
        departmentList: tempdept
      });
    });
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
            <h1>Edit Employee Info</h1>
            <Typography
              component="div"
              style={{ backgroundColor: "#fff", height: "auto" }}
            >
              <form className="formContainer">
                <div className="myForm">
                  <div>
                    <Avatar alt="Remy Sharp" src={image1} className="picture" />
                  </div>
                  <TextField
                    name = "name"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    helperText={this.state.name}
                    onChange={this.inputChange}                 
                  />
                  <TextField
                    name="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    helperText={this.state.email}
                    onChange={this.inputChange}
                  />
                  <TextField
                    name="phone"
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    helperText={this.state.phone}
                    onChange={this.inputChange}
                  />
                  <TextField
                    name="status"
                    id="outlined-basic"
                    label="Marital Status"
                    variant="outlined"
                    helperText={this.state.status}
                    onChange={this.inputChange}
                  />
                  <TextField
                    name="bloodType"
                    id="outlined-basic"
                    label="Blood Group"
                    variant="outlined"
                    helperText={this.state.bloodType}
                    onChange={this.inputChange}
                  />
                  <TextField
                    name="designation"
                    id="outlined-basic"
                    label="Designation"
                    variant="outlined"
                    helperText={this.state.designation}
                    onChange={this.inputChange}
                  />
                  <FormControl
                    variant="outlined"
                    className="departmentDropdown"
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Department
                    </InputLabel>
                    <Select
                      name="department"
                      labelId="demo-simple-select-outlined-label"
                      id="demo-simple-select-outlined"
                      value={this.state.department}
                      onChange={this.inputChangeDepartment}
                      label="Department"
                    >
                      {this.state.departmentList.map((d) => {
                        return <MenuItem value={d}>{d}</MenuItem>;
                      })}
                    </Select>
                  </FormControl>
                  <TextField
                    name = "manager"
                    id="outlined-basic"
                    label="Manager"
                    variant="outlined"
                    helperText={this.state.manager}
                    onChange={this.inputChange}                 
                  />
                  <TextField
                    name="nationality"
                    id="outlined-basic"
                    label="Nationality"
                    variant="outlined"
                    helperText={this.state.nationality}
                    onChange={this.inputChange}
                  />
                  <TextField
                    name="loc"
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    helperText={this.state.location}
                    onChange={this.inputChange}
                  />
                  <TextField
                    name="address"
                    id="outlined-multiline-static"
                    label="Address"
                    rows={4}
                    multiline
                    variant="outlined"
                    helperText={this.state.address}
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
                onClick={this.onClickSave.bind(this)}
              >
                Save
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
export default editUser;
