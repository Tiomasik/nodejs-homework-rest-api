const listContacts = require("./listContacts");

const getContactsByid = async (contactId) => {
  const allContacts = await listContacts();
  const contact = allContacts.find((contact) => contact._id === contactId);

  if (!contact) {
    return null;
  }

  return contact;
};

module.exports = getContactsByid;
