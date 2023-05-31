const db = require("../models/index");
const User2 = db.users2;
const Card = db.cards;

const oneToOneUser = async (req, res) => {
  // const t = await db.sequelize.transaction();
  try {

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
module.exports = { oneToOneUser };
