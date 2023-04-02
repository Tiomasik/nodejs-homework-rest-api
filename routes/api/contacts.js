const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const contactsSchema = require("../../schema");

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  validation(contactsSchema("post")),
  ctrlWrapper(ctrl.addContact)
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeContact));

router.put(
  "/:contactId",
  validation(contactsSchema("put")),
  ctrlWrapper(ctrl.updateContact)
);

module.exports = router;
