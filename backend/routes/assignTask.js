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

exports.assign = async function (req, res) {
    if (req.body.message === 'subordinates') {
        console.log(req.body);
        connection.query('SELECT user_id, full_name FROM HRUSER WHERE manager = ?', [req.body.userId], async function(error, results, fields) {
            if (error) {
                console.log(error);
                res.send({
                    'code' : 500
                });
            } else {
                console.log(results);
                results = JSON.parse(JSON.stringify(results));
                var subordinates = {};
                var subordinateNames = [];
                for (var index = 0; index < results.length; index++) {
                    subordinateNames.push(results[index].full_name);
                    subordinates[results[index].full_name] = results[index].user_id;
                }
                console.log('list of subordinates', subordinateNames);
                res.send({
                    'code' : 200,
                    'dict' : subordinates,
                    'list' : subordinateNames
                })
            }
        });
    } else {
        values = [
            req.body.user_id,
            req.body.assigned_to,
            req.body.assigned_on.substring(0,10),
            req.body.deadline.substring(0,10),
            req.body.description,
            req.body.priority
        ]
        console.log(values);

        connection.query("INSERT INTO TASK (assigned_by, assigned_to, assigned_on, deadline, description, priority) VALUES (?, ?, ?, ?, ?, ?)", values, async function(error, results, fields) {
            if (error) {
                console.log(error);
                res.send({
                    'code' : 500
            })
            } else {
                console.log('assigneeeeeeeeeeedddddddddddddd')
                res.send({
                    'code' : 200
                })
            }
        });
    }
};