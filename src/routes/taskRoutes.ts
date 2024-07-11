import { Router } from 'express';
import TaskController from '../controllers/TaskController'

const router : Router = Router();

router.post('/', TaskController.createTask)
router.get('/:id', TaskController.getTask);
router.get('/', TaskController.getAllTasks);
router.patch('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);

export default router;