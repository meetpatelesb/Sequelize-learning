const { Router } = require("express");
let express = require("express");
let router = express.Router();
const crud = require('../controller/crud')
const userCrud =require('../controller/user2Crud')

// crud
router.post("/add", crud.addData);
router.delete('/delete/:id',crud.deleteData)
router.get('/show',crud.showData)
router.patch('/update/:id',crud.updateData)
router.get('/show/:id',crud.getUser)
router.get('/finder',crud.findUser);
router.get("/getsetvirtual", crud.getSetVirtualUser);
router.get('/rawdata',crud.rawQuery);



// user2Crud

router.post('/onetoone',userCrud.oneToOneUser);

module.exports = router;
