const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { mongooseError } = require("../middlewares");

const validateEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const userSchema = new Schema(
  {
    email: {
      type: String,
      match: validateEmail,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      marginLeft: 8,
      required: [true, "Set password for user"],
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: {
      type: String,
      default: "",
    },
  },
  { versionKey: false }
);

userSchema.post("save", mongooseError);

const User = model("user", userSchema);

const registerSchema = Joi.object({
  email: Joi.string().pattern(validateEmail).required(),
  password: Joi.string().min(8).required(),
  subscription: Joi.string().default("starter"),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(validateEmail).required(),
  password: Joi.string().min(8).required(),
});

const schema = { registerSchema, loginSchema };

module.exports = { schema, User };
