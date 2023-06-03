const { Router } = require("express");
let express = require("express");
let router = express.Router();
const crud = require("../controller/crud");
const userCrud = require("../controller/user2Crud");

// crud
router.post("/add", crud.addData);
router.delete("/delete/:id", crud.deleteData);
router.get("/show", crud.showData);
router.patch("/update/:id", crud.updateData);
router.get("/show/:id", crud.getUser);
router.get("/finder", crud.findUser);
router.get("/getsetvirtual", crud.getSetVirtualUser);
router.get("/rawdata", crud.rawQuery);

// user2Crud
// -----ONE TO ONE------
router.post("/onetoone", userCrud.oneToOneUser);

// -----ONE TO MANY------
router.post("/onetomany", userCrud.oneToManyUsers);
router.get("/otmbankdata/:id", userCrud.oneToManyData);

// CHECKING ONE TO MANY
router.post("/insert", userCrud.personData);

// -----MANY TO MANY------
router.post("/mtm", userCrud.manyToManyData);
router.post("/manykey", userCrud.manyToManyKeyData);
router.get("/showflatuser", userCrud.manyToManyDataShowFlatUser);
router.get("/showuserflat", userCrud.manyToManyDataShowUserFlat);


// PARANOID
router.post('/parainsert',userCrud.paranoidInsert)
router.delete("/paradelete/:id", userCrud.paranoiddeleteData);
router.get("/parashow", userCrud.paranoidshow);


// transaction
router.post('/transaction',userCrud.transaction)
router.post("/transaction2", userCrud.transaction2);


// polymorphic relations
router.post('/poly',userCrud.onetomanyPoly)







module.exports = router;
