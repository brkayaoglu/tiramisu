export const STATUS_CODES = {
    OK: 200,
    BAD_REQUEST: 400,
    UN_AUTHORISED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    INTERNAL_ERROR: 500,
} as const; 

export const ERROR_CODES = {
    // Auth Flow
    VALIDATION_FAILED: 1001,
    USER_NOT_FOUND: 1002,
    INVALID_CREDENTIALS: 1003,
    EMAIL_ALREADY_EXISTS: 1004,
    ID_NUMBER_ALREADY_EXISTS: 1005,
    TOKEN_EXPIRED: 1006,
    TOKEN_INVALID: 1007,

    // Server Errors
    INTERNAL_SERVER_ERROR: 5001,
    DATABASE_ERROR: 5002,
} as const; 

export const ERROR_MESSAGES = {
    [ERROR_CODES.VALIDATION_FAILED]: 'Validation failed',
    [ERROR_CODES.USER_NOT_FOUND]: 'User not found',
    [ERROR_CODES.INVALID_CREDENTIALS]: 'Invalid credentials',
    [ERROR_CODES.EMAIL_ALREADY_EXISTS]: 'Email already exists',
    [ERROR_CODES.ID_NUMBER_ALREADY_EXISTS]: 'ID number already exists',
    [ERROR_CODES.TOKEN_EXPIRED]: 'Token has expired',
    [ERROR_CODES.TOKEN_INVALID]: 'Invalid token',
    [ERROR_CODES.INTERNAL_SERVER_ERROR]: 'Internal server error',
    [ERROR_CODES.DATABASE_ERROR]: 'Database error occurred'
} as const; 