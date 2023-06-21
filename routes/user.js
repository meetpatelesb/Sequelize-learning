let express = require("express");
let router = express.Router();
const UserDetails = require("../controllers/userDetais");
const cors = require("cors");
const app = express();
app.use(cors());

// add data
router.post("/userinsert", UserDetails.userInsert);

//  delete data
router.post("/userdelete/:id", UserDetails.userDelete);

// hard delete data
router.post("/userdeletehard/:id", UserDetails.userDeleteHard);

// restore  delete data
router.post("/userrestore/:id", UserDetails.userRestore);


// show data
router.get("/usershow", UserDetails.userDetails);


module.exports = router;
