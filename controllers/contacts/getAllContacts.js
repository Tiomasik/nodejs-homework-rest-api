const { Contact } = require("../../models/contact");

const getAllContacts = async (__, res) => {
  const contacts = await Contact.find();

  res.json({
    status: "success",
    code: 200,
    data: contacts,
  });
};

module.exports = getAllContacts;
