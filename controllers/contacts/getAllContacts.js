const contactsOperations = require("../../models/contacts");

const getAllContacts = async (__, res) => {
  const contacts = await contactsOperations.listContacts();

  res.json({
    status: "success",
    code: 200,
    data: {
      data: contacts,
    },
  });
};

module.exports = getAllContacts;
