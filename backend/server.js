var express = require("express");
var loginroutes = require('./routes/loginroutes');
var usersroutes = require('./routes/usersroutes');
var adduserroutes = require('./routes/adduserroutes');
var editdeleteroutes = require('./routes/editdeleteroutes');
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
router.post('/view_info', viewInfo.display)
router.post('/edit_delete',editdeleteroutes.display);

app.use('/api', router);
app.listen(4000);
console.log('server is listening...');