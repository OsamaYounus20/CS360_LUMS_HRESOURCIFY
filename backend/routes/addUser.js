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

// a function to generate a random password of length 25 for the new employee
function generatePassword() {
  var password = "";
  var characterset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,/;:@";
  var length = characterset.length;
  for (var i = 0; i < 25; i++) {
    password += characterset[Math.floor(Math.random() * length)];
  }
  return password;
}

exports.add = async function (req, res) {
  if (req.body.Message === "add user") {
    // if the client sends data to insert a new value in the user table in the database
    user_password = generatePassword(); // generating a password for the new user
    values = [
      req.body.Name,
      user_password,
      req.body.Email,
      req.body.phoneNumber,
      req.body.cnic,
      req.body.dob,
      req.body.maritalStatus,
      req.body.bloodGroup,
      req.body.designation,
      req.body.department,
      req.body.nationality,
      req.body.location,
      req.body.address,
      req.body.manager,
      req.body.gender,
    ];

    // querying the database to insert the values into the user table
    connection.query(
      "INSERT INTO HRUSER (full_name, user_password, email, contact_no, cnic, dob, marital_status, blood_type, job_title, department, nationality, location, address, manager, gender) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
      values,
      async function (error, results, fields) {
        if (error) {
          // informing the client in case of a server error
          console.log(error);
          res.send({
            code: 500,
            success: "Server error",
          });
        } else {
          // informing the client of success
          console.log("Employee inserted successfully");
          res.send({
            code: 200,
            success: "Added successfully",
          });
        }
      }
    );
  } else {
    // if the client requests a list of departments for the dropdown menu
    // querying the database to get all departments
    connection.query(
      "SELECT dept_id, dept_name FROM DEPARTMENT",
      async function (error, results, fields) {
        if (error) {
          // informing the client in case of server error
          console.log(error);
          res.send({
            code: 500,
            success: "Server error",
          });
        } else {
          // creating a dictionary with department name as the key and department id as the value
          // this is done because the client enters the name of the department, but the database requires the id
          var departments = {};
          results = JSON.parse(JSON.stringify(results));
          for (var index = 0; index < results.length; index++) {
            departments[results[index].dept_name] = results[index].dept_id;
          }

          // sending the dictionary of departments to the client
          res.send({
            code: 200,
            dept: departments,
          });
        }
      }
    );
  }
};
