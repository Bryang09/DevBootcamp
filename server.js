const express = require("express");
const dotenv = require("dotenv");

// ROUTE FILES
const bootcamps = require("./routes/bootcamps");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.use("/api/v1/bootcamps", bootcamps);

const port = process.env.PORT || 5000;

app.listen(
  port,
  console.log(`Server Running in ${process.env.NODE_ENV} Mode on Port ${port}`)
);
