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
var id = 0;
var departments = {};
connection.query("SELECT * FROM DEPARTMENT", async function (
  error,
  results,
  fields
) {
  if (error) {
    console.log(error);
  } else {
    results = JSON.parse(JSON.stringify(results));
    for (var index = 0; index < results.length; index++) {
      departments[results[index].dept_id] = results[index].dept_name;
    }
  }
});
exports.display = async function (req, res) {
  if (req.body.id > 0) {
    id = req.body.id;
  }
  connection.query(
    "SELECT * FROM HRUSER WHERE user_id = ?",
    [id],
    async function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        results = JSON.parse(JSON.stringify(results));
        results = results[0];
        results.department = departments[results.department];
        results.dob = results.dob.substring(0,10);
        // results.contact_no = results.contact_no.toString();
        // results.address = results.address.toString();
        // results.dob = results.dob.toString();
        // results.marital_status = results.marital_status.toString();
        // results.nationality = results.nationality.toString();
        // results.blood_type = results.nationality.toString();
        // results.location = results.location.toString();
        delete results.user_password;
        delete results.photo;
        delete results.employment_status;
        delete results.presences;
        delete results.absences;

        if (results.manager != null) {
          connection.query('SELECT full_name FROM HRUSER WHERE user_id = ?', [results.manager], async function(error, results2, fields) {
            if (error) {
              console.log(error);
            } else {
              results.manager = results2[0].full_name;
              res.send(results);
            }
          });
        } else {
          results.manager = 'None';
          res.send(results);
        }
      }
    }
  );
};
