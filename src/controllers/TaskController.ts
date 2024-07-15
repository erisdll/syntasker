import { Request, Response } from 'express';
import { ITaskAttributes } from '../interfaces/ITaskAttributes';
import TaskService from '../services/TaskService';
import AuthService from '../services/AuthService';


class TaskController {
    static async createTask(req: Request, res: Response): Promise<Response> {
        try {
            const taskDTO: ITaskAttributes = req.body;
            const newTask = await TaskService.createTask(taskDTO);

            return res.status(200).json({message: "Task created successfully", data: newTask});
        } catch (error) {
            
            return res.status(500).send({error})
        }
    }
    static async getTask(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({error})
        }
    }
    static async getAllTasks(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({error})
        }
    }
    static async updateTask(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({error})
        }
    }
    static async deleteTask(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({error})
        }
    }
}

export default TaskController;