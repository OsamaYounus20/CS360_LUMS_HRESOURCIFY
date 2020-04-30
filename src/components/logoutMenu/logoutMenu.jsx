import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class Logout extends Component {
    constructor(props){
        super(props)
        this.state = {
            anchorEl: null,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleCloseAccount = this.handleCloseAccount.bind(this);
        this.handleCloseProfile = this.handleCloseProfile.bind(this);
        this.handleCloseLogout = this.handleCloseLogout.bind(this);
    }
    handleCloseProfile = (event) => {
            this.setState({
                anchorEl : event.currentTarget,
            });
    }
    handleCloseAccount = (event) => {
        this.setState({
            anchorEl : event.currentTarget,
        });
    }
    handleCloseLogout = (event) => {
        this.setState({
            anchorEl : event.currentTarget,
        });
    }
    handleClick = (event) => {
        this.setState({
            anchorEl : event.currentTarget,
        });
    }
  handleClose = (event) => {
    this.setState({
        anchorEl : null,
    });
  }
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
        <MenuItem onClick={this.handleCloseProfile}>Profile</MenuItem>
        <MenuItem onClick={this.handleCloseAccount}>My account</MenuItem>
        <MenuItem onClick={this.handleCloseLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
  }
}
export default Logout;