import { ITaskAttributes } from "../interfaces/ITaskAttributes";
import Task from "../models/Task";

class TaskService {
    static async createTask(taskDTO: ITaskAttributes): Promise<ITaskAttributes | null> {
        const createdTask = await Task.create(taskDTO);
        
        return createdTask;
    }

    static async getTask(id: number): Promise<ITaskAttributes | null> {
        const task = await Task.findOne({ where: { id } });

        return task || null;
    }

    static async getAllTasks(): Promise<ITaskAttributes[]> {
        const tasks = await Task.findAll();

        return tasks;
    }

    static async updateTask(id: number, taskDTO: ITaskAttributes): Promise<ITaskAttributes | null> {
        await Task.update(taskDTO, { where: { id }});

        const updatedTask = await this.getTask(id);
        return updatedTask;
    }

    static async deleteTask(id: number): Promise<void> {
        await Task.destroy({ where: { id } });
    }
}

export default TaskService;