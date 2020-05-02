var express = require("express");
var loginroutes = require("./routes/loginroutes");
var usersroutes = require("./routes/usersroutes");
var adduserroutes = require("./routes/adduserroutes");
var viewinforoutes = require("./routes/viewinforoutes");

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

router.post("/login", loginroutes.login);
router.post("/users", usersroutes.display);
router.post("/add_user", adduserroutes.add);
router.post("/view_info", viewinforoutes.display);

app.use("/api", router);
app.listen(4000);
console.log("server is listening...");
