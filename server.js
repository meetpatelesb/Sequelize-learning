const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const PORT = 8000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


let add = require("./routes/routes");
app.use("/", add);

app.listen(PORT, (req, res) => {
  console.log(`http://localhost:${PORT}`);
});