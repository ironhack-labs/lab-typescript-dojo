import { productName, price, isAvailable, categories, formatPrice, calculateTax } from "../src/challenge-01";
import { describeProduct } from "../src/challenge-02";
import { getStatusMessage, findById, handleResponse } from "../src/challenge-03";
import { first, wrap, paginate } from "../src/challenge-04";
import { toPublicUser } from "../src/challenge-05";
import { isDog, isCat, speak, unwrap } from "../src/challenge-06";

describe("Challenge 1: Basic Types", () => {
    test("variables have correct values", () => {
        expect(productName).toBe("Laptop");
        expect(price).toBe(999.99);
        expect(isAvailable).toBe(true);
        expect(categories).toContain("Electronics");
    });

    test("formatPrice formats currency", () => {
        expect(formatPrice(12.345)).toBe("$12.35");
    });

    test("calculateTax calculates tax amount", () => {
        expect(calculateTax(100, 0.15)).toBe(15);
    });
});

describe("Challenge 2: Interfaces", () => {
    test("describeProduct displays product details", () => {
        const prod = { id: 1, name: "Phone", price: 500, inStock: true, categories: [] };
        expect(describeProduct(prod)).toBe("Phone: $500");
    });
});

describe("Challenge 3: Union Types", () => {
    test("getStatusMessage returns status message", () => {
        expect(getStatusMessage("pending")).toBe("Your order is pending.");
        expect(getStatusMessage("completed")).toBe("Your order has been completed.");
    });

    test("findById describes by ID type", () => {
        expect(findById(123)).toBe("ID: 123");
        expect(findById("abc")).toBe("Reference: abc");
    });

    test("handleResponse handles API responses", () => {
        expect(handleResponse({ status: "success", data: "ok" })).toBe("ok");
        expect(() => handleResponse({ status: "error", message: "fail" })).toThrow("fail");
    });
});

describe("Challenge 4: Generics", () => {
    test("first returns first element", () => {
        expect(first([1, 2, 3])).toBe(1);
        expect(first([])).toBeUndefined();
    });

    test("wrap wraps value", () => {
        expect(wrap("test")).toEqual({ value: "test" });
    });

    test("paginate paginates list", () => {
        const items = [1, 2, 3, 4, 5];
        const res = paginate(items, 2, 2);
        expect(res).toEqual({
            items: [3, 4],
            page: 2,
            totalPages: 3,
            totalItems: 5
        });
    });
});

describe("Challenge 5: Utility Types", () => {
    test("toPublicUser strips password", () => {
        const user = {
            id: 1,
            email: "bob@bob.com",
            password: "secretpassword",
            name: "Bob",
            role: "user" as const,
            createdAt: new Date()
        };
        const publicUser = toPublicUser(user);
        expect(publicUser).not.toHaveProperty("password");
        expect(publicUser.id).toBe(1);
    });
});

describe("Challenge 6: Type Guards", () => {
    test("type guards classify pets", () => {
        const dog = { type: "dog" as const, name: "Rover", breed: "Golden", bark: jest.fn() };
        const cat = { type: "cat" as const, name: "Whiskers", color: "black", meow: jest.fn() };
        expect(isDog(dog)).toBe(true);
        expect(isDog(cat)).toBe(false);
        expect(isCat(cat)).toBe(true);
        expect(isCat(dog)).toBe(false);
    });

    test("speak calls correct pet function", () => {
        const dog = { type: "dog" as const, name: "Rover", breed: "Golden", bark: jest.fn() };
        const cat = { type: "cat" as const, name: "Whiskers", color: "black", meow: jest.fn() };
        speak(dog);
        expect(dog.bark).toHaveBeenCalled();
        speak(cat);
        expect(cat.meow).toHaveBeenCalled();
    });

    test("unwrap unwraps result or throws", () => {
        expect(unwrap({ ok: true, data: "done" })).toBe("done");
        expect(() => unwrap({ ok: false, error: "err" })).toThrow("err");
    });
});
