const mysql = require("mysql");

// setting up a connection with the database
const connection = mysql.createConnection({
  host: "database-hrms1.c0sl004lok1n.eu-west-2.rds.amazonaws.com",
  user: "Aleeha",
  password: "Yehmeridbhai",
  port: "3306",
  database: "HRMS",
});

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected!");
});

exports.grantDeny = async function (req, res) {
  if (req.body.msg === "deny leave") {        // if the client wants to reject the leave
    // querying the database to update the status of that entry to 'Rejected'
    connection.query("UPDATE LEAVE_REQUEST SET status = 'Rejected' WHERE request_id = ?", [req.body.id], async function(error, results, fields) {
      if (error) {
        // informing the client in case of server error
        console.log(error);
        res.send({
          'code' : 500
        })
      } else {
        // informing the client of success
        res.send({
          'code' : 200
        })
      }
    });
  } else if (req.body.msg === "grant leave") {    // if the client wants to grant the leave
    // querying the database to update the status of that entry to 'Granted'
    connection.query("UPDATE LEAVE_REQUEST SET status = 'Granted' WHERE request_id = ?", [req.body.id], async function(error, results, fields) {
      if (error) {
        // informing the client in case of server error
        console.log(error);
        res.send({
          'code' : 500
        })
      } else {
        // informing the client of success
        res.send({
          'code' : 200
        })
      }
    });
  }
};