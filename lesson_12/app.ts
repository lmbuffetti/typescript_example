function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person {
    constructor() {
        console.log("Hi!");
    }
}

// Factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true)
class Car {

}

// Advanced
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print();

// Method Decorator
// Property Decorator
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overwritable(value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        };
        return newDescriptor;
    }
}

class Project {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}

const project = new Project("Super Project");
project.calcBudget();

// Parameter Decorator
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log("Target: ", target);
    console.log("Method: ", methodName);
    console.log("paramIndex: ", paramIndex);
}

class Course<T> {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentsNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(100000);
        } else {
            console.log(2000);
        }
    }
}
const course = new Course("Course super");
course.printStudentsNumbers('anything', true);
course.printStudentsNumbers('anything', false);