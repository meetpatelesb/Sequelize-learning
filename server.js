const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const PORT = 8011;
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/product_images"));

let user = require("./routes/user");


app.use("/", user);


app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});
