import {Sequelize} from "sequelize";
import dotenv from "dotenv";
dotenv.config({path: './dev.env'});

const sequelize : Sequelize = new Sequelize({
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    host: process.env.DATABASE_HOST,
    dialect: 'postgres',
    port: Number(process.env.DATABASE_PORT),
})

export default sequelize;