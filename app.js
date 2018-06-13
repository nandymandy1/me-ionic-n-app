// Express server
const express = require("express");
// Path Module
const path = require("path");
// Body parser Module
const bodyParser = require("body-parser");
// Cross Origin Module
const cors = require("cors");
// MongoDB Database
const mongoose = require("mongoose");
// For Sessions and Authentication
// const passport = require("passport");

// Database Config
const config = require("./config/db");

// Database Connection
mongoose.connect(config.database);
mongoose.connection.on("connected", () => {
  console.log("Connected to the database " + config.database);
});
// Error in database connection
mongoose.connection.on("err", err => {
  console.log("Database Error " + err);
});

const app = express();
const reqs = require("./routes/req");

app.use(cors());
// Body parser middleware
app.use(bodyParser.json());
app.use("/reqs", reqs);

/*
FOR AUTHENTICATION AND SESSIONS
// passport middleware

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

*/

// Set static folder file
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// PORT
const port = process.env.PORT || 5000;


// Port Listener
app.listen(port, () => {
  console.log("Server started on port " + port);
});
