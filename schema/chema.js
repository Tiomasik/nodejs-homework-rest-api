// const Joi = require("joi");

// const schema = (method) => {
//   if (method === "post") {
//     const contactsSchema = Joi.object({
//       name: Joi.string().required(),
//       email: Joi.string().email().required(),
//       phone: Joi.string()
//         .pattern(/\(\d{3}\) \d{3}-\d{4}$/)
//         .required(),
//     });
//     return contactsSchema;
//   } else {
//     const contactsSchema = Joi.object({
//       name: Joi.string(),
//       email: Joi.string().email(),
//       phone: Joi.string().pattern(/\(\d{3}\) \d{3}-\d{4}$/),
//     });
//     return contactsSchema;
//   }
// };

// module.exports = schema;
