const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const User = db.users;
console.log(User);
const { Op } = require("sequelize");

const addData = async (req, res) => {
  let addDatas = req.body;
  // const addedData=null;
  // if (addDatas.length > 1) {
    const addedData = await User.bulkCreate(addDatas);
  // } else {
    //  addedData = await User.create(addDatas);
  // }
  // res.json(data);
  res.status(200).json({ data: addedData });

  // await data.increment("quentity", { by: 2 });

  // true - when create only but current state it is false
  // console.log(data instanceof User);
  // console.log(data.isAvailable);

  // console.log(data.toJSON()); // This is good!
  // console.log(JSON.stringify(data, null, 4));

  // await data.save();

  // res.send(data);
};

const deleteData = async (req, res) => {
  console.log("delete data");

  // delete data using condition
  // const users=null;
  for(let i = 89;i<94;i++){

  var   users = await User.destroy({
      where: {
        id: {
          [Op.or]: [i+1],
        },
      },
    });
  }

  console.log("All deleted users:", JSON.stringify(users, null, 2));
  res.send(JSON.stringify(users, null, 2));
};
const updateData = async (req, res) => {
  console.log("updated data");
  // Change everyone without a last name to "Doe"
  const users = await User.update(
    { categoryName: "Stationary" },
    {
      where: {
        id: [22, 24, 26],
      },
    }
  );
  console.log("all updated data:", JSON.stringify(users, null, 2));
  res.send(JSON.stringify(users, null, 2));
};

const showData = async (req, res) => {
  console.log("show datas");
  // Find all users-----------------------------
  // const users = await User.findAll();

  // this use for specific field show-----------------------------
  const users = await User.findAll({
    attributes: ["categoryName", "quentity", "id"],
  });

  // rename the column fields-------------------------------------
  // const users = await User.findAll({
  //   attributes: [["categoryName","name"], "quentity", "id"],
  // });

  // count function in select --------------------------------
  // const users = await User.findAll({
  //   attributes: [
  //     ["categoryName", "name"],
  //     [sequelize.fn('COUNT', sequelize.col("quentity")), "COUNT_QUENTITY"],
  //     "quentity",
  //     "id",
  //   ],
  // });

  // count in table----------------------------
  // const count = await User.count();
  // console.log(count);

  // count with condition where----------------------------
  // const count = await User.count({
  //   where: { categoryName: "Grocery" , },
  // });
  // console.log(count);

  // count with distinct----------------------------
  //   const count = await User.count({
  //     distinct: true,
  //     col: "categoryName",
  //   });
  // console.log(count);

  // count with specific col----------------------------
  // const count = await User.count({
  //   col: "categoryName",
  // });
  // console.log(count);

  // COUNT INCLUDE ALL FIELDS---------------------------
  //  const users = await User.findAll({
  //     attributes: {
  //       include: [[sequelize.fn("COUNT", sequelize.col("quentity")), "COUNT_QUENTITY"]],
  //     },
  //   });

  // where clause---------------------------

  // const users = await User.findAll({
  //   where:{
  //     categoryName:"Grocery"  ,
  //     id:1
  //   }
  // })

  // where with and or ---------------------

  // const users = await User.findAll({
  //   where: {
  //     [Op.or]: [{ id: 1 }, { categoryName: "Stationary" }],
  //   },
  // });

  // const users = await User.findAll({
  //   where: {
  //     [Op.and]: [{ id: 1 }, { categoryName: "Stationary" }],
  //   },
  // });

  // delete data using condition
  // const users = await User.destroy({
  //   where: {
  //     id: {
  //       [Op.or]: [21, 23],
  //     },
  //   },
  // });

  // like in table
  // const users = await User.findAll({
  //   where: {
  //     categoryName: {
  //       // [Op.gt]: 4,
  //       [Op.like]: "%Gro%",
  //     },
  //   },
  // });

  // console.log(users.every((data) => data instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));
  res.send(JSON.stringify(users, null, 2));
};
const getUser = async (req, res) => {
  const users = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: users });
};

module.exports = { addData, deleteData, showData, updateData, getUser };
