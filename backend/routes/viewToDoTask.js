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

exports.display = async function (req, res) {
    connection.query('SELECT * FROM TASK WHERE assigned_to = ?', [req.body.id], async function(error, results, fields) {
        if (error) {
            console.log(error);
            res.send({
                'code': 500,
                'message': 'Server error'
            });
        } else {
            results = JSON.parse(JSON.stringify(results));
            results.forEach(element => {
                element.deadline = element.deadline.substring(0,10);
                element.assigned_on = element.assigned_on.substring(0,10);
            });
            res.send({
                'code': 200,
                'data': results
            });
            // connection.query('SELECT user_id, full_name FROM HRUSER', async function(error, results2, fields) {
            //     if (error) {
            //         console.log(error);
            //         res.send({
            //             'code': 500,
            //             'message': 'Server error'
            //         });
            //     } else {
            //         results2 = JSON.parse(JSON.stringify(results2));
            //         var users = {};
            //         for (var index = 0; index < results2.length; index++) {
            //             users[results2[index].user_id] = results2[index].full_name;
            //         }
            //     }
            // });
        }
    });
};