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

exports.delete = async function (req, res) {
  // querying the database to delete the specified entry
  connection.query(
    "DELETE FROM HRUSER WHERE user_id = ?",
    [req.body.Id],
    async function (error, results, fields) {
      if (error) {
        // informig the client in case of server error
        console.log(error);
        res.send({
          code: 500,
        });
      } else {
        // informing the client of success
        console.log("deleted user");
        res.send({
          code: 200,
        });
      }
    }
  );
};
