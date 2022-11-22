const Joi = require("joi");

const schema = Joi.object({
  name: Joi
    .string()
    .required()
    .min(3)
    .max(40)
    .messages({
      "string.base": "Please enter a valid name",
      "any.required": "This field is required, please enter it",
      "string.min":"Minimum 3 characters",
      "string.max": "Maximum 40 characters",
    }),
  photo: Joi
    .string()
    .required()
    .uri()
    .messages({
      "string.base": "Please enter words",
      "string.empty": "URL is required",
    }),
  capacity: Joi
    .number()
    .required()
    .min(2)
    .messages({
      "string.base": "You must enter a number",
      "number.empty": "Enter the number of the capacity please",
      "number.base": "You must enter a number",
      "number.min": "Please enter a higher capacity number"
    }),
  citiId: Joi.any(),
  userId: Joi.any(),
})

module.exports = schema;