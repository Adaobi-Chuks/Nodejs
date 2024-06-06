import Joi from "joi";

const createProductSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional(),
    price: Joi.number().required(),
    availability: Joi.boolean().required(),
    quantity: Joi.number().required()
})

export { createProductSchema };