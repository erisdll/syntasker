import {NextFunction, Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User"

class AuthController {
    static async register(req: Request, res: Response, next: NextFunction ) {
        try {
            const { username, email, password, role } = req.body;
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = await User.create({username, email, password: hashedPassword, role});
            return res.status(201).send({ user });
        } catch (error) {
            return res.status(500).send({ error});
        }
    }

    static async login(req: Request, res: Response) {}

    static logout(req: Request, res: Response) {
        res.json({message: 'Logged out successfully'});
    }
}

export default AuthController;