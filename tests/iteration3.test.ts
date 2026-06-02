import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { BankAccount } from "../src/iteration3";

describe("iteration 3", () => {
  it("starts with a zero balance and stores the account holder", () => {
    const account = new BankAccount("Alice");

    assert.equal(account.accountHolder, "Alice");
    assert.equal(account.getBalance(), 0);
  });

  it("deposits and withdraws valid amounts", () => {
    const account = new BankAccount("Bob");

    assert.equal(account.deposit(100), 100);
    assert.equal(account.withdraw(35), 65);
  });

  it("rejects invalid transactions", () => {
    const account = new BankAccount("Charlie");

    assert.equal(account.deposit(0), "Please provide a valid amount");
    assert.equal(account.withdraw(-10), "Please provide a valid amount");
    assert.equal(account.withdraw(50), "Insufficient funds");
  });
});
