import { Router } from "express";
const router = Router();
import {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  showTask,
} from "../controllers/tasks.controller.js";

//obtener todos los proyectos
router.get("/tasks", getTask);
//Crear un nuevo proyecto
router.post("/tasks", createTask);
//Actualizar un proyecto determinado
router.put("/tasks/:id", updateTask);
//Eliminar un proyecto determinado
router.delete("/tasks/:id", deleteTask);
//Mostrar un proyecto determinado
router.get("/tasks/:id", showTask);

export default router;
