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
exports.apply = async function (req, res) {
    values = [
        req.body.userId,
        req.body.currentDate.substring(0,10),
        req.body.fromDate.substring(0,10),
        req.body.toDate.substring(0,10),
        req.body.reason,
        req.body.type
    ]
    connection.query('INSERT INTO LEAVE_REQUEST (requested_by, requested_on, start_date, end_date, reason, type) VALUES (?, ?, ?, ?, ?, ?)', values, async function(error, results, fields) {
        if (error) {
            console.log(error);
            res.send({
                'code': 500,
                'message': 'Server error'
            });
        } else {
            console.log('applied');
            res.send({
                'code': 200,
                'message': 'Applied successfully'
            });
        }
    });
}