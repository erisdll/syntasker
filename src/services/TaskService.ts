import { ITaskAttributes } from "../interfaces/ITaskAttributes";
import Task from "../models/Task";

class TaskService {
    static async createTask(taskDTO: ITaskAttributes): Promise<Task> {
        const createdTask = await Task.create(taskDTO);
        return createdTask;
    }

    static async getTask(id: string): Promise<Task | null> {
        const task = await Task.findByPk(id);
        return task;
    }

    static async getAllTasks(): Promise<Task[]> {
        const tasks = await Task.findAll();
        return tasks;
    }

    static async updateTask(id: string, taskDTO: ITaskAttributes): Promise<Task | null> {
        const updatedTask = await Task.update(taskDTO, { where: { id } });

        if (!updatedTask) {
            return null;
        }

        return Task.findByPk(id);
    }

    static async deleteTask(id: string): Promise<void> {
        const deleted = await Task.destroy({ where: { id } });
        if (deleted == 0) {
            throw new Error("Task not found");
        }
    }
}

export default TaskService;