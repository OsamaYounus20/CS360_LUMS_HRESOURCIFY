const mysql = require("mysql");
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
  // console.log(req.body)
  if (req.body.msg === "deny leave") {
    connection.query("UPDATE LEAVE_REQUEST SET status = 'Rejected' WHERE request_id = ?", [req.body.id], async function(error, results, fields) {
      if (error) {
        console.log(error);
        res.send({
          'code' : 500
        })
      } else {
        res.send({
          'code' : 200
        })
      }
    });
  } else if (req.body.msg === "grant leave") {
    connection.query("UPDATE LEAVE_REQUEST SET status = 'Granted' WHERE request_id = ?", [req.body.id], async function(error, results, fields) {
      if (error) {
        console.log(error);
        res.send({
          'code' : 500
        })
      } else {
        res.send({
          'code' : 200
        })
      }
    });
  }

};