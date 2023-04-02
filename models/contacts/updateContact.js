const listContacts = require("./listContacts");
const updateListContacts = require("./updateListContacts");

const updateContact = async (contactId, body) => {
  const allContacts = await listContacts();
  const index = allContacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  const oldContact = allContacts.find((contact) => contact.id === contactId);
  const newContact = { ...oldContact, ...body };
  allContacts.splice(index, 1, newContact);
  await updateListContacts(allContacts);
  return newContact;
};

module.exports = updateContact;
