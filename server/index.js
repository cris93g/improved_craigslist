require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(json());

const port = process.env.PORT || 3001;

massive(process.env.CONNECTION_STRING).then(dbinstance => {
  app.set("db", dbinstance);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
