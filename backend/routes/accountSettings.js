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

exports.set = async function (req, res) {
  var user_id = req.body.Id;
  if (user_id === "admin") {
    user_id = 2000;
  }
  connection.query(
    "SELECT user_password FROM HRUSER WHERE user_id = ?",
    [user_id],
    async function (error, results, fields) {
      if (error) {
        console.log(error);
        res.send({
          code: 500,
          message: "Server error",
        });
      } else {
        if (req.body.oldPasswordTyped === results[0].user_password) {
          connection.query(
            "UPDATE HRUSER SET user_password = ? WHERE user_id = ?",
            [req.body.newPassword, user_id],
            async function (error, results2, fields) {
              if (error) {
                console.log(error);
                res.send({
                  code: 500,
                  message: "Server error",
                });
              } else {
                console.log("updated");
                res.send({
                  code: 200,
                  message: "Password updated",
                });
              }
            }
          );
        } else {
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
