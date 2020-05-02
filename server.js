var express = require("express");
var login = require('./routes/login');
var users = require('./routes/users');
var addUser= require('./routes/addUser');
var departments = require('./routes/departments')
var addDepartment = require('./routes/addDepartment')

var bodyParser = require('body-parser');
let cors = require('cors')
// body parser added
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow cross origin requests
app.use(cors())

var router = express.Router();

// test route
router.get('/', function(req, res) {
    res.json({ message: 'welcome to our upload module apis' });
});

router.post('/login', login.login);
router.post('/users', users.display);
router.post('/add_user', addUser.add);
router.post('/departments', departments.display);
router.post('/add_dept', addDepartment.add)

app.use('/api', router);
app.listen(4000);
console.log('server is listening...');