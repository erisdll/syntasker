import {DataTypes, Model} from "sequelize";
import {IProjectAttributes} from "../interfaces/IProjectAttributes";
import sequelize from "../config/database";

class Project extends Model<IProjectAttributes> implements IProjectAttributes {
    public id!: number;
    public name!: string;
    public description!: string;
    public owner_id!: number;
}

Project.init(
    {
        id: {
            type: DataTypes.INTEGER
        },
        name: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        owner_id: {
            type: DataTypes.INTEGER
        },
    },
    {
        sequelize,
        modelName: 'Project',
        timestamps: true,
    }
);
export default Project;