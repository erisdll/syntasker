import { Request, Response } from 'express';
import Project from "../models/Project";

class ProjectController {
    static async createProject(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({error})
        }
    }
    static async getProject(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({error})
        }
    }
    static async getAllProjects(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({error})
        }
    }
    static async updateProject(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({error})
        }
    }
    static async deleteProject(req: Request, res: Response): Promise<Response> {
        try {
            return res.status(200).json("Hello World")
        } catch (error) {
            return res.status(500).send({error})
        }
    }
}

export default ProjectController;