import bcrypt from "bcryptjs";
import User from "../models/User";
import * as jwt from "jsonwebtoken";
import { IUserAttributes } from "../interfaces/IUserAttributes";

class AuthService {
    static async register(user: IUserAttributes): Promise<IUserAttributes> {
        const existingUser = await User.findOne({ where: { email: user.email } });
        if (existingUser) {
            throw new Error('Email already exists');
        }

        const existingUsername = await User.findOne({ where: { username: user.username } });
        if (existingUsername) {
            throw new Error('Username already exists');
        }

        const hashedPassword = await bcrypt.hash(user.password, 14);
        const createdUser = await User.create({
            ...user,
            password: hashedPassword,
        });

        return createdUser;
    }

    static async login(email: string, password: string): Promise<{token: string}> {

        const user = await User.findOne({ where: { email } });

        if (!user) {
            throw new Error('Invalid email or password');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid email or password2');
        }

        const token = await jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: '1h' }
        );
        return {token};
    }

    static async logout(token: string): Promise<void> {
        try {
            jwt.verify(token, process.env.JWT_SECRET!);
        } catch (error) {
            console.error("Error logging out user:", error);
        }
    }
}
export default AuthService;