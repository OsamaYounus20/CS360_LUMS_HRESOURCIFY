var express = require("express");
var login = require("./routes/login");
var users = require("./routes/users");
var addUser = require("./routes/addUser");
var departments = require("./routes/departments");
var addDepartment = require("./routes/addDepartment");
var viewUserInfo = require("./routes/viewUserInfo");
var viewPersonalInfo = require("./routes/viewPersonalInfo");
var viewDeptInfo = require("./routes/viewDeptInfo");
var editUserInfo = require("./routes/editUserInfo");
var leaves = require("./routes/leaves");
var viewLeaveRequest = require("./routes/viewLeaveRequest");
var grantDenyLeave = require("./routes/grantDenyLeave");
var assignTask = require('./routes/assignTask');
let applyLeave = require("./routes/applyLeave");
var bodyParser = require("body-parser");
let cors = require("cors");
// body parser added
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow cross origin requests
app.use(cors());
var router = express.Router();

// test route
router.get("/", function (req, res) {
  res.json({ message: "welcome to our upload module apis" });
});

router.all("/login", login.login);
router.all("/users", users.display);
router.all("/add_user", addUser.add);
router.all("/departments", departments.display);
router.all("/add_dept", addDepartment.add);
router.all("/view_user_info", viewUserInfo.display);
router.all("/view_personal_info", viewPersonalInfo.display);
router.all("/view_dept_info", viewDeptInfo.display);
router.all("/edit_user_info", editUserInfo.edit);
router.all("/leaves", leaves.display);
router.all("/view_leave_request", viewLeaveRequest.display);
router.all("/grant_deny_leave", grantDenyLeave.grantDeny);
router.all('/assign_task', assignTask.assign);
router.all("/apply_leave", applyLeave.apply);
app.use("/api", router);
app.listen(4000);
console.log("server is listening...");
