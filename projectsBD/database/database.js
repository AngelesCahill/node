import Sequelize from "sequelize";

export const sequelize = new Sequelize('projects', 'postgres', 'mao9684', {
    host: 'localhost',
    dialect: 'postgres'
});