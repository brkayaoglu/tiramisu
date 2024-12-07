import { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService';
import { RegisterRequestDto, LoginRequestDto } from '../dto/auth.dto';

export const register = async (
    req: Request<{}, {}, RegisterRequestDto>, 
    res: Response, 
    next: NextFunction
) => {
    try {
        const user = await userService.register(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

export const login = async (
    req: Request<{}, {}, LoginRequestDto>, 
    res: Response, 
    next: NextFunction
) => {
    try {
        const result = await userService.login(req.body);
        res.json(result);
    } catch (error) {
        next(error);
    }
}; 