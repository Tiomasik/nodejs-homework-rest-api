const validation = (contactsSchema) => {
  return (req, __, next) => {
    const { error } = contactsSchema.validate(req.body);

    if (error) {
      error.status = 400;
      next(error);
    }
    
    next();
  };
};

module.exports = validation;
