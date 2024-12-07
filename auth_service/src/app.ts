import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middleware/errorHandler';

export const ExpressApp = async () => {
    const app = express();
    
    app.use(express.json());
    
    app.use('/api/auth', userRoutes);
    
    app.use(errorHandler);
    
    return app;
}
