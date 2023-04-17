const { Conflict } = require("http-errors");
const bcrypt = require("bcrypt");
const gravatar = require("gravatar");

const { User } = require("../../models/user");

const registerUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`Email in use`);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  const result = await User.create({
    ...req.body,
    password: hashedPassword,
    avatarURL,
  });

  res.status(201).json({
    Status: 201,
    user: {
      email: result.email,
      avatarURL,
      subscription: result.subscription,
    },
  });
};

module.exports = registerUser;
