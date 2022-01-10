const Joi = require('joi');

const middleware = (schema) => (req, res, next) => {
  console.log('----- REQUEST : ', req.params);
  console.log('---- SCHEMA : ', schema);
  const { error } = Joi.validate(req, schema);
  const valid = error == null;

  if (valid) {
    next();
  } else {
    const { details } = error;
    const message = details.map((i) => i.message).join(',');

    console.error('error', message);
    res.status(422).json({ error: message });
  }
};
module.exports = middleware;
