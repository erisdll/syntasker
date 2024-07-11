export interface ICommentAttributes extends Document {
    task_id: string;
    user_id: string;
    comment: string;
    created_at: Date;
}