import { query } from '../config/db';
import { UserModel } from '../models/user.model';

export class UserRepository {
    async create(userData: Omit<UserModel, 'id' | 'created_at'>): Promise<Omit<UserModel, 'password'>> {
        const { rows } = await query<UserModel>(
            `INSERT INTO users (
                email, password, name, middle_name, last_name, 
                phone, country_code, hashed_id_number
            ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) 
            RETURNING id, email, name, middle_name, last_name, phone, country_code, created_at`,
            [
                userData.email,
                userData.password,
                userData.name,
                userData.middleName,
                userData.lastName,
                userData.phone,
                userData.countryCode,
                userData.idNumber
            ]
        );
        return rows[0];
    }

    async findByEmail(email: string): Promise<UserModel> {
        const { rows } = await query<UserModel>(
            'SELECT * FROM users WHERE email = $1',
            [email]
        );
        
        return rows[0];
    }

    async findByIdNumber(idNumber: string): Promise<UserModel> {
        const { rows } = await query<UserModel>(
            'SELECT * FROM users WHERE hashed_id_number = $1',
            [idNumber]
        );
        return rows[0];
    }
}

export const userRepository = new UserRepository(); 