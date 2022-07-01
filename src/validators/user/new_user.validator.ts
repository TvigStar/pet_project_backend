import * as Joi from 'joi';
import { RegExpEnum } from '../../constants';

export const newUserValidator = Joi.object({
  name:Joi.string().trim().max(25).min(2).required(),
  surname: Joi.string().max(2).max(30),
  email: Joi.string().trim().regex(RegExpEnum.email).required(),
  password: Joi.string().trim().regex(RegExpEnum.password).required(),
  age: Joi.number().min(6).max(120).integer(),
  phone: Joi.string().trim().regex(RegExpEnum.phone),
  gender: Joi.string().trim().allow('male', 'female')
});
