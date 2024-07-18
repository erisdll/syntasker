import express, {Express, NextFunction, Request, Response} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';
import commentRoutes from './routes/commentRoutes';
import taskRoutes from './routes/taskRoutes';
import sequelize from './config/database';
import mongoose from "mongoose";

dotenv.config({path: './dev.env'});
const syntasker: Express = express();

syntasker.use(bodyParser.json());
syntasker
    .use('/api/', authRoutes)
    .use('/api/projects', projectRoutes)
    .use('/api/tasks', taskRoutes)
    .use('/api/comments', commentRoutes);

syntasker.use((error: Error, request: Request, response: Response): void => {
    console.error(error.stack);
    response.status(500).send({'error': 'Internal Server Error'});
});

sequelize.sync({
    force: false 
}).then(() => {
    console.log('\nDatabase synced\n');
}).catch((error: Error) => {
    console.error('\nUnable to sync database:\n', error);
});

mongoose.connect('mongodb://localhost:27017/syntasker').then(
    () => {
        console.log('Connected to MongoDB')
    })
    .catch((error: Error) => {
    console.error('Error connecting to MongoDB:', error);
});

syntasker.listen(process.env.APP_PORT, () => console.log('\nServer is running on port 3000\n'));
