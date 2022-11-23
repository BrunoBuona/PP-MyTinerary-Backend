const joi = require('joi')

const schema = joi.object({
    name: joi 
        .string()
        .required()
        .min(2)
        .max(20)
        .messages({
            "any.required": "This field is required.",
            "string.base": `Name must be a type of "text"`,
            "string.min": "Enter more than 2 letters",
            "string.max": "Enter less than 20 letters",
        }),
    continent: joi
        .string()
        .required()
        .min(2)
        .max(20)
        .messages({
            "any.required": "This field is required.",
            "string.empty": "This field is empty, please, introduce a continent.",
            "string.min": "Enter more than 2 letters",
            "string.max": "Enter less than 20 letters",
        }),
    photo: joi
        .string()
        .required()
        .uri()
        .messages({
            "any.required": "This field is required.",
            "string.uri": "This field is required, please, introduce a photo."
        }),
    population: joi
        .number()
        .required()
        .messages({
            "any.required": "The population field is required",
            "number.base": `Population must be a type of "number"`,
            "number.empty": "The population field is empty"
        }),
    userId: joi
        .any()
        .required()
        .messages({
            "any.required": "The user ID field is required",
            "string.base": `User ID must be a type of "text"`,
            "string.empty": "The user ID field is empty"
        })
})

module.exports = schema