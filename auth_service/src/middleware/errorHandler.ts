import { Request, Response, NextFunction } from 'express';
import { BaseError, ValidationError } from '../models/error.model';
import { STATUS_CODES, ERROR_CODES } from '../utils/constants/status-codes';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err);

    if (err instanceof BaseError) {
        return res.status(err.status).json({
            status: err.status,
            errorCode: err.errorCode,
            name: err.name,
            message: err.message
        });
    }

    if (err instanceof ValidationError) {
        return res.status(err.status).json({
            status: err.status,
            errorCode: err.errorCode,
            name: err.name,
            message: err.message,
            errors: err.errors
        });
    }

    return res.status(500).json({
        status: STATUS_CODES.INTERNAL_ERROR,
        errorCode: ERROR_CODES.INTERNAL_SERVER_ERROR,
        message: 'Internal Server Error'
    });
}; 