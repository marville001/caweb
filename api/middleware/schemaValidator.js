const Joi = require("joi");
const schemaValidator = (schema, property) => (req, res, next) => {
  const { error } = schema.validate(req[property]);
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    res.status(400).json({ message: details[0].message });
  }
};

module.exports = schemaValidator;
