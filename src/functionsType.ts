//TypeScript Functions

// the `: number` here specifies that this function returns a number
const getTime = (): number => {
  return new Date().getTime();
};

//The type void can be used to indicate a function doesn't return any value.
const printHello = (): void => {
  console.log("- void: Hello!");
};

//Function parameters are typed with a similar syntax as variable declarations.
const multiply = (a: number, b: number) => {
  return a * b;
};

//By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
const add = (a: number, b: number, c?: number) => {
  return a + b + (c || 0);
};

//For parameters with default values, the default value goes after the type annotation:
const pow = (value: number, exponent: number = 10) => {
  return value ** exponent;
};

//Typing named parameters follows the same pattern as typing normal parameters.
const divide = ({
  dividend,
  divisor,
}: {
  dividend: number;
  divisor: number;
}) => {
  return dividend / divisor;
};

//Rest parameters can be typed like normal parameters, but the type must be an array as rest parameters are always arrays.
const restParameters = (a: number, b: number, ...rest: number[]) => {
  return a + b + rest.reduce((p, c) => p + c, 0);
};

//Function types can be specified separately from functions with type aliases.
type Negate = (value: number) => number;
const negateFunction: Negate = (value) => value * -1;

export {
  getTime,
  printHello,
  multiply,
  add,
  pow,
  divide,
  restParameters,
  negateFunction,
};
