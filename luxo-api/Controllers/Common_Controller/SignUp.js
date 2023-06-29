const {
  SignUp_Model,
} = require("../../DatabaseSetup/Mongoose.SignUp.Schema.js");
const SignUpFunction = async (req, res, next) => {
  const { Res_UserName, Res_EmailId, Res_MobileNumber, Res_DateOfBirth,Res_PublicAddr } = req.body;
  console.log(req.body);
  try {
    const already_exist_Checks = await SignUp_Model.findOne({
      $or: [
        {
          UserName: Res_UserName,
        },
        {
          EmailId: Res_EmailId,
        },
      ],
    });
    if (!already_exist_Checks) {
      const SavedData_SignUp = await SignUp_Model.create({
        UserName: Res_UserName,
        EmailId: Res_EmailId,
        MobileNumber: Res_MobileNumber,
        DateOfBirth: Res_DateOfBirth,
        PublicAddress: Res_PublicAddr
      });
      console.log("SavedData_SignUp", SavedData_SignUp);
      //Adding found user object to req.user for token generation.
      req.User = SavedData_SignUp;
      //Calling authentication middleware for token generation.
      next();
    } else {
      res.status(500).json({
        statusbar: "error",
        message: "User already exist!",
        data: already_exist_Checks,
      });
    }
  } catch (Error) {
    console.log(Error);
  }
};
module.exports = {
  SignUpFunction,
};
