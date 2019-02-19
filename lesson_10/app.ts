interface NamedPerson {
    firstName: string;
    age?: number; // the key is age? because is optional
    [propName: string]: any; // It is not an array but a general declaration if you don't know the name of key
    greet(lastName: string): void;
}

function greet(person: NamedPerson) { // I add {name: string} so at least name is required
    console.log("Hello, " + person.firstName)
}

function changeName(person: NamedPerson) {
    person.firstName = 'Anna';
}

const person: NamedPerson = {
    firstName: 'John',
    age: 27,
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string): void {
        console.log("Hi, I am "+ this.firstName + " " + lastName);
    }
};

greet(person);
changeName(person);
greet(person);
person.greet('Anything');

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string): void {
        console.log("Hi, I am "+ this.firstName + " " +  lastName);
    }
}

const myPerson = new Person();
myPerson.firstName = "John";
myPerson.lastName = "Doe";
greet(myPerson);
myPerson.greet(myPerson.lastName);

// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(20, 10));


// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number; // now it is required
}

const oldPerson: AgedPerson = {
  age: 27,
  firstName: "John",
  greet(lastName: string): void {
      console.log("Hello")
  }
};

console.log(oldPerson);