const listContacts = require("./listContacts");
const updateListContacts = require("./updateListContacts");

const updateContact = async (contactId, body) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((contact) => contact._id === contactId);

  if (index === -1) {
    return null;
  }

  const newContact = { ...allContacts[index], ...body };
  allContacts.splice(index, 1, newContact);
  await updateListContacts(allContacts);
  return newContact;
};

module.exports = updateContact;
