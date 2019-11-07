const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const colors = require("colors");
const connectDB = require("./config/db");

// ROUTE FILES
const bootcamps = require("./routes/bootcamps");

dotenv.config({ path: "./config/config.env" });

connectDB();

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/bootcamps", bootcamps);

const port = process.env.PORT || 5000;

const server = app.listen(
  port,
  console.log(
    `Server Running in ${process.env.NODE_ENV} Mode on Port ${port}`.yellow
  )
);

// Unhadled promise rejections

process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  // close server and exit process
  server.close(() => process.exit(1));
});
