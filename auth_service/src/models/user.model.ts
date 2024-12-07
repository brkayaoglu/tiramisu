export interface UserModel {
    id: number;
    email: string;
    password: string;
    created_at: Date;
    name: string;
    middleName?: string;
    lastName: string;
    phone: string;
    countryCode: string;
    idNumber: string;
} 