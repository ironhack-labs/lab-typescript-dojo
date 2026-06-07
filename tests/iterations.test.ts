import { sayHello } from "../src/iteration1";
import { calcMultiplication, isEven, calcArrayAverage } from "../src/iteration2";
import { BankAccount } from "../src/iteration3";
import { getYearsSinceRelease as getYearsSinceReleaseAlias } from "../src/iteration4";
import { getYearsSinceRelease as getYearsSinceReleaseInterface } from "../src/iteration5";

describe("Iteration 1: Example", () => {
    test("sayHello should return greeting", () => {
        expect(sayHello("Alice")).toBe("Hello Alice, how are you?");
    });
});

describe("Iteration 2: Functions", () => {
    test("calcMultiplication should multiply numbers", () => {
        expect(calcMultiplication(3, 4)).toBe(12);
        expect(calcMultiplication(-2, 5)).toBe(-10);
    });

    test("isEven should check evenness", () => {
        expect(isEven(4)).toBe(true);
        expect(isEven(7)).toBe(false);
    });

    test("calcArrayAverage should calculate average or return error message", () => {
        expect(calcArrayAverage([2, 4, 6])).toBe(4);
        expect(calcArrayAverage([])).toBe("Please provide an array with at least one element");
    });
});

describe("Iteration 3: Classes", () => {
    test("BankAccount should manage balance", () => {
        const acc = new BankAccount("Alice");
        expect(acc.getBalance()).toBe(0);
        expect(acc.deposit(100)).toBe(100);
        expect(acc.getBalance()).toBe(100);
        expect(acc.withdraw(40)).toBe(60);
        expect(acc.withdraw(100)).toBe("Insufficient funds");
        expect(acc.deposit(-5)).toBe("Please provide a valid amount");
        expect(acc.withdraw(-5)).toBe("Please provide a valid amount");
    });
});

describe("Iteration 4: Type aliases", () => {
    test("getYearsSinceRelease should calculate years", () => {
        const book = { title: "Title", year: 2020, genres: ["Fict"], author: "Auth" };
        const currentYear = new Date().getFullYear();
        expect(getYearsSinceReleaseAlias(book)).toBe(currentYear - 2020);
    });
});

describe("Iteration 5: Interfaces", () => {
    test("getYearsSinceRelease should calculate years", () => {
        const movie = { title: "Title", year: 2018, genres: ["SciFi"], director: "Dir" };
        const currentYear = new Date().getFullYear();
        expect(getYearsSinceReleaseInterface(movie)).toBe(currentYear - 2018);
    });
});
