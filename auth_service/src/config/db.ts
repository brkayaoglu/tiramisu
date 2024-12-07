import { Pool, QueryResult, QueryResultRow } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

// Create connection pool
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5442'),
});

// Connection event handlers
pool.on('connect', () => {
    console.log('Database connected successfully');
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

// Query helper function
export const query = async <T extends QueryResultRow>(
    text: string, 
    params?: any[]
): Promise<QueryResult<T>> => {
    try {
        //console.log("Querying database:", text, params);
        const result = await pool.query(text, params);
        //console.log("Query result:", result);
        return result;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    }
};

// Add test connection
const testConnection = async () => {
    const result = await query('SELECT 1');
    console.log('Database connection test successful');
};

export default {
    query,
    pool,
    testConnection
}
