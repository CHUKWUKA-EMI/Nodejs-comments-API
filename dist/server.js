"use strict";

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _cors = require("cors");

var _cors2 = _interopRequireDefault(_cors);

var _usersRoutes = require("./Routes/usersRoutes");

var _usersRoutes2 = _interopRequireDefault(_usersRoutes);

var _commentsRoutes = require("./Routes/commentsRoutes");

var _commentsRoutes2 = _interopRequireDefault(_commentsRoutes);

var _connection = require("./DB/connection");

var _connection2 = _interopRequireDefault(_connection);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const app = (0, _express2.default)();

app.use(_express2.default.urlencoded({ extended: false }));
app.use((0, _cors2.default)());

//create middlewares for routes
app.use("/api", _usersRoutes2.default);
app.use("/apicomment", _commentsRoutes2.default);

//App's entry point
app.get("/", (req, res) => {
  res.send(
    `<marquee height='100%'>Welcome to Comments API built with Node/Express server. You can interact with this API with a Frontend App or with Postman. Thank you...Comments API &copy; 2020</marquee>`
  );
});

const port = process.env.PORT || 5000;

//start express server
app.listen(port, async () => {
  console.log(`Express server listening on Port ${port}`);
  try {
    await _connection2.default.authenticate({ logging: false });
    console.log("Database Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});
