const contactsOperations = require("../../models/contacts");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.updateContact(contactId, req.body);

  res.json({
    status: "success",
    code: 200,
    data: result,
  });
};

module.exports = updateContact;
