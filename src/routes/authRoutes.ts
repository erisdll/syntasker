import {Response, Router} from 'express';
import AuthController from '../controllers/AuthController'

const router = Router();

router.get('/login', (response : Response) : void => {response.json("login")});
router.post('/register', AuthController.register);
router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout)

export default router;