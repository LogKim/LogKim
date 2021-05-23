// Deps
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
// Other
require("dotenv").config();

// App
const app = express();
// App Init
app.use(express.json());
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));
// Routes
app.use("/", require("./routes/web"));
app.use("/v1", require("./routes/api"));
// Database & App start
mongoose.connect(process.env.Mongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
});
mongoose.connection.once("connected", async () => {
  console.log("Connected to Database");
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Listening on port: ${process.env.PORT || 3000}`);
  });
});
