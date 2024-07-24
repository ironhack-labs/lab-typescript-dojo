![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | TypeScript Dojo


<details>
  <summary>
    <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:
  - Add type annotations to function parameters and return values
  - Add type annotations to classes and methods
  - Use type annotations to define arrays, union types and optional properties
  - Create type aliases for reusable type declarations

  <br>

</details>


## Introduction

![ts-dojo](https://github.com/ironhack-labs/lab-typescript-dojo/assets/38411763/d9c7490e-7ef0-4435-b014-0be98bbd1539)

<!-- Image generated with canva.com Magic Media -->



A dojo is a traditional Japanese training hall or space dedicated to the practice and study of martial arts. Now that you've learned some TypeScript fundamentals, it's time to hone your skills in practice. In this lab, you'll delve into essential concepts such as functions, classes and methods, arrays, union types, optional properties, and type aliases.

Let's get started!

<br>



## Initial setup

To begin, follow these steps:
- Fork this repo
- Clone this repo
- Open the project folder in VSCode

To help you get started quickly, we've already configured TypeScript for the project. You'll find a `tsconfig.json` file with some settings (you don't need to modify this file). One of these settings is `"outDir": "./dist"`, which tells TypeScript to place the compiled JavaScript files in the `dist` directory.

To start the TypeScript compiler, open a terminal and run this command:

```shell
tsc --watch
```

<br>


When you run that command, you will see that a new directory named `dist` is generated (this is the directory that contains the compiled JavaScript code).

The flag `--watch` enables the TypeScript compiler to watch for changes in TypeScript files and automatically recompile them whenever there are modifications (remember to keep that process open in your terminal).

Note: if you get an error "command not found: tsc", you will need to install TypeScript first (`npm install -g typescript`).

<br>



## Submission

- Upon completion, run the following commands:

  ```shell
  git add .
  git commit -m "Completed lab"
  git push origin main
  ```

- Create a Pull Request and submit your assignment.

<br>



## Iteration 1 | Example + General guidelines


### 1.1 - Implement the function `sayHello()`

For this iteration, you will work on the file `src/iteration1.ts`. On that file, create a function that meets the following requirements:
- Name of the function: `sayHello()`
- Parameters:
    - `userName` (a string)
- Return value: 
  - should return a string in the format `Hello [name], how are you?`, where `[name]` is the user name
  - Example: `Hello Alice, how are you?`
- Note: remember to include type annotations for your function parameters and return values.

Once you've solved it or, if you get stuck, check the solution below :point_down:

<details>
  <summary><b>Solution</b></summary>

  ```ts
    function sayHello(userName: string): string {
        return `Hello ${userName}, how are you?`;
    }
  ```
</details>

<br>


### 1.2 - Test your code

For this lab, we will not have automated testing. However, you can (and you should) test if your code works as expected. To do that, follow these steps:

1. In the file corresponding to each iteration (in this case, `src/iteration1.ts`), write some code to test your functionality. For example:

    ```ts
    function sayHello() {
        //...
    }

    const result1 = sayHello("Alice");
    console.log(result1);

    const result2 = sayHello("Bob");
    console.log(result2);
    ```

2. Since we're running `tsc --watch`, a JavaScript file will be generated. To execute your code, open a second terminal and run this command: `node dist/iteration1.js` (you will see the result of your console.log's).

3. Once you've confirmed everything is working, you can delete the code you used for testing.


Note: do not modify the `.js` files (you should write all your code in the directory `/src` files; the files in the `/dist` directory should be automatically generated).

<br>


### 1.3 - General guidelines for this lab

For the following iterations, follow these guidelines:
- For each iteration, work on the corresponding file (e.g., for Iteration 2, write your code in the file `src/iteration2.ts`, etc.).
- If you encounter difficulties, we have provided **hints and solutions**.
- Remember that you can **test your code**, as we've seen in this iteration.
- **After solving each task, compare your solution with the provided one** to learn and improve.

<br>



## Iteration 2 | Functions

For this iteration, you'll be implementing several functions. Make sure to include **type annotations** for your function parameters and return values.
<br>

### 2.1 - Implement the function `calcMultiplication()` 

- Name of the function: `calcMultiplication`
- Parameters:
    - `a` (a number)
    - `b` (also a number)
- Return value: should return the result of multiplying those two numbers.

<details>
  <summary><b>Solution</b></summary>

  ```ts
    function calcMultiplication(a: number, b: number): number {
        return a * b;
    }
  ```

</details>

<br>


### 2.2 - Implement the function `isEven()` 

- Name of the function: `isEven`
- Parameters:
    - `n` (a number)
- Return value: should return a boolean,
  - if `n` is even, return `true`
  - if `n` is odd, return `false`


<details>
  <summary><b>Solution</b></summary>

  ```ts
    function isEven(n: number): boolean {
        return n % 2 === 0;
    }
  ```

</details>

<br>


### 2.3 - Implement the function `calcArrayAverage()` 

- Name of the function: `calcArrayAverage`
- Parameters:
    - `numbersArr` (an array of numbers)
- Return value: should return a string or a number,
    - if the array is empty, return the message `Please provide an array with at least one element`.
    - if the array is not empty, return the average (i.e., the result of adding all the numbers and dividing by the number of elements in the array)


<details>
  <summary><b>Hint 1</b></summary>
  <br>

  In TypeScript, you can create a function that returns either a number or a string by using a union type. For example:

  ```ts
    function doSomething(): number | string {
        // ...
    }
  ```
</details>


<details>
  <summary><b>Hint 2</b></summary>

  To calculate the sum of all numbers in the array, you can use the method [reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce). Then, divide the sum by the number of elements in the array and return the result.
  <br>
</details>


<details>
  <summary><b>Solution</b></summary>

  ```ts
    function calcArrayAverage(numbersArr: number[]): number | string {

        if (numbersArr.length === 0) {
            return 'Please provide an array with at least one element';
        }

        const total = numbersArr.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        });

        const average = total / numbersArr.length;

        return average;
    }
  ```

  :bulb: Note:

  - In the solution above, we're using implicit types for the variables `total` and `average` (TypeScript can infer that both of them will be numbers).
  - We haven't added type annotations for `accumulator` and `currentValue` either (TypeScript is also able to infer their values from the context :sunglasses:).

</details>

<br>



## Iteration 3 | Classes


### 3.1 - Create the class `BankAccount`

- This class should have two properties (also known as fields): 
    - `balance` (number), with an initial value of `0`.
    - `accountHolder` (string), with no initial value. This will be the name of the account holder.
- Implement a `constructor()` method:
    - This method should take 1 argument: `accountHolder` (string).
    - Your constructor method should use this argument to initialize the property `accountHolder` (i.e., `this.accountHolder = accountHolder`).
- Implement the method `getBalance()`:
    - This method takes zero arguments
    - It should return the current balance.


<details>
  <summary><b>Hint</b></summary>
  <br>

  Here's an example of a class with two properties and a constructor method:

  ```ts
    class Company {
        cash: number = 0;
        location: string;

        constructor(location: string){
            this.location = location;
        }

        // ...
        
    }
  ```
</details>


<details>
  <summary><b>Solution</b></summary>
  <br>

  ```ts
    class BankAccount {
        balance: number = 0;
        accountHolder: string;

        constructor(accountHolder: string){
            this.accountHolder = accountHolder;
        }

        getBalance(): number{
            return this.balance;
        }
    }  
  ```
</details>

<br>


### 3.2 - Add new methods to the class `BankAccount`

Next, we will add some more methods to our class `BankAccount`

- Implement the method `deposit()`:
    - This method should take 1 argument: `amount` (number).
    - If `amount` is less than or equal to zero, return the message: `Please provide a valid amount`.
    - If `amount` is greater than zero, add the amount to the current balance and return the new balance.

- Implement the method `withdraw()`:
    - This method should take 1 argument: `amount` (number).
    - If `amount` is less than or equal to zero, return the message: `Please provide a valid amount`.
    - If `amount` is greater than the current balance, return the message: `Insufficient funds`.
    - Otherwise, subtract the amount from the current balance and return the new balance.


<details>
  <summary><b>Solution</b></summary>
  <br>

  ```ts
    class BankAccount {
        
        // ...

        deposit(amount: number): number | string {
            if(amount <= 0) {
                return `Please provide a valid amount`;
            }

            this.balance += amount;
            return this.balance;
        }

        withdraw(amount: number): number | string {
            if(amount <= 0) {
                return `Please provide a valid amount`;
            }
            if (amount > this.balance) {
                return `Insufficient funds`;
            }

            this.balance -= amount;
            return this.balance;
        }

    }  
  ```
</details>

<br>



## Iteration 4 | Type aliases


### 4.1 - Create a type alias for books

Declare a type alias `Book`, with the following properties:
- `title` (string)
- `year` (number)
- `genres` (array of strings)
- `rating` (number) - this should be an optional property 
- `author` (string)
- `numberOfPages` (number) - this should be an optional property 

<details>
  <summary><b>Hint</b></summary>
  <br>

  You can declare a type alias with this syntax:

  ```ts
    type Player = {
        name: string;
        year: number;
    };
  ```

  In case you don't remember the syntax to define optional properties, we encourage you to do some research :wink:
  <br>

</details>

<details>
  <summary><b>Solution</b></summary>
  <br>

  ```ts
    type Book = {
        title: string;
        year: number;
        genres: string[];
        rating?: number;
        author: string;
        numberOfPages?: number;
    }  
  ```
</details>

<br>


### 4.2 - Create a type alias for movies

Declare a type alias `Movie`, with the following properties:
- `title` (string)
- `year` (number)
- `genres` (array of strings)
- `rating` (number) - this should be an optional property 
- `director` (string)
- `durationInMinutes` (number) - this should be an optional property 

<details>
  <summary><b>Solution</b></summary>
  <br>

  ```ts
    type Movie = {
        title: string;
        year: number;
        genres: string[];
        rating?: number;
        director: string;
        durationInMinutes?: number;
    }  
  ```
</details>

<br>


### 4.3 - Create a type alias for music albums

Declare a type alias `MusicAlbum`, with the following properties:
- `title` (string)
- `year` (number)
- `genres` (array of strings)
- `rating` (number) - this should be an optional property 
- `artist` (string)
- `numberOfTracks` (number) - this should be an optional property 
- `durationInMinutes` (number) - this should be an optional property 
- `albumType` - this property should have only these possible values: 'Studio Album', 'Live Album', 'Soundtrack', or 'Other'.

<details>
  <summary><b>Solution</b></summary>
  <br>

  ```ts
    type MusicAlbum = {
        title: string;
        year: number;
        genres: string[];
        rating?: number;
        artist: string;
        numberOfTracks?: number;
        durationInMinutes?: number;
        albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
    }  
  ```
</details>

<br>


### 4.4 - Implement the function `getYearsSinceRelease()` 

- Name of the function: `getYearsSinceRelease`
- Parameters:
    - `mediaItem` (an object of type `Book`, `Movie`, or `MusicAlbum`).
- Return value: should return the number of years since the media item was released based on the current year (for example, if a book published in 2000 is passed as an argument and we're in 2024, it should return 24).

<details>
  <summary><b>Hint</b></summary>
  <br>

  To add type annotations to your function parameters, use a union type. Example:

  ```ts
    function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum) {
        // ...
    }
  ```

  Remember to add a type annotation for the return value. <br>
  If you don't know how to calculate the difference in years, don't hesitate to do some research.
  <br>
</details>

<details>
  <summary><b>Solution</b></summary>
  <br>

  ```ts
    function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
        const currentYear = new Date().getFullYear();
        const difference = currentYear - mediaItem.year;
        return difference;
    }  
  ```
</details>


<br>
<hr>



## Bonus: Iteration 5 | Interfaces

In the previous iteration, the types `Book`, `Movie`, and `MusicAlbum` have a few properties in common (`title`, `year`, `genres` and `rating`), and we're repeating the type definitions for them.

In cases like this, we may want to consider reusing those type definitions. We can do that using type aliases and [intersection types](https://graphite.dev/guides/extending-types-typescript#extending-type-aliases) or using interfaces and inheritance. Since interfaces are designed to be extended, they may be a better option for this particular problem (the final code would be a bit easier to read).


In this iteration you will work on the file `src/iteration5.ts`. We will create the same functionality that we had in the previous iteration but using interfaces (instead of type aliases) and reusing the type definitions for the common properties (`title`, `year`, `genres`, `rating`).

<br>

### 5.1 - Create a common interface for shared properties

Declare an interface `MediaItem` with the following properties:
- `title` (string)
- `year` (number)
- `genres` (array of strings)
- `rating` (number) - this should be an optional property


<details>
  <summary><b>Solution</b></summary>
  <br>

  ```ts
  interface MediaItem {
      title: string;
      year: number;
      genres: string[];
      rating?: number;
  }
  ```
</details>

<br>


### 5.2 - Create specific interfaces for books, movies, and music albums

Declare an interface `Book` that extends `MediaItem` and includes the following properties:
- `author` (string)
- `numberOfPages` (number) - this should be an optional property

Declare an interface `Movie` that extends `MediaItem` and includes the following properties:
- `director` (string)
- `durationInMinutes` (number) - this should be an optional property

Declare an interface `MusicAlbum` that extends `MediaItem` and includes the following properties:
- `artist` (string)
- `numberOfTracks` (number) - this should be an optional property
- `durationInMinutes` (number) - this should be an optional property
- `albumType` - this property should have only these possible values: 'Studio Album', 'Live Album', 'Soundtrack', or 'Other'.


<details>
  <summary><b>Hint</b></summary>
  <br>

  You can extend an interface using this syntax:

  ```ts
  interface Animal {
    name: string;
    location: string;
  }
  
  interface Dog extends Animal {
    breed: string;
  }
  ```
  
  In the example above, the interface Dog has three properties: 
  - name (inherited from `Animal`)
  - location (inherited from `Animal`)
  - breed
  <br>
</details>

<details>
  <summary><b>Solution</b></summary>
  <br>

  ```ts

  // ...

  interface Book extends MediaItem {
      author: string;
      numberOfPages?: number;
  }

  interface Movie extends MediaItem {
      director: string;
      durationInMinutes?: number;
  }

  interface MusicAlbum extends MediaItem {
      artist: string;
      numberOfTracks?: number;
      durationInMinutes?: number;
      albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
  }
  ```
</details>

<br>


### 5.3 - Implement the function getYearsSinceRelease()

The code for this function can be the same that we had. The only difference is that we can change the type annotation for the parameter `mediaItem`:
- before, it was of type `Book | Movie | MusicAlbum`
- now, we can just say it is of type `MediaItem`

<details>
  <summary><b>Solution</b></summary>
  <br>

  ```ts
  function getYearsSinceRelease(mediaItem: MediaItem): number {
      const currentYear = new Date().getFullYear();
      const difference = currentYear - mediaItem.year;
      return difference;
  }
  ```

  This is also completely valid:

  ```ts
  function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number { 
    // ...
  }
  ```
</details>


<br><br>


Happy coding! :heart:

<br>



## FAQs


<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>


  <br>

  If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

  For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources. 

  Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>When I run the command "tsc --watch", I get an error "command not found: tsc"</summary>


  <br>

  Make sure you have `typescript` installed in your machine:


  ```bash
    npm install -g typescript
  ```

  This will install the TypeScript Compiler globally on your system, making it available to all of your projects.

  <br>

  [Back to top](#faqs)

</details>



<details>
  <summary>Do I need to add type annotations to everything?</summary>


  <br>

  No. In many cases, TypeScript can infer the types from the context and using implicit types can make your code more clear and readable.


  For example:

  ```ts    
  function calcTotal(numberOfProducts: number, price: number): number {

      const total = numberOfProducts * price; // implicit (TypeScript can infer that "total" will be a number)

      return total;
  }
  ```


  <br>

  [Back to top](#faqs)

</details>



<details>
  <summary>Why is the directory "dist" included in the file ".gitignore"?</summary>


  <br>

  It is a common practice to add the directory with the compiled JavaScript code (e.g., `/dist`) to the `.gitignore` file. This practice helps keep your repository clean and avoids committing generated files that can be built from source.

  <br>

  [Back to top](#faqs)

</details>


<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>


  <br>

  There are a couple of possible reasons why you may be unable to *push* changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```shell
   git add .
   git commit -m "Your commit message"
   git push
   ```

   <br>

   

  2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a *Fork* first, you do not have write access to the repository.
     To check which remote repository you have cloned, run the following terminal command from the project folder:
     
     ```shell
     git remote -v
     ```
     
     

  If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

  **Note:** You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

  [Back to top](#faqs)

</details>
