const { NotFound } = require("http-errors");

const contactsOperations = require("../../models/contacts");

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.getContactById(contactId);

  if (!result) {
    throw new NotFound(`Contact width id=${contactId} is not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      data: result,
    },
  });
};

module.exports = getContactById;
