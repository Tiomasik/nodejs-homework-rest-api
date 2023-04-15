const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");

const { User } = require("../../models/user");
const tempDir = require("../../path");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const rootDir = path.dirname(tempDir);

  const pathAvatars = path.join(rootDir, "public", "avatars");
  const { path: tmpUpload, originalname } = req.file;
  const fileName = `${_id}_${originalname}`;
  const resultUpload = path.join(pathAvatars, fileName);

  await fs.rename(tmpUpload, resultUpload);

  const avatarURL = path.join("avatars", fileName);

  const image = await Jimp.read(resultUpload);
  image.resize(250, Jimp.AUTO);
  await image.writeAsync(resultUpload);

  const result = await User.findByIdAndUpdate(
    _id,
    { avatarURL },
    {
      new: true,
    }
  );

  res.json({
    status: 200,
    avatarURL: result.avatarURL,
  });
};

module.exports = updateAvatar;
