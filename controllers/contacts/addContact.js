// const fs = require("fs/promises");
// const path = require("path");

const { Contact } = require("../../models/contact");
// const tempDir = require("../../path");

const addContact = async (req, res) => {
  // const rootDir = path.dirname(tempDir);
  // const pathAvatars = path.join(rootDir, "public", "avatars");
  // const { path: tmpUpload, originalname } = req.file;
  // const resultUpload = path.join(pathAvatars, originalname);

  // await fs.rename(tmpUpload, resultUpload);
  const { _id: owner } = req.user;

  const result = await Contact.create({ ...req.body, owner });

  res.status(201).json({
    status: "success",
    code: 201,
    data: result,
  });
};

module.exports = addContact;
