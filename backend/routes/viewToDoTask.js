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

exports.display = async function (req, res) {
    // querying the database to get the list of tasks assigned to the client
    connection.query('SELECT * FROM TASK WHERE assigned_to = ?', [req.body.id], async function(error, results, fields) {
        if (error) {
            // informing the client in case of server error
            console.log(error);
            res.send({
                'code': 500,
                'message': 'Server error'
            });
        } else {
            // sending the results to the client in proper format
            results = JSON.parse(JSON.stringify(results));
            
            // substrings of dates are taken to display them properly
            results.forEach(element => {
                element.deadline = element.deadline.substring(0,10);
                element.assigned_on = element.assigned_on.substring(0,10);
            });
            res.send({
                'code': 200,
                'data': results
            });
        }
    });
};