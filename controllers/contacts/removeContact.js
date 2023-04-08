const { NotFound } = require("http-errors");

const { Contact } = require("../../models/contact");

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);

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
