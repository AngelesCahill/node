import { DataTypes } from "sequelize";
import { sequelize } from '../database/database.js';
import { Task } from './Task.js';

export const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
    },
    priority: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    }
});

//relacionar las tablas
Project.hasMany(Task, {
    foreingKey: 'projectId',
    sourceKey: 'id'
});

Task.belongsTo(Project, {
    foreingKey: 'projectId',
    targetId: 'id'
});