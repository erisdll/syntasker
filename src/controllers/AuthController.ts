import {Request, Response} from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User"

class AuthController {
    static async register(req: Request, res: Response) {
        try {
            const {username, email, password, role} = req.body;
            const hashedPassword: string = await bcrypt.hash(password, 12);
            const user: User = await User.create(
                {username, email, password: hashedPassword, role}
            );

            return res.status(201).json({user});
        } catch (error) {
            return res.status(500).send({error});
        }
    }

    static async login(req: Request, res: Response) {
        try {
            const {username, email, password} = req.body;
            const user: User | null = await User.findOne({where: username || email});

            if (!user) {
                return res.status(400).json({error: "User not found"});
            }

            const isMatch: boolean = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({error: "Username of password is incorrect"});
            }

            const token: string = jwt.sign(
                {id: user.id, role: user.role},
                process.env.JWT_SECRET!,
                {expiresIn: '1h'}
            );
            return res.status(200).json({token});

        } catch (error) {
            return res.status(500).send({error});
        }
    }

    static logout(req: Request, res: Response) {
        res.json({message: "Logged out successfully"});
    }
}

export default AuthController;