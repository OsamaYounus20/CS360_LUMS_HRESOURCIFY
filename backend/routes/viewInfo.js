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
  departments = await getDepartment();

  // querying the database to get the information from the user table
  connection.query(
    "SELECT * FROM HRUSER WHERE user_id = ?",
    [req.body.id],
    async function (error, results, fields) {
      if (error) {
        // informing the client in case of server error
        console.log(error);
        res.send({
          'code': 500
        });
      } else {
        // sending the results to the client in a proper format
        results = JSON.parse(JSON.stringify(results));
        results.forEach((element) => {
          element.user_id = element.user_id.toString();
          element.department = departments[element.department];
          element.contact_no = element.contact_no.toString();
          element.address = element.address.toString();
          element.dob = element.dob.toString();
          element.gender = element.gender.toString();
          element.marital_status = element.marital_status.toString();
          element.nationality = element.nationality.toString();
          element.blood_type = element.nationality.toString();
          element.location = element.location.toString();
          delete element.manager;
          delete element.user_password;
          delete element.photo;
          delete element.employment_status;
          delete element.presences;
          delete element.absences;
        });
        console.log(results);
        res.send(results);
      }
    }
  );
};
