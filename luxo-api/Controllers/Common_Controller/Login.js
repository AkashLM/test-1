const { SignUp_Model } = require("../../DatabaseSetup/Mongoose.SignUp.Schema");
const bcrypt = require("bcryptjs");
const LoginFunction = async (req, res, next) => {
  const { Res_PublicAddr } = req.body;
  console.log(req.cookies);
  const Login_Check = await SignUp_Model.findOne({
    PublicAddress: Res_PublicAddr,
  });
  if (!Login_Check) {
    res.status(500).json({
      status: "Error",
      message: "Public Address is not valid!",
    });
  } else {
    if (Login_Check) {
      //Adding found user object to req.user for token generation.
      req.User = Login_Check;
      //Calling authentication middleware for token generation.
      next();
    }
  }
};
module.exports = {
  LoginFunction,
};
