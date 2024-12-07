import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { ValidateRequest } from '../utils/helpers/validator';
import { ValidationError } from '../models/error.model';

export const validateDto = (schema: z.ZodSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            const errors = ValidateRequest(req.body, schema);
            
            if (errors) {
                throw new ValidationError('Validation failed', errors);
            }

            next();
        } catch (error) {
            next(error);
        }
    };
}; 