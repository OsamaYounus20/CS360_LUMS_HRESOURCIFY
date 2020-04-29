const mysql = require('mysql');
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

var departments = {};
connection.query('SELECT * FROM DEPARTMENT', async function (error, results, fields) {
    if (error) {
        console.log(error);
    } else {
        results = JSON.parse(JSON.stringify(results));
        for (var index = 0; index < results.length; index++) {
            departments[results[index].dept_name] = results[index].dept_id;
        }
    }
});

function generatePassword() {
    var password = '';
    var characterset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.,/;:@';
    var length = characterset.length;
    for (var i = 0; i < 25; i++) {
       password += characterset[Math.floor(Math.random() * length)];
    }
    return password;
}

exports.add = async function(req, res) {
    var user_id;
    connection.query('SELECT COUNT(*) FROM HRUSER', async function(error, results, fields) {
        if (error) {
            console.log(error);
        } else {
            user_id = results[0]['COUNT(*)'] + 2000;
        }
    });
    user_password = generatePassword();
    department_id = departments[req.body.department];
    values = [
        user_id,
        req.body.name,
        user_password,
        req.body.email,
        req.body.contact_no,
        req.body.cnic,
        req.body.dob,
        req.body.marital_status,
        req.body.blood_type,
        req.body.job_title,
        department_id,
        req.body.nationality,
        req.body.location,
        req.body.address
    ]
    // connection.query('INSERT INTO HRUSER (user_id, full_name, user_password, email, contact_no, cnic, dob, marital_status, blood_type, job_title, department, nationality, location, address) VALUES ?', values, async function(error, results, fields) {
    //     if (error) {
    //         console.log(error);
    //         res.send({
    //             'code': 500,
    //             'success': 'Server error'
    //         });
    //     } else {
    //         console.log('inserted');
    //         res.send({
    //             'code': 200,
    //             'success': 'Added successfully'
    //         });
    //     }
    // });
    console.log(values)
}