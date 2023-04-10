const express = require("express");
const router = express.Router();

const { ctrlUsers } = require("../../controllers");
const { validation, ctrlWrapper } = require("../../middlewares");
const { schema } = require("../../models/user");

// router.get("/", ctrlWrapper(ctrl.getAllContacts));

// router.get("/:contactId", isValidId, ctrlWrapper(ctrl.getContactById));

router.post(
  "/register",
  validation(schema.registerSchema),
  ctrlWrapper(ctrlUsers.registerUser)
);

router.post(
  "/login",
  validation(schema.loginSchema),
  ctrlWrapper(ctrlUsers.loginUser)
);

router.get(
  "/current",
  ctrlUsers.authenticate,
  ctrlWrapper(ctrlUsers.getCurrent)
);

router.post(
  "/logout",
  ctrlUsers.authenticate,
  ctrlWrapper(ctrlUsers.logoutUser)
);

// router.put(
//   "/:contactId",
//   isValidId,
//   validation(schema.putSchema),
//   ctrlWrapper(ctrl.updateContact)
// );

// router.patch(
//   "/:contactId/favorite",
//   isValidId,
//   validation(schema.patchFavoriteSchema),
//   ctrlWrapper(ctrl.updateStatusContact)
// );

// router.delete("/:contactId", isValidId, ctrlWrapper(ctrl.removeContact));

module.exports = router;
