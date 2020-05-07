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
  connection.query("SELECT dept_id, dept_name FROM DEPARTMENT", async function (
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

// a function to generate the dictionary of users with user_id as the key and dept_id as the value
const getUser = async function () {
    var users = {};
    connection.query("SELECT user_id, full_name, department FROM HRUSER", async function (
      error,
      results,
      fields
    ) {
      if (error) {
        console.log(error);
      } else {
        results = JSON.parse(JSON.stringify(results));
        for (var index = 0; index < results.length; index++) {
          users[results[index].user_id] = [results[index].full_name, results[index].department];
        }
      }
    });
    return users;
};

exports.display = async function (req, res) {
    // getting the dictionaries of users and departments
    var departments = await getDepartment();
    var users = await getUser();

    // querying the database to get the list of pending leave requests
    connection.query("SELECT request_id, requested_by, type FROM LEAVE_REQUEST WHERE status = 'Pending'", async function (error, results, fields) {
        if (error) {
            // informing the client in case of server error
            console.log(error);
            res.send({
              'code' : 500
            })
        } else {
            results = JSON.parse(JSON.stringify(results));
            results.forEach((element) => {
                element.full_name = users[element.requested_by][0];
                element.department_id = users[element.requested_by][1];     // getting the department id of each user who applied for a leave
                element.department = departments[element.department_id];    // getting the department name from the department id
            });

            // sending the results to the client
            console.log(results);
            res.send(results);
        }
    });
};