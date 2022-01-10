const Joi = require('joi');

const getGarage = {
  params: {
    garageId: Joi.number().required()
}};

module.exports = {
  getGarage
};
