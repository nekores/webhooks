const express = require("express");

const app = express();

const dotenv = require("dotenv");

// settingup config.env file variables
dotenv.config({ path: "./config/config.env" });

// importing routes
const jobs = require("./routes/jobs");

app.use("/api/v1", jobs);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `Server started on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode.`
  );
});
