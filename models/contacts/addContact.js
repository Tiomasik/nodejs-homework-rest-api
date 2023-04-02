const { v4 } = require("uuid");

const listContacts = require("./listContacts");
const updateListContacts = require("./updateListContacts");

const addContact = async ({ name, email, phone }) => {
  const allContacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  allContacts.push(newContact);
  await updateListContacts(allContacts);
  return newContact;
};

module.exports = addContact;
