import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import { Route , withRouter} from 'react-router-dom';



const columns = [
  { id: 'dept_id', label: 'ID', minWidth: 170, align: 'center'},
  { id: 'dept_name', label: 'Name', minWidth: 170, align: 'center'},
];

class departmentTable extends Component {
    constructor(props){
      super(props);
      this.state = {
        rows : [],
      };
      this.onClickDepartmentRow=this.onClickDepartmentRow.bind(this)
    }
    onClickDepartmentRow(row){
      var apiBaseUrl =  "http://localhost:4000/api/";
      var self = this;
      var payload = {
          id : row.dept_id
      }
      axios.post(apiBaseUrl+'view_dept_info', payload)
      .then(function(response){
        // console.log(response.data);            
      })
      this.props.history.push("/view_department_info");
    }
    componentDidMount() {
      var apiBaseUrl =  "http://localhost:4000/api/";
      var self = this;
      var payload = {
          'msg' : 'Send Data'
      }
      axios.post(apiBaseUrl+'departments', payload)
      .then(function(response){
       
        self.setState({
          rows : response.data,
        })
              
      })
      return 
  }
      render() {
            return (
              <Paper >
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
                    <TableBody >
                      {this.state.rows.map((row) => {
                        return (
                          
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={(e) => this.onClickDepartmentRow(row)} >
                            {columns.map((column) => {
                              const value = row[column.id];
                              return (
                                
                                <TableCell key={column.id} align={column.align} >
                                  {column.format && typeof value === 'number' ? column.format(value) : value}
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
  export default withRouter(departmentTable);