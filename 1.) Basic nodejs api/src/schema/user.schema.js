import Joi from "joi";

const createUserSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    role: Joi.string().optional().valid("user", "admin")
})

export { createUserSchema };