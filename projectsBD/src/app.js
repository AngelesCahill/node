import express from "express";
import projectsRoutes from "../routes/projects.routes.js";
import taskRoutes from "../routes/task.routes.js";

const app = express();

// middlewares
app.use(express.json()); //interpreta los datos json del req.body

app.use(projectsRoutes);
app.use(taskRoutes);

export default app;
