const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;
const cors = require("cors");
const mailRoute = require("./router/mailRoute");

app.use(
  cors({
    origin: true,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.use("/", mailRoute);

app.listen(port, () => console.log("Server running" + port));
