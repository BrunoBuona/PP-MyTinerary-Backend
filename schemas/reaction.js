const joi = require('joi');

const schema = joi.object({
    itineraryId: joi
        .string()
        .required()
        .messages({
            'string.base': 'Itinerary ID must be a type of text',
            'any.required': 'The itinerary ID field is required',
            'string.empty': 'The itinerary ID field is empty',
        }),
    name: joi
        .string()
        .required()
        .messages({
            'string.base': 'Name must be a type of text',
            'any.required': 'The name field is required',
            'string.empty': 'The name field is empty',
        }),
    icon: joi
        .string()
        .uri()
        .required()
        .messages({
            'string.base': 'Icon must be a type of text',
            'any.required': 'The icon field is required',
            'string.empty': 'The icon field is empty',
        }),
    iconBack: joi
        .string()
        .uri()
        .required()
        .messages({
            'string.base': 'Icon back must be a type of text',
            'any.required': 'The icon back field is required',
            'string.empty': 'The icon back field is empty',
        }),
    userId: joi
        .array()
        .items(joi
            .string()
            .messages({
                'string.base': 'User ID must be a type of text',
            }))
        .messages({
            'array.base': 'User ID must be a type of array',
        }),
});

module.exports = schema;