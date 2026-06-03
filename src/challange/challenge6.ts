// challenge-06.ts

interface Dog {
    type: "dog";
    name: string;
    breed: string;
    bark(): void;
}

interface Cat {
    type: "cat";
    name: string;
    color: string;
    meow(): void;
}

type Pet = Dog | Cat;

// 1. Type guard - Dog
function isDog(pet: Pet): pet is Dog {
    return pet.type === "dog";
}

// 2. Type guard - Cat
function isCat(pet: Pet): pet is Cat {
    return pet.type === "cat";
}

// 3. speak function
function speak(pet: Pet): void {
    if (isDog(pet)) {
        pet.bark();
    } else {
        pet.meow();
    }
}

// 4. Success/Failure result types
interface Success<T> {
    ok: true;
    data: T;
}

interface Failure {
    ok: false;
    error: string;
}

type Result<T> = Success<T> | Failure;

function unwrap<T>(result: Result<T>): T {
    if (result.ok) {
        return result.data;
    } else {
        throw new Error(result.error);
    }
}