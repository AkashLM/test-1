const express = require("express");
const {
  TokenGenerator_Middleware,
} = require("../Middlewares/TokenGenerator.middleware.js");
const { LoginFunction } = require("../Controllers/Common_Controller/Login.js");
const {
  SignUpFunction,
} = require("../Controllers/Common_Controller/SignUp.js");
const { BalanceCheck, Mint } = require("../Controllers/mint.js");
const {
  sendOtpFunction,
  verifyOtpFunction
} = require("../Controllers/otpController.js");
const router = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();

router.route("/login").post(LoginFunction, TokenGenerator_Middleware);
router.route("/Signup").post(SignUpFunction, TokenGenerator_Middleware);

// OTP routes
router.route("/sendOTP").post(jsonParser, sendOtpFunction);

// Verify Endpoint
router.route("/verifyOTP").post(jsonParser, verifyOtpFunction);

// Minting Routes
// @GET /balance/:wallet - wallet address of user to check balance of NFT
router.route("/balance/:wallet").get(BalanceCheck);
// @POST /mint - wallet address of user to mint NFT - body: {wallet: "0x..."}
router.route("/mint").post(jsonParser, Mint);

module.exports = router;
