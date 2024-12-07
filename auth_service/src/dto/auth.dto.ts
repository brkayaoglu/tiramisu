import { z } from 'zod';
import { RegisterSchema, LoginSchema } from '../schemas/auth.schema';

// DTO Types from Zod Schemas
export type RegisterRequestDto = z.infer<typeof RegisterSchema>;
export type LoginRequestDto = z.infer<typeof LoginSchema>;

// Response Type
export interface AuthResponseDto {
    token: string;
    user: {
        id: number;
        email: string;
        created_at: Date;
        name: string;
        middleName?: string;
        lastName: string;
        phone: string;
        countryCode: string;
    }
} 