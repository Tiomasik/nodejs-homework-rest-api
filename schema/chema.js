const Joi = require("joi");

const schema = (method) => {
  if (method === "post") {
    const contactsSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      phone: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/)
        .required(),
    });
    return contactsSchema;
  } else {
    const contactsSchema = Joi.object({
      name: Joi.string(),
      email: Joi.string().email(),
      phone: Joi.string()
        .length(10)
        .pattern(/^[0-9]+$/),
    });
    return contactsSchema;
  }
};

module.exports = schema;
