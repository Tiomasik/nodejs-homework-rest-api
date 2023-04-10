const { Contact } = require("../../models/contact");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  console.log(req.query);
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const contacts = await Contact.find({ owner }, "", { skip, limit }).populate(
    "owner",
    "email"
  );

  res.json({
    status: "success",
    code: 200,
    data: contacts,
  });
};

module.exports = getAllContacts;
