const listContacts = require("./listContacts");
const updateListContacts = require("./updateListContacts");

const updateContact = async ({ name, email, phone, contactId }) => {
  const allContacts = await listContacts();
  const newContact = { id: contactId, name, email, phone };
  const index = allContacts.findIndex((contact) => contact.id === contactId);

  if (index === -1) {
    return null;
  }

  allContacts.splice(index, 1, newContact);
  await updateListContacts(allContacts);
  return newContact;
};

module.exports = updateContact;
