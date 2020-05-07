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
  // getting the dictionary of departments
  var departments = await getDepartment();
  
  // querying the database to get the first 11 values from the user table
  connection.query("SELECT user_id, full_name, department, job_title FROM HRUSER LIMIT 11", async function (
    error,
    results,
    fields
  ) {
    if (error) {
      console.log(error);
    } else {
      results = JSON.parse(JSON.stringify(results));
      results.shift();    // deleting the entry for admin from the list
      results.forEach((element) => {
        element.user_id = element.user_id.toString();
        element.department = departments[element.department];   // getting the name of the department from the dictionary
      });

      // sending the list back to the client
      console.log(results);
      res.send(results);
    }
  });
};
