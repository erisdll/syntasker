import mongoose, {Schema} from "mongoose";
import {ICommentAttributes} from "../interfaces/ICommentAttributes";

const commentSchema: Schema = new Schema<ICommentAttributes>(
    {
        task_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Task', required: true},
        user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
        comment: {type: String, required: true},
        created_at: {type: Date, default: Date.now},
    }
);

const comment: mongoose.Model<ICommentAttributes> = mongoose.model<ICommentAttributes>('Comment', commentSchema);

export default comment;