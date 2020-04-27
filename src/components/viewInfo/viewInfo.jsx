import React from "react";
import "./viewInfo.css";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../userNavbar/navbar";
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
      background: "#f50057",
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
          <h1>Personal Info</h1>
          <Typography
            component="div"
            style={{ backgroundColor: "#fff", height: "auto" }}
          >
            <form className={classes.root}>
              <div>
                <div className={classes.image}>
                  <Avatar
                    alt="Remy Sharp"
                    src={image1}
                    className={classes.large}
                  />
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
              Edit
            </Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}
