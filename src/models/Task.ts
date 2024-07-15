import {DataTypes, Model} from "sequelize";
import {ITaskAttributes} from "../interfaces/ITaskAttributes";
import sequelize from "../config/database";

class Task extends Model<ITaskAttributes> implements ITaskAttributes {
    public id!: number;
    public title!: string;
    public description!: string;
    public status!: 'todo' | 'in progress' | 'done';
    public project_id!: number;
    public assigned_to!: number;
    public due_date!: Date;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING(1000),
        },
        status: {
            type: DataTypes.ENUM,
            values: ['todo', 'in progress', 'done'],
            defaultValue: 'todo',
        },
        project_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        assigned_to: {
            type: DataTypes.INTEGER,
        },
        due_date: {
            type: DataTypes.DATE,
        },
    },
    {
        sequelize,
        modelName: 'Task',
        timestamps: true,
    }
);
export default Task;