const Joi = require('joi');

const schemas = {
    create: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.email().required(),
        phone: Joi.string().required(),
        school: Joi.string().required(),
        course: Joi.string().required(),
        gender: Joi.string().required(),
        password: Joi.string().required(),
        role: Joi.string().required(),
    })
}