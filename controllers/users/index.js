const registerUser = require("./registerUser");
const loginUser = require("./loginUser");
const authenticate = require("./authenticate");
const getCurrent = require("./getCurrent");
const logoutUser = require("./logoutUser");
const updateSubscriptionUser = require("./updateSubscriptionUser");

module.exports = {
  registerUser,
  loginUser,
  authenticate,
  getCurrent,
  logoutUser,
  updateSubscriptionUser,
};
