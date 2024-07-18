import bcrypt from "bcryptjs";
import User from "../models/User";
import * as jwt from "jsonwebtoken";
import { IUserAttributes } from "../interfaces/IUserAttributes";
import { IUserCredentials } from "../interfaces/IUserCredentials";
import { Op } from "sequelize";

class AuthService {
    /**
     * Registers a new user with the given attributes.
     *
     * @param {IUserAttributes} user - The attributes of the user to register.
     * @return {Promise<IUserAttributes>} The created user.
     * @throws {Error} If the email or username already exists.
     */
    static async registerUser(user: IUserAttributes): Promise<IUserAttributes> {
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

    /**
     * Signs a token for a user with the given credentials.
     * @param {IUserCredentials} credentials - The user's credentials.
     * @returns {Promise<{token: string}>} - A promise that resolves to an object containing the token.
     * @throws {Error} Throws an error if the credentials are invalid.
     */
    static async signToken(credentials: IUserCredentials): Promise<{ token: string }> {
        const { email, password } = credentials;
        const user = await User.findOne({ where: { email }});
        if (!user) {
            throw new Error('Invalid credentials');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }

        const token = await jwt.sign(
            { id: user.id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: '1h' }
        );
        return { token };
    }
}
export default AuthService;