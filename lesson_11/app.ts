// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo("Max").length); //3
console.log(echo(27));
console.log(echo(27).length); // undefined
console.log(echo({name: "Max", age: 27}));
console.log(echo({name: "Max", age: 27}).length); // undefined

// Better Generic
function betterEcho<T>(data: T) { // <T> tells to typescript that is generic and get the type
    return data;
}

console.log(betterEcho("Max"));
console.log(betterEcho("Max").length); //3
console.log(betterEcho(27));
// console.log(betterEcho(27).length); // get error
console.log(betterEcho({name: "Max", age: 27}));
//console.log(betterEcho({name: "Max", age: 27}).length); // get error

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
// testResults.push("string"); // Error not possible to push string on number array
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

// Generic types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// Generic Class
class SimpleMathClass<T> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue; // With the plus before you get as number (prevent error on generic)
    }
}

const simpleMath = new SimpleMathClass();
simpleMath.baseValue = 10;
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());

class SimpleMathClass2<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue; // With the plus before you get as number (prevent error on generic)
    }
}

const simpleMath2 = new SimpleMathClass2<string>();
simpleMath2.baseValue = "10";
simpleMath2.multiplyValue = "20";
console.log(simpleMath2.calculate());

// Multiple Types
class SimpleMathClass3<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue; // With the plus before you get as number (prevent error on generic)
    }
}

const simpleMath3 = new SimpleMathClass3<string, number>();
simpleMath3.baseValue = "10";
simpleMath3.multiplyValue = 20;
console.log(simpleMath3.calculate());

// Test
class MyMap<T> {
    private data: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.data[key] = item;
    }

    getItem(key: string) {
        return this.data[key];
    }

    clear() {
        this.data = {};
    }

    printMap() {
        for (let key in this.data) {
            console.log(key, this.data[key]);
        }
    }
}
const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
console.log(numberMap.getItem('bananas'));
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
stringMap.clear();
stringMap.printMap();