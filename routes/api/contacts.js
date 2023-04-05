const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers");
const { validation, ctrlWrapper, isValidId } = require("../../middlewares");
const { schema } = require("../../models/contact");

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validation(schema("post")), ctrlWrapper(ctrl.addContact));

// router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

// router.put(
//   "/:contactId", isValidId,
//   validation(contactsSchema("put")),
//   ctrlWrapper(ctrl.updateContact)
// );

module.exports = router;
