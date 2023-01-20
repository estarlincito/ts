//TypeScript Special Types

// no error as it can be "any" type
const unknownType = (parr: unknown) => {
  return parr;
};

// unknown is a similar, but safer alternative to any
const anyType = (parr: any) => {
  return parr;
};

//never effectively throws an error whenever it is defined
// let neverType: never = true;

//undefined and null are types that refer to the JavaScript primitives undefined and null respectively.
let undefinedType: undefined = undefined;
let nullType: null = null;

export { anyType, unknownType, undefinedType, nullType };
