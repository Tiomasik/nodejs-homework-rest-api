const express = require("express");
const logger = require("morgan");
const cors = require("cors");
// const path = require("path");
// const multer = require("multer");
require("dotenv").config();

const contactsRouter = require("./routes/api/contacts");
const usersRouter = require("./routes/api/users");

// const tempDir = path.join(__dirname, "tmp");

// const multerConfig = multer.diskStorage({
//   destination: tempDir,
// });
// const upload = multer({ storage: multerConfig });

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// app.post(
//   "/api/contacts",
//   // ctrlUsers.authenticate,
//   upload.single("cover"),
//   function (req, res) {
//     console.log(req.body);
//     console.log(req.file);
//   }
// );

app.use("/api/contacts", contactsRouter);
app.use("/api/users", usersRouter);

app.use((__, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "server error" } = err;
  res.status(status).json({
    status,
    message,
  });
});

module.exports = app;
