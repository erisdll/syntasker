import {Sequelize} from "sequelize";

const sequelize = new Sequelize({
    database: 'syntasker',
    username: 'pguser',
    password: 'pgpass',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
})
export default sequelize;