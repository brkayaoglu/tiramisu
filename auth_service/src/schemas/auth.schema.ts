import { z } from 'zod';

const errorMessages = {
    name: {
        required: 'Name is required',
        min: 'Name must be at least 2 characters',
        max: 'Name cannot exceed 50 characters'
    },
    email: {
        required: 'Email is required',
        format: 'Invalid email format'
    },
    password: {
        required: 'Password is required',
        min: 'Password must be at least 8 characters',
        format: 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
    },
    phone: {
        required: 'Phone number is required',
        format: 'Phone number must be 10 digits'
    },
    countryCode: {
        required: 'Country code is required',
        format: 'Country code must start with + followed by 1-3 digits (e.g., +90)'
    },
    idNumber: {
        required: 'ID number is required',
        min: 'ID number must be at least 5 characters',
        max: 'ID number cannot exceed 20 characters'
    }
};

export const RegisterSchema = z.object({
    name: z.string({
        required_error: errorMessages.name.required
    })
    .min(2, errorMessages.name.min)
    .max(50, errorMessages.name.max),

    middleName: z.string().max(50).optional(),

    lastName: z.string({
        required_error: errorMessages.name.required
    })
    .min(2, errorMessages.name.min)
    .max(50, errorMessages.name.max),

    email: z.string({
        required_error: errorMessages.email.required
    })
    .email(errorMessages.email.format),

    password: z.string({
        required_error: errorMessages.password.required
    })
    .min(8, errorMessages.password.min)
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/, errorMessages.password.format),

    phone: z.string({
        required_error: errorMessages.phone.required
    })
    .regex(/^[0-9]{10}$/, errorMessages.phone.format),

    countryCode: z.string({
        required_error: errorMessages.countryCode.required
    })
    .regex(/^\+[1-9][0-9]{0,2}$/, errorMessages.countryCode.format),

    idNumber: z.string({
        required_error: errorMessages.idNumber.required
    })
    .min(5, errorMessages.idNumber.min)
    .max(20, errorMessages.idNumber.max)
});

export const LoginSchema = z.object({
    email: z.string()
        .email(errorMessages.email.format)
        .optional(),

    idNumber: z.string()
        .min(5, errorMessages.idNumber.min)
        .max(20, errorMessages.idNumber.max)
        .optional(),

    password: z.string({
        required_error: errorMessages.password.required
    })
    .min(8, errorMessages.password.min)
})
.refine(data => data.email || data.idNumber, {
    message: "Either email or ID number must be provided"
});

export type RegisterRequest = z.infer<typeof RegisterSchema>;
export type LoginRequest = z.infer<typeof LoginSchema>; 