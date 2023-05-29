let express = require("express");
let router = express.Router();
const add = require('../controller/add')

router.get("/home", add.search);

module.exports = router;