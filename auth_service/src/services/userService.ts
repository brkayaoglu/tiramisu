import { RegisterRequestDto, LoginRequestDto, AuthResponseDto } from '../dto/auth.dto';
import { userRepository } from '../repositories/userRepository';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { AuthError, NotFoundError, ValidationError } from '../models/error.model';
import { ERROR_CODES, ERROR_MESSAGES } from '../utils/constants/status-codes';

export const register = async (userData: RegisterRequestDto): Promise<Omit<AuthResponseDto['user'], 'token'>> => {
    const existingUser = await userRepository.findByEmail(userData.email);
    if (existingUser) {
        throw new ValidationError(ERROR_MESSAGES[ERROR_CODES.EMAIL_ALREADY_EXISTS]);
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // add id number hashing
    const hashedIdNumber = await bcrypt.hash(userData.idNumber, 10);
    
    const user = await userRepository.create({
        ...userData,
        password: hashedPassword,
        idNumber: hashedIdNumber
    });

    return user;
};

export const login = async (credentials: LoginRequestDto): Promise<AuthResponseDto> => {
    const user = credentials.email 
        ? await userRepository.findByEmail(credentials.email)
        : await userRepository.findByIdNumber(credentials.idNumber!);

    if (!user) {
        throw new NotFoundError(ERROR_MESSAGES[ERROR_CODES.USER_NOT_FOUND]);
    }
    
    const validPassword = await bcrypt.compare(credentials.password, user.password);
    if (!validPassword) {
        throw new AuthError(ERROR_MESSAGES[ERROR_CODES.INVALID_CREDENTIALS]);
    }

    const token = jwt.sign(
        { userId: user.id },
        process.env.JWT_SECRET || 'your-secret-key',
        { expiresIn: '1h' }
    );

    const { password, ...userWithoutPassword } = user;
    return {
        token,
        user: userWithoutPassword
    };
};