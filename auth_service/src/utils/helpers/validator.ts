import { z } from 'zod';

export const ValidateRequest = (data: unknown, schema: z.ZodSchema) => {
    const result = schema.safeParse(data);
    
    if (result.success) {
        return false;
    }

    const errors = result.error.errors.map(err => ({
        field: err.path.join('.'),
        message: err.message
    }));

    return errors;
};