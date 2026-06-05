// challenge-05.ts

interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: "admin" | "user";
    createdAt: Date;
}

// 1
type UserRegistration = Omit<User, "id" | "createdAt">;

// 2
type UserUpdate = Partial<Pick<User, "email" | "password" | "name" | "role">> & {
    id: number;
};

// 3
type PublicUser = Omit<User, "password">;

// 4
type UserPreferences = Record<string, boolean>;

// 5
function toPublicUser(user: User): PublicUser {
    const { password, ...rest } = user;
    return rest;
}