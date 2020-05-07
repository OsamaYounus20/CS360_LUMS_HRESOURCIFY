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

exports.set = async function (req, res) {
  // converting the id to 2000 if admin to query the database
  var user_id = req.body.Id;
  if (user_id === "admin") {
    user_id = 2000;
  }

  // querying the database to get password
  connection.query(
    "SELECT user_password FROM HRUSER WHERE user_id = ?",
    [user_id],
    async function (error, results, fields) {
      if (error) {
        // informing the client in case of a server error
        console.log(error);
        res.send({
          code: 500,
          message: "Server error",
        });
      } else {
        // checking if the password entered by the user in the old password field matches the database
        if (req.body.oldPasswordTyped === results[0].user_password) {
          // if they match, query the database and update to the new password
          connection.query(
            "UPDATE HRUSER SET user_password = ? WHERE user_id = ?",
            [req.body.newPassword, user_id],
            async function (error, results2, fields) {
              if (error) {
                // informing the client in case of a server error
                console.log(error);
                res.send({
                  code: 500,
                  message: "Server error",
                });
              } else {
                // informing the client of success
                console.log("updated");
                res.send({
                  code: 200,
                  message: "Password updated",
                });
              }
            }
          );
        } else {
          // if the passwords do not match, the database is not queried and the client is informed
          console.log("incorrect password");
          res.send({
            code: 401,
            message: "Incorrect password",
          });
        }
      }
    }
  );
};
