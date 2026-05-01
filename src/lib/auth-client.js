import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: "https://skillsphere-drab.vercel.app/"
});

export const { signIn, signUp, signOut, updateUser, useSession } = authClient;