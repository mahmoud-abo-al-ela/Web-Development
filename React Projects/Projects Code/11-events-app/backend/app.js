const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const eventRoutes = require("./routes/events");
const authRoutes = require("./routes/auth");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(authRoutes);
app.use("/events", eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

app.listen(3000);
