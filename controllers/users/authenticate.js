const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");

const { User } = require("../../models/user");

const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");
  if (bearer !== "Bearer") {
    return next(new Unauthorized(`User is not login`));
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    console.log(id);
    const user = await User.findById(id);

    if (!user) {
      throw new Unauthorized(`User is not found`);
    }
    next();
  } catch (error) {
    next(new Unauthorized(`Token is wrong`));
  }
};

module.exports = authenticate;
