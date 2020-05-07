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

exports.login = async function(req, res){
    console.log(req.body);
    var username = req.body.Username;
    var password = req.body.Password;
    var user_id = username;

    // converting the id to 2000 if the entered username is admin
    user_id = parseInt(username);
    if (username === 'admin')
        user_id = 2000;
    
    if (isNaN(user_id)) {   // in case the user entered a username that is a string other than admin
        // informing the client that the entered username does not exist
        console.log("here")
        res.send({
            'code'    : 206,
            'user'    : 'none',
            'success' : 'Employee does not exist'
        });
    } else {
        // querying the database to get the password against the entered id
        connection.query('SELECT user_password FROM HRUSER WHERE user_id = ?', [user_id], async function (error, results, fields) {
            if (error) {
                //  informing the client in case of server error
                console.log(error);
                res.send({
                    'code'    : 500,
                    'user'    : 'none',
                    'success' : 'error ocurred'
                })
            } else {
                console.log(results)
                if (results.length > 0){
                    // checking if the entered password matches with the database
                    if (password === results[0].user_password) {
                        // informing the client of success and sending back the id with which they logged in
                        if (username === 'admin') {     // if they logged in as admin
                            res.send({
                                'code'    : 200,
                                'user'    : 'admin',
                                'success' : 'Login sucessful'
                            })
                        } else {        // if they logged in as an employee
                            res.send({
                                'code'    : 200,
                                'user'    : 'employee',
                                'success' : 'Login sucessful'
                            })
                        }
                    } else {
                        // informing the client if the passwords do not match
                        res.send({
                            'code'    : 204,
                            'user'    : 'none',
                            'success' : 'Username and password does not match'
                        })
                    }
                } else {
                    // informing the client if the record does not exist in the database
                    res.send({
                        'code'    : 206,
                        'user'    : 'none',
                        'success' : 'Employee does not exist'
                    });
                }
            }
        });
    }
}
