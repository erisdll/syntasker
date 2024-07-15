import bcrypt from "bcryptjs";
import User from "../models/User";
import * as jwt from "jsonwebtoken";
import {IUserAttributes} from "../interfaces/IUserAttributes";

class AuthService {
    static async register(user: IUserAttributes): Promise<IUserAttributes | null> {
        const {password : string, ...userData} = user;
        const hashedPassword: string = await bcrypt.hash(user.password, 14);

        try {
            const newUser : IUserAttributes = await User.create({
                ...userData,
                password: hashedPassword,
            });
            return newUser;
        } catch (error) {
            throw new Error("Error registering user: " + error);
        }
    }

    static async login(email: string, password: string): Promise<IUserAttributes | null> {
        try {
            const user: IUserAttributes | null = await User.findOne({where: {email}});
            if (!user) {
                return null;
            }
            const isMatch: boolean = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return null;
            }
            return user;
        } catch (error) {
            console.error("Error logging in user:", error);
            return null;
        }
    }

    static async logout(token: string): Promise<void> {
        try {
            jwt.verify(token, process.env.JWT_SECRET!);
        } catch (error) {
            console.error("Error logging out user:", error);
        }
    }
}
