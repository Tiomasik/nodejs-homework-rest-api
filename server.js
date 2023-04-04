const mongoose = require("mongoose");

const app = require("./app");

const { PORT = 3000 } = process.env;

const DB_HOST =
  "mongodb+srv://Artem:PI1qK6Xcj0kcUxAg@cluster0.cpxtsq5.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
