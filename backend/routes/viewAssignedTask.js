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
    // querying the database to get the list of tasks assigned by the client
    connection.query('SELECT * FROM TASK WHERE assigned_by = ?', [req.body.id], async function(error, results, fields) {
        if (error) {
            // informing the client in case of server error
            console.log(error);
            res.send({
                'code': 500,
                'message': 'Server error'
            });
        } else {
            results = JSON.parse(JSON.stringify(results));

            // querying the database to get the list of users to make a dictionary for users
            connection.query('SELECT user_id, full_name FROM HRUSER', async function(error, results2, fields) {
                if (error) {
                    // informing the client in case of server error
                    console.log(error);
                    res.send({
                        'code': 500,
                        'message': 'Server error'
                    });
                } else {
                    results2 = JSON.parse(JSON.stringify(results2));

                    // creating a dictionary for users with user_id as the key and full_name as the value
                    var users = {};
                    for (var index = 0; index < results2.length; index++) {
                        users[results2[index].user_id] = results2[index].full_name;
                    }
  
                    // substrings are taken in order to display the dates in a proper format
                    results.forEach(element => {
                        element.deadline = element.deadline.substring(0,10);
                        element.assigned_on = element.assigned_on.substring(0,10);
                        element.assigned_to = users[element.assigned_to];       // getting the name of the user from the dictionary
                    });

                    // sending the list to the client
                    res.send({
                        'code': 200,
                        'data': results
                    });
                }
            });
        }
    });
};