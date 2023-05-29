const db = require("../models/index");
const User = db.users;
console.log(User);

var search = async (req, res) => {
  const data = await User.bulkCreate({
    id:1,
    categoryName: "electronics",
  });
  console.log("data insert");
  // res.send(data);
  res.json(data)
};

module.exports = { search };
