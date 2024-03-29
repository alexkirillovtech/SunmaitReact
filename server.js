const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const path = require("path");

const projects = require("./routes/api/projects");
const users = require("./routes/api/users");

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

const dbKey = require("./config/keys").mongoURI;
mongoose
  .connect(dbKey, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected... "))
  .catch(err => console.log(err));
app.use("/projects", projects);
app.use("/users", users);

// Serve  static assets if in production

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
