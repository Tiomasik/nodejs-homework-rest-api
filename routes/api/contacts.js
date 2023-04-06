const express = require("express");
const router = express.Router();

const ctrl = require("../../controllers");
const { validation, ctrlWrapper, isValidId } = require("../../middlewares");
const { schema } = require("../../models/contact");

router.get("/", ctrlWrapper(ctrl.getAllContacts));

router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post("/", validation(schema.postSchema), ctrlWrapper(ctrl.addContact));

router.put(
  "/:contactId",
  isValidId,
  validation(schema.putSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validation(schema.patchFavoriteSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

module.exports = router;
