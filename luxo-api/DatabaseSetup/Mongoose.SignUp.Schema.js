const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Schema for SignUp Testing
const SignUp_Schema = new mongoose.Schema({
  UserName: {
    type: String,
  },
  EmailId: {
    type: String,
  },
  MobileNumber: {
    type: Number,
  },
  DateOfBirth: {
    type: Date,
  },
  PublicAddress: {
    type: String,
  },
});

//Model for SignUp Testing
const SignUp_Model = mongoose.model("SignUp_Model_DB", SignUp_Schema);
module.exports = {
  SignUp_Model,
};
