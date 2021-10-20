const express = require("express");
const path = require("path");
const db = require("./db");

const pitchRoutes = require("./routes/pitch");
const usersRoutes = require("./routes/users");

const app = express();

// CORS allows our backend to communicate with our frontend and vice versa.  Otherwise, we'll get an error in the browser every
// time our frontend requests something from our backend, saying Cross Origin Resource Sharing not allowed.
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("react/build"));
}

app.use("/pitch", pitchRoutes);
app.use("/users", usersRoutes);

// If no API routes are hit, send the React app
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});
module.exports = app;
