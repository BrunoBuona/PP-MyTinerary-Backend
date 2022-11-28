const joi = require('joi')

const schema = joi.object({
    name: joi
    .string()
    .required()
    .min(2)
    .max(70)
    .messages({
        "any.required": "This field is required.",
        "string.empty": "This field is empty, please, introduce a name.",
        "string.min": "This field is required, please, introduce a name with a minimum of 2 letters.",
        "string.max": "This field is required, please, introduce a name with less than 70 letters."
    }),
    photo: joi
    .string()
    .required()
    .uri()
    .messages({
        "any.required": "This field is required.",
        "string.uri": "This field is required, please, introduce a photo."
    }),
    description: joi.
     string()
    .required()
    .min(1)
    .messages({
        "any.required": "This field is required.",
        "string.empty": "This field is empty, please, introduce a string."
    }),
    price: joi
    .number()
    .required()
    .messages({
        "any.required": "This field is required.",
        "string.empty": "This field is empty, please, introduce a number."
    }),
    duration: joi
    .number()
    .required()
    .messages({
        "any.required": "This field is required.",
        "string.empty": "This field is empty, please, introduce a number."
    }),
    cityId: joi
    .any()
    .required()
    ,
    userId: joi
    .any()
    .required()
})

module.exports = schema