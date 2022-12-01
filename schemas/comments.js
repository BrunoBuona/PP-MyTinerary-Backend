const Joi = require("joi");

const schema = Joi.object({
    showId: Joi.any(),
    userId: Joi.any(),
    date: Joi
    .date()
    .required()
    .messages({
      "date.base": "Please enter a date at date field",
      "any.required": "This field is required, please enter it",
    }),
    comment: Joi
    .string()
    .required()
    .min(3)
    .max(250)
    .messages({
      "string.empty": "The comment field is empty, please enter it",
      "string.base": "You must enter a text at comment field",
      "string.min": "Minimum 3 characters",
      "string.max": "Maximum 250 characters",
    }),
})

module.exports = schema;