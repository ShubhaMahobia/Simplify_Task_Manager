require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const apiRoutes = require("./routes/apiRoutes");
var app = express();
const port = 8080;
app.listen(port, function () {
  console.log(`Server Running on PORT ${port}`);
});
app.use(express.json());
app.use(cors());
//Connection with Database - MongoDB
mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Mongo Connection Error " + err));

app.use("/server/api", apiRoutes);