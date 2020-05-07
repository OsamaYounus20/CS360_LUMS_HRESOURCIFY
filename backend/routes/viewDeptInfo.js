const mysql = require('mysql');

// setting up a connection with the database
const connection = mysql.createConnection({
    host: 'database-hrms1.c0sl004lok1n.eu-west-2.rds.amazonaws.com',
    user: 'Aleeha',
    password: 'Yehmeridbhai',
    port:'3306',
    database: 'HRMS'
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

var id = 0;

exports.display = async function (req, res) {
    if (req.body.id > 0) {
        id = req.body.id
    }

    // querying the database to get the information from the department table
    connection.query('SELECT * FROM DEPARTMENT WHERE dept_id = ?', [id] ,async function (error, results, fields) {
        if (error) {
            // informing the client in case of server error
            console.log(error);
            res.send({
                'code' : 500
            });
        } else {
            results = JSON.parse(JSON.stringify(results));

            // querying the database to get the hod's info from the user table
            connection.query('SELECT full_name, email, contact_no FROM HRUSER WHERE user_id = ?', [results[0].hod], async function(error, results2, fields) {
                if(error) {
                    // informing the client in case of server error
                    console.log(error);
                    res.send({
                        'code' : 500
                    });
                } else {
                    // sending the data to the client in a proper format
                    data = {
                        'dept_name' : results[0].dept_name,
                        'email' : results[0].email,
                        'hod' : results2[0].full_name,
                        'hod_phone' : results2[0].contact_no,
                        'hod_email' : results2[0].email,
                        'extension_code' : results[0].extension_code
                    }
                    console.log(data);
                    res.send(data);
                }
            });
            id = 0;
        }
    });
}