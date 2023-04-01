const contactsOperations = require("../../models/contacts");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const body = { ...req.body, contactId };
  const result = await contactsOperations.updateContact(body);

  res.json({
    status: "success",
    code: 200,
    data: {
      data: result,
    },
  });
};

module.exports = updateContact;
