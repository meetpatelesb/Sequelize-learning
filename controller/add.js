const db = require("../models/index");
const User = db.users;
console.log(User);

const search = async (req, res) => {
  console.log("bjasbjkasb");
  const data = await User.bulkCreate([{
    categoryName: "grocery",
  },{
categoryName:"stationary"
  }]);
  // console.log(data.categoryName);
  // await data.save();
  // console.log("data insert");
  res.send(data);
  // res.json(data);
};

module.exports = { search };
