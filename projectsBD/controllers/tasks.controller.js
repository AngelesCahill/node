import { where } from "sequelize";
import { Task } from "../models/Task.js";

export const getTask = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTask = async (req, res) => {
  const { name, projectId } = req.body;
  try {
    const newTask = await Task.create({
      name,
      projectId
    });
    console.log(newTask);
    res.json(newTask);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, done, projectId } = req.body;

    const task = await Task.findByPk(id);
    task.name = name;
    task.done = done;
    task.projectId = projectId;

    await task.save();
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: {
        id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const showTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, done } = req.body;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({ message: "Tarea no existe" });
    }
    res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
