import express, {Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import authRoutes from './routes/auth';
// import projectRoutes from './routes/projects';
// import taskRoutes from './routes/tasks';

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use('/api/auth', authRoutes);
// app.use('/api/projects', projectRoutes);
// app.use('/api/tasks', taskRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send({'error': 'Internal Server Error'});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});