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

exports.display = async function (req, res) {
  // querying the database to get the list of department
  connection.query(
    "SELECT requested_on, start_date, end_date, type, status FROM LEAVE_REQUEST WHERE requested_by = ?",
    [req.body.id],
    async function (error, results, fields) {
      if (error) {
        // informing the client in case of an error
        console.log(error);
        res.send({
          code: 500,
          success: "Server error",
        });
      } else {
        // converting the rowdatapacket to a list of dictionaries and sending it to the client
        results = JSON.parse(JSON.stringify(results));
        results.forEach((element) => {
          element.requested_on = element.requested_on.substring(0, 10);
          element.start_date = element.start_date.substring(0, 10);
          element.end_date = element.end_date.substring(0, 10);
        });
        res.send(results);
      }
    }
  );
};
