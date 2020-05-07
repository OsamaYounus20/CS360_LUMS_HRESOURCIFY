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

var id = 0;

// a function to generate the dictionary of departments with dept_id as the key and dept_name as the value
const getDepartment = async function () {
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
  return departments;
};

exports.display = async function (req, res) {
  if (req.body.id > 0) {
    // getting the id of the user from the first query from the client
    id = req.body.id;
  }

  // getting the dictionary of departments
  var departments = await getDepartment();
  
  // querying the database to get the information from the user table
  connection.query(
    "SELECT * FROM HRUSER WHERE user_id = ?",
    [id],
    async function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        // formatting the results properly
        results = JSON.parse(JSON.stringify(results));
        results = results[0];
        results.department = departments[results.department];
        results.dob = results.dob.substring(0,10);
        delete results.user_password;
        delete results.photo;
        delete results.employment_status;
        delete results.presences;
        delete results.absences;

        // querying the database to get the name of the manager
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
          // sending the results to the client
          results.manager = 'None';
          res.send(results);
        }
      }
    }
  );
};
