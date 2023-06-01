const db = require("../models/index");
const user_flat = require("../models/user_flat");
const User2 = db.users2;
const Card = db.cards;
const Bank = db.Bank;
const Flat = db.flat;
const UserFlat = db.user_flat;
const User = db.users;
const User3 = db.paranoid_user;
const oneToOneUser = async (req, res) => {
  // const t = await db.sequelize.transaction();
  try {
    // insert card data only -------------
    const data = await Card.create({
      cardName: "aadharCard",
      cardNO: 85659562,
      user_id: 12,
    });

    // ---------------insert values with simple using id -----

    // const data = await User2.create(req.body);
    // if (data && data.id) {
    //   await Card.create({
    //     cardName: "aadharCard",
    //     cardNO: 85659562,
    //     user_id: data.id,
    //   });
    // }

    // -------------------------------findAll with user2 to card----

    // const data = await User2.findAll({
    //   attributes: ["firstName", "lastName", "id"],
    //   include: { model: Card, as: "cardDetails", attributes: ["cardNo"] },
    //   where: { id: 2 },
    // });

    // ---------------findAll card to user2-------

    // const data = await Card.findAll({
    //   attributes: ["cardNo", "id"],
    //   include: {
    //     model: User2,
    //     as: "userDetails",
    //     attributes: ["firstName", "lastName"],
    //   },
    //   where: { user_id: 2 },
    // });

    // ---------------------------------------------

    // const data = await User2.create(
    //   {
    //     firstName: "Meet",
    //     lastName: "Vaghasiya",
    //     Card: {
    //       cardNO: 235689566545,
    //       cardName: "aadharCard",
    //       // user_id: data.id,
    //     },
    //   },
    //   { include: Card }
    // );
    // await t.commit();
    res.status(200).json({ data });
  } catch (err) {
    // await t.rollback();
    console.log(err);
  }
};

const oneToManyUsers = async (req, res) => {
  console.log("inserted");
  try {
    // insert data into table---------------
    let insertData = req.body;
    if (insertData.length > 1) {
      var addedData = await Bank.bulkCreate(insertData);
    } else {
      var addedData = await Bank.create(insertData);
    }

    // insert data into table---------------
    // const userDatas = await Bank.create({
    //   user_id: 1,
    //   bankName: "boi",
    //   accountNo: 311110110005656,
    //   city: "ahmedabad",
    //   accountType: "saving",
    // });

    res.status(200).json({ addedData });
  } catch (err) {
    console.log(err);
  }
};

const oneToManyData = async (req, res) => {
  try {
    // find show all the datas------------only bank-------------
    // const data = await Bank.findAll({
    //   attributes: ["bankName", "city", "accountNo",'accountType'],
    // });

    // find data user & bank details ----------------------
    // const data = await User2.findAll({
    //   attributes: ["firstName", "lastName", "id"],
    //   include: {
    //     model: Bank,
    //     as: "bankDetails",
    //     attributes: ["bankName", "city", "accountNo", "accountType"],
    //   },
    // where: { id: req.params.id },
    // });

    // find data bank &  user  details ----------------------
    const data = await Bank.findAll({
      attributes: ["bankName", "city", "accountNo", "accountType"],
      include: {
        model: User2,
        as: "userDetails",
        attributes: ["firstName", "lastName", "id"],
      },
      where: { id: req.params.id },
    });
    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
  }
};

//insert into flat table

const manyToManyData = async (req, res) => {
  let insertData = req.body;
  const data = await Flat.bulkCreate(insertData);
  res.status(200).json({ data });
};

// insert data foreignkey in table

const manyToManyKeyData = async (req, res) => {
  let insertData = req.body;
  const data = await UserFlat.bulkCreate(insertData);
  res.status(200).json({ data });
};

// flat to user  datas

const manyToManyDataShowFlatUser = async (req, res) => {
  const data = await Flat.findAll({
    attributes: ["id", "flatName", "city", "rent"],
    include: {
      model: User2,
      attributes: ["firstName", "lastName"],
    },
  });
  res.status(200).json({ data });
};

// user to flat datas

const manyToManyDataShowUserFlat = async (req, res) => {
  const data = await User2.findAll({
    attributes: ["firstName", "lastName"],
    include: {
      model: Flat,
      attributes: ["flatName", "city", "rent"],
      // include: {
      //   model: UserFlat,
      //   attributes: ["flat_id","user_id"],
      // },
    },
  });
  res.status(200).json({ data });
};

// paranoid------------delete soft or hard----
const paranoidInsert = async (req, res) => {
  let insertData = req.body;
  const data = await User3.bulkCreate(insertData);

  res.status(200).json({ data });
};

const paranoiddeleteData = async (req, res) => {
  const data = await User3.destroy({
    where: {
      id: req.params.id,
    },
    // force: true,
  });

  // -------------------------restored data--------------------
  // const data = await User3.restore({
  //   where: {
  //     id: req.params.id
  //   },
  // });
  res.status(200).json({ data });
};

const paranoidshow = async (req, res) => {
  const data = await User3.findAll({
    paranoid: false,
  });

  res.status(200).json({ data });
};

module.exports = {
  oneToOneUser,
  oneToManyUsers,
  oneToManyData,
  manyToManyData,
  manyToManyKeyData,
  manyToManyDataShowFlatUser,
  manyToManyDataShowUserFlat,
  paranoidInsert,
  paranoiddeleteData,
  paranoidshow,
};
