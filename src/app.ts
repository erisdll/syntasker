import express, {Request, Response, NextFunction, Express} from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from './routes/authRoutes';
import projectRoutes from './routes/projectRoutes';
import taskRoutes from './routes/taskRoutes';
import * as fs from "node:fs";

dotenv.config();

const app : Express = express();
app.use(bodyParser.json());
app.use('/api/', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

app.use((error: Error, request: Request, response: Response, next: NextFunction): void => {
    console.error(error.stack);
    response.status(500).send({'error': 'Internal Server Error'});
});

const port : string | number = process.env.PORT || 3000;
app.listen(port, () : void => {
    console.log(`Listening on port ${port}`);
});