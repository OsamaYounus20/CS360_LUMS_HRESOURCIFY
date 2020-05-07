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

exports.assign = async function (req, res) {
    if (req.body.message === 'subordinates') {      // if the client requires a list of subordinates for the dropdown menu
        // querying the database to get a list of subordinates
        connection.query('SELECT user_id, full_name FROM HRUSER WHERE manager = ?', [req.body.userId], async function(error, results, fields) {
            if (error) {
                // informing the client in case of a server error
                console.log(error);
                res.send({
                    'code' : 500
                });
            } else {
                // creating both a dictionary of subordinates with full_name as the key and user_id as value, and a list of subordinate names
                // this is done because the client will select the name of the subordinate, but the database requires the id
                results = JSON.parse(JSON.stringify(results));
                var subordinates = {};
                var subordinateNames = [];
                for (var index = 0; index < results.length; index++) {
                    subordinateNames.push(results[index].full_name);
                    subordinates[results[index].full_name] = results[index].user_id;
                }

                // sending both the dictionary and the list to the client
                res.send({
                    'code' : 200,
                    'dict' : subordinates,
                    'list' : subordinateNames
                })
            }
        });
    } else {        // if the client is sending data for assigning a new task
        // substrings of date are taken so they are converted into the format required by the database
        values = [
            req.body.user_id,
            req.body.assigned_to,
            req.body.assigned_on.substring(0,10),
            req.body.deadline.substring(0,10),
            req.body.description,
            req.body.priority
        ]

        // querying the database to insert the new values in the task table
        connection.query("INSERT INTO TASK (assigned_by, assigned_to, assigned_on, deadline, description, priority) VALUES (?, ?, ?, ?, ?, ?)", values, async function(error, results, fields) {
            if (error) {
                // informing the client in case of a server error
                console.log(error);
                res.send({
                    'code' : 500
            })
            } else {
                // informing the client of success
                console.log('assigned')
                res.send({
                    'code' : 200
                })
            }
        });
    }
};