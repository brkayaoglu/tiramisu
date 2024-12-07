import { STATUS_CODES, ERROR_CODES } from "../utils/constants/status-codes";

export interface ValidationErrorItem {
    field: string;
    message: string;
}

export class BaseError extends Error {
    public readonly name: string;
    public readonly status: number;
    public readonly errorCode: number;

    constructor(name: string, status: number, errorCode: number, message: string) {
        super(message);
        this.name = name;
        this.status = status;
        this.errorCode = errorCode;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}

export class APIError extends BaseError {
    constructor(description = "Internal server error") {
        super("APIError", STATUS_CODES.INTERNAL_ERROR, ERROR_CODES.INTERNAL_SERVER_ERROR, description);
    }
}

export class ValidationError extends BaseError {
    public readonly errors?: ValidationErrorItem[];

    constructor(message: string = 'Validation failed', errors?: ValidationErrorItem[]) {
        super('ValidationError', STATUS_CODES.BAD_REQUEST, ERROR_CODES.VALIDATION_FAILED, message);
        this.errors = errors;
    }
}

export class AuthError extends BaseError {
    constructor(message: string = 'Authentication failed') {
        super('AuthError', STATUS_CODES.UN_AUTHORISED, ERROR_CODES.INVALID_CREDENTIALS, message);
    }
}

export class NotFoundError extends BaseError {
    constructor(message: string = 'Resource not found') {
        super('NotFoundError', STATUS_CODES.NOT_FOUND, ERROR_CODES.USER_NOT_FOUND, message);
    }
} 