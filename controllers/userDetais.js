const { sequelize, Sequelize } = require("../models/index");
const db = require("../models/index");
const express = require("express");
const app = express();
const User = db.user;
const { Op, QueryTypes } = require("sequelize");
console.log(User);

const userInsert = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  // const t = await db.sequelize.transaction();
  try {
    const userData = await User.create(
      {
        name: name,
        email: email,
        password: password,
      }
      // { transaction: t }
    );
    // await t.commit();
    console.log(userData);
    await res.json({ user: userData.dataValues, status: 200 });
  } catch (error) {
    // await t.rollback();
    console.log(error);
  }
};

const userDelete = async (req, res) => {
  const { id } = req.params 
  console.log(id);
  const userDelete = await User.destroy({
    where: {
      id: id,
    },
  });

  res.json({ data: userDelete.DataTypes });
};

const userDeleteHard = async (req, res) => {
   const { id } = req.params
   console.log(id);
   const userDelete = await User.destroy({
     where: {
       id: id,
     },
     force:true

   });

   res.json({ data: userDelete.DataTypes });
};

const userDetails = async (req, res) => {
  const userData = await User.findAll({
    attributes:['id','name','email'],
    // paranoid:false
  });
res.json({data:userData})
};


const userRestore = async(req,res)=>{
  const { id } = req.params;
  console.log(id);
  const userRestoreData = await User.restore({
    where: {
      id: id,
    },
  });

  res.json({ data: userRestoreData.DataTypes });
}
module.exports = {
  userInsert,
  userDelete,
  userDetails,
  userDeleteHard,
  userRestore,
};
