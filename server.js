const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT = 8000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


let crud = require("./routes/routes");
let user2Crud = require('./routes/routes')
app.use("/", crud);
app.use("/", user2Crud);

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});