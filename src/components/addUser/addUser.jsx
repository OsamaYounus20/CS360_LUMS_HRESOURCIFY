import React from "react";
import "./addUser.css";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../adminNavbar/navbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Avatar from "@material-ui/core/Avatar";
import image1 from "../img/imagetest.jpg";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  image: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(2),
    },
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
export default function FormPropsTextFields() {
  const classes = useStyles();

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
            <form className={classes.root}>
              <div>
                <div className={classes.image}>
                  <Avatar
                    alt="Remy Sharp"
                    
                    className={classes.large}
                  />
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
            <Link to = '/user'>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.margin}
            >
              Add
            </Button>
            </Link>
            
            
            <Link to ='/user'>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.margin}
            >
              
              
              Cancel
           
              
            </Button>
            </Link>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
