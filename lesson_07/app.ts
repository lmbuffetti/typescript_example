/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
const PI = 2.99;

console.log(MyMath.calculateCircumference(15));
console.log(MyMath.calculateRectangle(10, 20));
console.log(PI);

// USE  tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts --watch on terminal to create a single file