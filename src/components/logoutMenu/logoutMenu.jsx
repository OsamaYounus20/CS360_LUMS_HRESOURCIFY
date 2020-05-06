import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseLogout = this.handleCloseLogout.bind(this);
    this.handleAccountSettings = this.handleAccountSettings.bind(this);
  }
  handleAccountSettings = (event) => {
    this.setState({
      anchorEl: null,
    });
  };
  handleCloseLogout = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
    localStorage.removeItem("token");
  };
  handleClick = (event) => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };
  handleClose = (event) => {
    this.setState({
      anchorEl: null,
    });
  };
  render() {
    return (
      <div>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          keepMounted
          open={Boolean(this.state.anchorEl)}
          onClose={this.handleClose}
        >
          <Link to="/account_settings" style={{ textDecoration: "none" }}>
            <MenuItem onClick={this.handleAccountSettings}>
              Account Settings
            </MenuItem>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <MenuItem onClick={this.handleCloseLogout}>Logout</MenuItem>
          </Link>
        </Menu>
      </div>
    );
  }
}
export default Logout;
