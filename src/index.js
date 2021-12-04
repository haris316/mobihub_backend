const express = require("express");
const app = express();
const env = require("dotenv");
const mongoose = require("mongoose");
const brandRoutes = require("./routes/brand");
const phoneRoutes = require("./routes/phone");
const contactRoutes = require("./routes/contact");

env.config();

app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@mobihub.qmy0w.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
  { useUnifiedTopology: true, useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/api", brandRoutes);
app.use("/api", phoneRoutes);
app.use("/api", contactRoutes);

const PORT = 9002 || process.env.PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
