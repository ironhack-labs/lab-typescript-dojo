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

// 1. Implement a type guard for Dog
function isDog(pet: Dog | Cat):pet is Dog {
    return pet.type === "dog";
}

// 2. Implement a type guard for Cat
function isCat(pet: Dog | Cat) : pet is Cat{
    return pet.type === "cat";
}

// 3. Implement a function that makes the pet "speak"
function speak(pet: Dog | Cat) {
    if(isDog(pet)){
        pet.bark();
    }
    else{
        pet.meow();
    }
}

// 4. Create a type for success/error responses and implement handler
interface Success<T> {
    ok: true;
    data: T;
}

interface Failure {
    ok: false;
    error: string;
}

type Result<T> = Success<T> | Failure;

function unwrap<T>(result:Result<T>): T | string {
    if(result.ok){
        return result.data;
    }
    else{
        return result.error;
    }

}
