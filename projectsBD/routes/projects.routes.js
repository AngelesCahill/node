import { Router } from 'express';
const router = Router();
import {
    createProject,
    getProject,
    updateProject,
    deleteProject,
    showProject,
    getProjectTasks,
} from "../controllers/projects.controller.js";

//obtener todos los proyectos
router.get('/projects', getProject);
//Crear un nuevo proyecto
router.post("/projects", createProject);
//Actualizar un proyecto determinado
router.put("/projects/:id", updateProject);
//Eliminar un proyecto determinado
router.delete("/projects/:id", deleteProject);
//Mostrar un proyecto determinado
router.get("/projects/:id", showProject);
//obtener las tareas de un proyecto determinado
router.get("/projects/:id/tasks", getProjectTasks);

export default router;