const Joi = require("joi");

const schema = Joi.object({
    name: Joi
    .string()
    .required()
    .min(3)
    .max(40)
    .messages({
      "string.base": "Please enter a text at name field",
      "any.required": "This field is required, please enter it",
      "string.min": "Minimum 3 characters",
      "string.max": "Maximum 40 characters",
    }),
    photo: Joi
    .string()
    .required()
    .uri()
    .messages({
      "string.base": "Please enter a valid URL at photo field",
      "string.empty": "The photo field is empty, please enter it",
    }),
  description: Joi
    .string()
    .required()
    .min(1)
    .messages({
      "number.empty": "The capacity field is empty, please enter it",
      "number.base": "You must enter a number at capacity field",
      "number.min": "Please enter a higher capacity number at capacity field",
    }),
    price: Joi
    .number()
    .required()
    .messages({
        "any.required": "The population field is required",
        "number.base": `Population must be a type of "number"`,
        "number.empty": "The population field is empty"
    }),
    duration: Joi
    .number()
    .required()
    .messages({
        "any.required": "The duration field is required",
        "number.base": `duration must be a type of "number"`,
        "number.empty": "The duration field is empty"
    }),
    cityId: Joi
    .any()
    .required(),
    userId: Joi
    .any()
    .required()
})

module.exports = schema;





























/* 
cityId: {type: mongoose.Types.ObjectId, ref: 'cities', required: true},
name: {type: String, required: true},
photo: [{type: String, required: true}],
description: {type: String, required: true},
price: {type: Number, required: true},
duration: {type: Number, required: true},
userId: {type: mongoose.Types.ObjectId, ref: 'users', required: true}, */