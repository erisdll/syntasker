export interface ITaskAttributes {
    id?: number;
    title: string;
    description: string;
    status: 'todo' | 'in progress' | 'done';
    project_id: number;
    assigned_to?: number;
    due_date?: Date;
}