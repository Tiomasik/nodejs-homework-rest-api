const { Schema, model } = require("mongoose");
const Joi = require("joi");

const { mongooseError } = require("../middlewares");

const validateNumber = /\(\d{3}\) \d{3}-\d{4}$/;

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
      match: validateNumber,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  { versionKey: false }
);

contactSchema.post("save", mongooseError);

const Contact = model("contact", contactSchema);

const schema = (method) => {
  if (method === "post") {
    const contactsSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().pattern(validateNumber).required(),
      favorite: Joi.boolean().default(false),
    });
    return contactsSchema;
  } else {
    const contactsSchema = Joi.object({
      name: Joi.string(),
      email: Joi.string().email(),
      phone: Joi.string().pattern(validateNumber),
      favorite: Joi.boolean().default(false),
    });
    return contactsSchema;
  }
};

module.exports = { schema, Contact };
