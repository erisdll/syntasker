import { Request, Response } from 'express';
import { ITaskAttributes } from '../interfaces/ITaskAttributes';
import TaskService from '../services/TaskService';
import AuthService from '../services/AuthService';


class TaskController {
    static async createTask(req: Request, res: Response): Promise<Response> {
        try {
            const taskDTO: ITaskAttributes = req.body;
            const newTask = await TaskService.createTask(taskDTO);
            return res.status(200).json({ message: "Task created successfully", data: newTask });
        } catch (error) {
            return res.status(500).send({ message: "Internal server error" })
        }
    }
    static async getTask(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const task = TaskService.getTask(id);
            if (task == null) {
                return res.status(404).json({ message: "Task not found" });
            }
            return res.status(200).json({ message: "Task retrieved successfully", data: task });
        } catch (error) {
            return res.status(500).send({ message: "Internal server error" })
        }
    }
    static async getAllTasks(req: Request, res: Response): Promise<Response> {
        try {
            const tasks = TaskService.getAllTasks();
            return res.status(200).json({ message: "Tasks retrieved successfully", data: tasks });
        } catch (error) {
            return res.status(500).send({ message: "Internal server error" })
        }
    }
    static async updateTask(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const taskDTO: ITaskAttributes = req.body;
            const updatedTask = await TaskService.updateTask(id, taskDTO);
            
            if(updatedTask == null) {
                return res.status(404).json({ message: "Task not found" });
            }
            
            return res.status(200).json({ message: "Task updated successfully", data: updatedTask });
        } catch (error) {
            return res.status(500).send({ message: "Internal server error" })
        }
    }
    static async deleteTask(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            await TaskService.deleteTask(id);
            
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({ message: "Internal server error" })
        }
    }
}

export default TaskController;