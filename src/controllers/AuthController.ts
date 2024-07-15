import {Request, Response} from "express";
import {IUserAttributes} from "../interfaces/IUserAttributes";
import AuthService from "../services/AuthService";

class AuthController {
    static async register(req: Request, res: Response) {
        try {
            const newUser: IUserAttributes = req.body;
            if (!newUser.username || !newUser.email || !newUser.password) {
                return res.status(400).json({error: "The request body must contain username, email and password"});
            } 

            
            const user = await AuthService.register(newUser);

            return res.status(201).json({message: "User created successfully", data: user});
        } catch (error : any) {
            return res.status(500).send({error});
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const {email, password} : IUserAttributes = req.body;
            const user = await AuthService.login(email, password);
            return res.status(200).json({message: "Logged in successfully", user});
        } catch (error : any) {
            return res.status(500).send({error: error.message});
        }
    }

    static logout(req: Request, res: Response) {
        res.json({message: "Logged out successfully"});
    }
}

export default AuthController;