//TypeScript Casting

//Casting with as
let asType: unknown = "Hello";
console.log((asType as string).length);

//Casting with <>
let x: unknown = "Hi";
console.log((<string>x).length);

export { asType, x };
