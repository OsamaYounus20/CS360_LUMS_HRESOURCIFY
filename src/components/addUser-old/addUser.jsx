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
import axios from 'axios';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

class addUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name : '',
      Email: '',
      phoneNumber: '',
      cnic:'',
      dob: '',
      maritalStatus: '',
      bloodGroup: '',
      designation: '',
      department: '',
      nationality: '',
      location: '',
      address: '',
    };
    this.inputChange = this.inputChange.bind(this);
  }
  inputChange(e) {
    this.setState({
        [e.target.name] : e.target.value
    });
}
  componentDidMount(){
    var apiBaseUrl =  "http://localhost:4000/api/";
    var self = this;
    var payload = {
      'Message': 'show depts'
    }
    axios.post(apiBaseUrl+'add_user', payload)
    .then(function(response){
        if (response.data.code === 200) {       
          console.log(response.data)
        }
    })
    return
  }

  onClickAddUser(event) {
    event.preventDefault()
    var apiBaseUrl =  "http://localhost:4000/api/";
    var self = this;
    var payload = {
        'Message': 'add user', 
        'Name': this.state.Name,
        'Email': this.state.Email,
        'phoneNumber' : this.state.phoneNumber,
        'cnic': this.state.cnic,
        'dob': this.state.dob,
        'maritalStatus': this.state.maritalStatus,
        'bloodGroup': this.state.bloodGroup,
        'designation': this.state.designation,
        'department': this.state.department,
        'nationality': this.state.nationality,
        'location': this.state.location,
        'address': this.state.address,
    }

    axios.post(apiBaseUrl+'add_user', payload)
    .then(function(response){
        if (response.data.code === 200) {           //success
            self.props.history.push('/user');
        }
    })
    return
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
                    name="Name"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "Email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "phoneNumber"
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "cnic"
                    id="outlined-basic"
                    label="CNIC"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "dob"
                    id="outlined-basic"
                    label="D.O.B"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "maritalStatus"
                    id="outlined-basic"
                    label="Marital Status"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "bloodGroup"
                    id="outlined-basic"
                    label="Blood Group"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "designation"
                    id="outlined-basic"
                    label="Designation"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "department"
                    id="outlined-basic"
                    label="Department"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "nationality"
                    id="outlined-basic"
                    label="Nationality"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name= "location"
                    id="outlined-basic"
                    label="Location"
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
                  />
                  <TextField
                    name="address"
                    id="outlined-multiline-static"
                    label="Address"
                    rows={4}
                    multiline
                    variant="outlined"
                    defaultValue=""
                    onChange = {this.inputChange}
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
