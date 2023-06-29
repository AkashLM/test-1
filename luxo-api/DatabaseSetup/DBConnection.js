const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const dbConnection = () => {
  const DB = process.env.DATABASE.replace(
    "<password>",
    process.env.DATABASE_PASSWORD
  );

  mongoose
    .connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Successfully connected to MongoDB"))
    .catch((err) => console.error("Didn't connect to MongoDB"));

  //
};

module.exports = {
  dbConnection,
};
