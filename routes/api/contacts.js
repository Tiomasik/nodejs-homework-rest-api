const express = require("express");
const router = express.Router();
// const fs = require("fs/promises");
// const path = require("path");

const { ctrlContacts } = require("../../controllers");
const { validation, ctrlWrapper, isValidId } = require("../../middlewares");
const { ctrlUsers } = require("../../controllers");
const { schema } = require("../../models/contact");
const { upload } = require("../../middlewares");
// const tempDir = require("../../path");

router.get(
  "/",
  ctrlUsers.authenticate,
  ctrlWrapper(ctrlContacts.getAllContacts)
);

router.get(
  "/:contactId",
  ctrlUsers.authenticate,
  isValidId,
  ctrlWrapper(ctrlContacts.getContactById)
);

// router.post(
//   "/",
//   ctrlUsers.authenticate,
//   upload.single("cover"),
//   validation(schema.postSchema),
//   ctrlWrapper(ctrlContacts.addContact)
// );
// const rootDir = path.dirname(tempDir);
// const pathAvatars = path.join(rootDir, "public", "avatars");
// console.log(pathAvatars);
router.post(
  "/",
  ctrlUsers.authenticate,
  upload.single("cover"),
  // async (req, res) => {
  //   // console.log(req.body);
  //   // console.log(req.file);
  //   const { path: tmpUpload, originalname } = req.file;
  //   const resultUpload = path.join(pathAvatars, originalname);
  //   await fs.rename(tmpUpload, resultUpload);
  //   const cover = path.join("public", "avatars", originalname);
  // }
  ctrlWrapper(ctrlContacts.addContact)
);

router.put(
  "/:contactId",
  ctrlUsers.authenticate,
  isValidId,
  validation(schema.putSchema),
  ctrlWrapper(ctrlContacts.updateContact)
);

router.patch(
  "/:contactId/favorite",
  ctrlUsers.authenticate,
  isValidId,
  validation(schema.patchFavoriteSchema),
  ctrlWrapper(ctrlContacts.updateStatusContact)
);

router.delete(
  "/:contactId",
  ctrlUsers.authenticate,
  isValidId,
  ctrlWrapper(ctrlContacts.removeContact)
);

module.exports = router;
