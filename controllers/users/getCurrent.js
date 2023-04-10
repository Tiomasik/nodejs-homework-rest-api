const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;

  res.json({
    Status: 200,
    ContentType: "application/json",
    ResponseBody: {
      email,
      subscription,
    },
  });
};

module.exports = getCurrent;
