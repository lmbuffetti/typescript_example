// string
let myName = 'Mattia';
//myName = 28;

// number
let myAge = 33;
// myAge = 'John';

let hasHobbies = true;
// hasHobbies = 1;

// assign types
let myRealAge; // It works becuase you assign type any
myRealAge = 27;
myRealAge = '27';

// assign types
let myRealAgeNew : number;
myRealAgeNew = 27;
// myRealAgeNew = '27';

// array
let hobbies = ["Cooking", "Sports"];
// hobbies = [100]; Error
hobbies = ["test"];
console.log(hobbies[0]);

// tuples
let address: [string, number] = ["Superstreet", 99];

// enum
enum Color {
    Gray, // 0
    Green = 100, // 1
    Blue = 2 // 2
}

let myColor: Color = Color.Green;

console.log(myColor);

// any
let car: any = 'BMW';
console.log(car);
car = { brand: 'BMW, series, 3' };
console.log(car);

// functions
function returnMyName():string {
    return myName;
}
console.log(returnMyName());

// void
function sayHello(): void {
    console.log('Hello!')
}

// argument types
function multiply(value1: number, value2: number) {
    return value1 * value2;
}
console.log(multiply(2, 10));

// function types
let myMultiply: (val1: number, val2: number) => number;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(2, 5));

// objects
let userData: { name: string, age: number } = {
    name: "Mattia",
    age: 27,
};

// complex object
let complex: {data: number[], output: (all: boolean) => number[]} = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

//type alias

type Complex = {data: number[], output: (all: boolean) => number[]};

let complex2: Complex = {
    data: [100, 3.99, 10],

    output: function (all: boolean): number[] {
        return this.data;
    }
};

// union types
let myRealRealAge: number | string = 27;
myRealRealAge = "27";
// myRealRealAge = true;

// check types
let finalValue = 27;
if (typeof finalValue == 'number') {
    console.log('Final value is a number')
}

// never type
function neverReturn():never {
    throw new Error('An error!');
}

// Nullable Types
let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeAny: number | null = null;
canThisBeAny = 12;