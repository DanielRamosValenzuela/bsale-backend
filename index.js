const express = require("express");
require("dotenv").config();

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.use("api/product", require("./app"));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running in PORT ${process.env.PORT}`);
});
