import { Router } from "express";
import { authRequired } from '../middlewares/validateToken.js';
import { getTasks, getTask, updateTask, deleteTask, createTask, createSubstask, getSubtasks, deleteSubtasks, updateSubtask } from "../controllers/tasks.controller.js";

const router = Router();

router.get('/tasks', authRequired,getTasks);
router.get('/tasks/:id', authRequired,getTask);
router.post('/tasks', authRequired,createTask);
router.delete('/tasks/:id', authRequired,deleteTask);
router.put('/tasks/:id', authRequired,updateTask);

router.post('/tasks/:id/subtasks', authRequired,createSubstask);
router.get('/tasks/:id/subtasks', authRequired,getSubtasks);
router.delete('/tasks/:id/subtasks/:subtaskId', authRequired,deleteSubtasks);
router.put('/tasks/:id/subtasks/:subtaskId', authRequired,updateSubtask);



export default router;