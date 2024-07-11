import { Router } from 'express';
import ProjectController from '../controllers/ProjectController'

const router : Router = Router();

router.post('/', ProjectController.createProject);
router.get('/:id', ProjectController.getProject);
router.get('/', ProjectController.getAllProjects);
router.patch('/:id', ProjectController.updateProject);
router.delete('/:id', ProjectController.deleteProject);

export default router;