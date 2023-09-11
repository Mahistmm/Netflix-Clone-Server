const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./db");
const apiRouter = require("./routes");
const cors = require("cors");

app.use(cors());
connectDB();
app.use(express.json());
app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.send("Server is working");
});

app.listen(process.env.PORT || 4000, (req, res) => {
  console.log("Server is up and running");
});
