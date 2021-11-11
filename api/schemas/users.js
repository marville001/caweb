const Joi = require('joi');

module.exports = {
    create: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        phone: Joi.string().required(),
        school: Joi.string().required(),
        course: Joi.string().required(),
        gender: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().required(),
    })
}