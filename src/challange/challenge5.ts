// challenge-05.ts

interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    role: "admin" | "user";
    createdAt: Date;
}

// 1. UserRegistration - id və createdAt olmadan
type UserRegistration = Omit<User, "id" | "createdAt">;

// 2. UserUpdate - id məcburi, qalanlar optional
type UserUpdate = Pick<User, "id"> & Partial<Omit<User, "id">>;

// 3. PublicUser - password olmadan
type PublicUser = Omit<User, "password">;

// 4. UserPreferences - string key, boolean value
type UserPreferences = Record<string, boolean>;

// 5. User-u PublicUser-a çevir
function toPublicUser(user: User): PublicUser {
    const { password, ...publicUser } = user;
    return publicUser;
}