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

exports.add = async function(req, res) {
    // admin enters both id and name of the hod
    console.log(req.body)
    req.body.hodID = parseInt(req.body.hodID)
    // querying the database to ensure both id and name are entered correctly
    connection.query('SELECT full_name FROM HRUSER WHERE user_id = ?', [req.body.hodID], async function(error, results, fields) {
        if (error) {
            // informing the client in case of a server error
            console.log(error);
            res.send({
                'code'   : 500,
                'succes' : 'Server error'
            });
        } else if (results[0].full_name != req.body.hod) {
            // informing the client if the entered id and name do not match
            console.log('HOD ID and name do not match');
            res.send({
                'code'    : 400,
                'success' : 'ID and name do not match'
            });
        } else {
            values = [
                req.body.name,
                req.body.email,
                req.body.hodID,
                req.body.extNo
            ]

            // querying the database to insert the new department
            connection.query('INSERT INTO DEPARTMENT (dept_name, email, hod, extension_code) VALUES (?, ?, ?, ?)', values, async function(error, results, fields) {
                if (error) {
                    // informing the client in case of a server error
                    console.log(error);
                    res.send({
                        'code'    : 500,
                        'success' : 'Server error'
                    });
                } else {
                    // informing the client of success
                    console.log('Department inserted successfully.');
                    res.send({
                        'code'    : 200,
                        'success' : 'Inserted successfully'
                    });

                    // updating the job title and department of the employee who was made hod of the new department
                    let title = 'HOD';
                    console.log('updating job title');
                    connection.query('UPDATE HRUSER SET job_title = ?, department = (SELECT dept_id FROM DEPARTMENT WHERE dept_name = ?) WHERE user_id = ?', [title, req.body.name, req.body.hodID], async function (error, results, fields){
                        if (error){
                            // displaying if an error occured
                            console.log(error);
                        } else {
                            console.log('new hod entry updated')
                        }
                    });
                }
            });
        }
    });
}