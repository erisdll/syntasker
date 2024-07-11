import { NextFunction, Request, Response } from 'express';
import Task from "../models/Task";

class TaskController {
    static async createTask(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
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