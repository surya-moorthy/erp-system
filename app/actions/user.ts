"use server"

import { client } from "@/db"
import bcrypt from "bcrypt"
import { SignJWT } from "jose"
import { cookies } from "next/headers"

type SigninTypes = {
    email: string,
    password: string,
    role?: string
}

type RegisterTypes = {
    email: string,
    name: string,
    password: string,
    role?: string
}

type UpdateUserTypes = {
    userId: string,
    email?: string,
    name?: string,
    password?: string,
    role?: string
}

type ResetPasswordTypes = {
    email: string,
    newPassword: string
}

const secret = process.env.JWT_SECRET || "secret";
const key = new TextEncoder().encode(secret);

const encrypt = async (payload: any) => {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('10s') // expires in 10 seconds
    .sign(key);
};

export async function signin({ email, password }: SigninTypes) {
    try {
        const user = await client.user.findUnique({ where: { email } , select : {name : true,email : true,password :  true}});
        if (!user) return "User is not authorized";

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return "Invalid credentials";

        const sessionData = { email: user.email, name: user.name };
       
        console.log(sessionData);

        const expires = new Date(Date.now() + 10*1000);
        const session = await encrypt({sessionData , expires});

        (await cookies()).set('session',session,{expires,httpOnly : true});
        // Here you'd typically return a token or session
        return { message: "Sign in successful", session };
    } catch (err) {
        console.error(err);
        return "Sign in failed";
    }
}

export async function register({ email, name, password, role }: RegisterTypes) {
    try {
        const existing = await client.user.findUnique({ where: { email } });
        if (existing) return "User already exists";

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await client.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
                role: role || "user"
            }
        });

        return { message: "Registration successful", user: newUser };
    } catch (err) {
        console.error(err);
        return "Registration failed";
    }
}

export async function updateUser({ userId, email, name, password, role }: UpdateUserTypes) {
    try {
        const data: any = {};

        if (email) data.email = email;
        if (name) data.name = name;
        if (password) data.password = await bcrypt.hash(password, 10);
        if (role) data.role = role;

        const updatedUser = await client.user.update({
            where: { id: userId },
            data
        });

        return { message: "User updated", user: updatedUser };
    } catch (err) {
        console.error(err);
        return "Update failed";
    }
}

export async function resetPassword({ email, newPassword }: ResetPasswordTypes) {
    try {
        const user = await client.user.findUnique({ where: { email } });
        if (!user) return "User not found";

        const hashedPassword = await bcrypt.hash(newPassword, 10);

        await client.user.update({
            where: { email },
            data: { password: hashedPassword }
        });

        return { message: "Password reset successful" };
    } catch (err) {
        console.error(err);
        return "Password reset failed";
    }
}

// NOTE: Logout typically depends on how auth is handled (session/cookie/JWT)
export async function logout() {
    try {
        // Clear session/token depending on your setup
        return { message: "Logged out successfully" };
    } catch (err) {
        console.error(err);
        return "Logout failed";
    }
}
