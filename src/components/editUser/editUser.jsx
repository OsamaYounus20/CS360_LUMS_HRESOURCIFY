import React from "react";
import "./editUser.css";
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
          <h1>Edit Employee Info</h1>
          <Typography
            component="div"
            style={{ backgroundColor: "#fff", height: "auto" }}
          >
            <form className={classes.root}>
              <div className="myForm">
                <div className={classes.image}>
                  <Avatar
                    alt="Remy Sharp"
                    src={image1}
                    className={classes.large}
                  />
                </div>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                  defaultValue="John Doe"
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  defaultValue="johndoe@johndoe.com"
                />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  defaultValue="090078601"
                />
                <TextField
                  id="outlined-basic"
                  label="CNIC"
                  variant="outlined"
                  defaultValue="12345-12345678-6"
                />
                <TextField
                  id="outlined-basic"
                  label="D.O.B"
                  variant="outlined"
                  defaultValue="19 June 1980"
                />
                <TextField
                  id="outlined-basic"
                  label="Marital Status"
                  variant="outlined"
                  defaultValue="Married"
                />
                <TextField
                  id="outlined-basic"
                  label="Blood Group"
                  variant="outlined"
                  defaultValue="B+"
                />
                <TextField
                  id="outlined-basic"
                  label="Designation"
                  variant="outlined"
                  defaultValue="Manager"
                />
                <TextField
                  id="outlined-basic"
                  label="Department"
                  variant="outlined"
                  defaultValue="HR"
                />
                <TextField
                  id="outlined-basic"
                  label="Nationality"
                  variant="outlined"
                  defaultValue="Pakistan"
                />
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  defaultValue="Karachi Head Office"
                />
                <TextField
                  id="outlined-multiline-static"
                  label="Address"
                  rows={4}
                  multiline
                  variant="outlined"
                  defaultValue="192-B, Bakers Street, Downtown, Karachi"
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
              className={classes.margin}
            >
              Save
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              className={classes.margin}
            >
              Cancel
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
