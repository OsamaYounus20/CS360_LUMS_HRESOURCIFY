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

var request_id = 0;
var full_name = "";
var dept_id = 0;
var dept = "";

exports.display = async function (req, res) {
    if (req.body.request_id > 0) {
        request_id = req.body.request_id;
        full_name = req.body.full_name;
        dept_id = req.body.department_id;
        dept = req.body.department;
        res.send({
            'code' : 200
        });
    } else {
        console.log(request_id);
        connection.query('SELECT * FROM LEAVE_REQUEST WHERE request_id = ?', [request_id], async function(error, results, fields) {
            if (error) {
                console.log(error);
            } else {
                results = JSON.parse(JSON.stringify(results));
                results = results[0];
                results.department = dept;
                results.full_name = full_name;
                connection.query('SELECT full_name FROM HRUSER WHERE user_id = (SELECT hod FROM DEPARTMENT WHERE dept_id = ?)', [dept_id], async function(error, results2, fields) {
                    if (error) {
                        console.log(error);
                    } else {
                        results.hod = results2[0].full_name;
                        res.send({
                            'code' : 200,
                            'info' : results
                        })
                        console.log(results);
                    }
                });
            }
        });
    }
};