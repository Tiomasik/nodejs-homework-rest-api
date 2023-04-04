const { NotFound } = require("http-errors");

const contactsOperations = require("../../models/contacts");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);

  if (!result) {
    throw new NotFound(`Contact width id=${contactId} is not found`);
  }

  res.json({
    status: "success",
    code: 200,
    message: `Contact width id=${contactId} was deleted`,
    data: result,
  });
};

module.exports = deleteContact;
