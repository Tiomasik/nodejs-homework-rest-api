const { Contact } = require("../../models/contact");

const getAllContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;

  const contacts =
    favorite === "true" || favorite === "false"
      ? await Contact.find({ owner, favorite }, "", {
          skip,
          limit,
        }).populate("owner", "email")
      : await Contact.find({ owner }, "", {
          skip,
          limit,
        }).populate("owner", "email");

  res.json({
    status: "success",
    code: 200,
    data: contacts,
  });
};

module.exports = getAllContacts;
