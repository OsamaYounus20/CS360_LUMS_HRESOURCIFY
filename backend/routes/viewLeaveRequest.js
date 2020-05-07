const mysql = require("mysql");

// setting up a connection  with the database
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

// storing these globally since the request comes from one page and the results are to be sent to another
var request_id = 0;
var full_name = "";
var dept_id = 0;
var dept = "";

exports.display = async function (req, res) {
    if (req.body.request_id > 0) {
        // first query from client, sending the data
        request_id = req.body.request_id;
        full_name = req.body.full_name;
        dept_id = req.body.department_id;
        dept = req.body.department;
        // resolving the query 
        res.send({
            'code' : 200
        });
    } else {
        // second query from client, requesting the data
        console.log(request_id);

        // querying the database for the information from the leaves table
        connection.query('SELECT * FROM LEAVE_REQUEST WHERE request_id = ?', [request_id], async function(error, results, fields) {
            if (error) {
                // informing the client in case of server error
                console.log(error);
                res.send({
                    'code': 500
                });
            } else {
                results = JSON.parse(JSON.stringify(results));
                results = results[0];
                results.department = dept;
                results.full_name = full_name;

                // querying the database to get the name of the hod
                connection.query('SELECT full_name FROM HRUSER WHERE user_id = (SELECT hod FROM DEPARTMENT WHERE dept_id = ?)', [dept_id], async function(error, results2, fields) {
                    if (error) {
                        // informing the client in case of server error
                        console.log(error);
                        res.send({
                            'code': 500
                        });
                    } else {
                        // sending the results to the client
                        results.hod = results2[0].full_name;
                        res.send({
                            'code' : 200,
                            'info' : results
                        })
                    }
                });
            }
        });
    }
};