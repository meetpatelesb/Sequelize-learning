const { Router } = require("express");
let express = require("express");
let router = express.Router();
const crud = require('../controller/crud')

router.post("/add", crud.addData);
router.delete('/delete',crud.deleteData)
router.get('/show',crud.showData)
router.put('/update',crud.updateData)
router.get('/show/:id',crud.getUser)

module.exports = router;
