import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Route, withRouter } from "react-router-dom";

const columns = [
  { id: "user_id", label: "ID", minWidth: 170 },
  { id: "full_name", label: "Name", minWidth: 170 },
  {
    id: "department",
    label: "Department",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString(),
  },
  {
    id: "job_title",
    label: "Job Title",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString(),
  },
];

function createData(id, name, department, job) {
  return [id, name, department, job];
}
// var temp = []
// function getUsersData() {
//   var apiBaseUrl =  "http://3.8.136.131:4000/api/";
//   var temp = [];
//   var self = this;
//   var payload = {
//       'msg' : 'Send Data'
//   }
// axios.post(apiBaseUrl+'users', payload)
// .then(function(response){

//   response.data.forEach(data =>{
//     temp.push(createData(data.user_id,data.full_name,data.department,data.job_title))
//   })
// })
// return temp
// }

// const rows = [
//   createData ('A007', 'Ramasundar', 'Marketing', 'Senior Manager'),
//   createData ('A003', 'Alex ', 'Marketing', 'Manager'),
//   createData ('A008', 'Alford', 'Marketing', 'Employee'),
//   createData ('A011', 'Ravi Kumar', 'Marketing', 'Employee'),
//   createData ('A010', 'Santakumar', 'IT', 'Manager'),
//   createData ('A012', 'Lucida', 'HR', 'Senior Manager'),
//   createData ('A005', 'Anderson', 'HR', 'Manager'),
//   createData ('A001', 'Subbarao', 'IT', 'Employee'),
//   createData ('A002', 'Mukesh', 'Sales', 'Manager'),
//   createData ('A006', 'McDen', 'Sales', 'Manager'),
// ];

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
//   container: {
//     maxHeight: 440,
//   },
// });

class table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
    };
    this.onClickAddUser = this.onClickAddUser.bind(this);
  }
  onClickAddUser(row){
    var apiBaseUrl =  "http://3.8.136.131:4000/api/";
    var self = this;
    var payload = {
        id : row.user_id
    }
    axios.post(apiBaseUrl+'view_user_info', payload)
    .then(function(response){
      // console.log(response.data);            
    })
    this.props.history.push("/view_user_info");
  }
  componentDidMount() {
    var apiBaseUrl = "http://3.8.136.131:4000/api/";
    var self = this;
    var payload = {
      msg: "Send Data",
    };
    axios.post(apiBaseUrl + "users", payload).then(function (response) {
      self.setState({
        rows: response.data,
      });
    });
    return;
  }
  render() {
    return (
      <Paper>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.rows.map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    onClick={(e) => this.onClickAddUser(row)}
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}
export default withRouter(table);