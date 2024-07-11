export interface IUserAttributes {
    id?: string;
    username: string;
    email: string;
    password: string;
    role: 'user' | 'admin';
}