import {DataTypes, Model} from "sequelize";
import sequelize from "../config/database";

interface IUserAttributes {
    id?: string;
    username: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
}

class User extends Model<IUserAttributes> implements IUserAttributes {
    public id!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public role!: 'user' | 'admin';
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        role: {
            type: DataTypes.ENUM,
            defaultValue: "user",
        },
    },
    {
        sequelize,
        modelName: "User",
        timestamps: true,
    }
);

export default User;