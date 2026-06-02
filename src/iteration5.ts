// challenge-05.ts

interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: "admin" | "user";
    createdAt: Date;
}

// 1. Create a type for user registration (no id, no createdAt)
type UserRegistration = Omit<Omit<User, "id">, "createdAt">

// 2. Create a type for updating user (all fields optional except id)
type UserUpdate = Partial<Omit<User, "id">> & Pick<User, "id">;

// 3. Create a type for public user data (no password)
type PublicUser = Omit<User, "password">

// 4. Create a type for user preferences using Record
type UserPreferences = Record<string, boolean>

// 5. Implement a function that converts User to PublicUser
function toPublicUser(user:User):PublicUser {
    const {password, ...publicUser} = user;
    return publicUser;
}
