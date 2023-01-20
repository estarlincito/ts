//TypeScript Object Types

//TypeScript has a specific syntax for typing objects
const objectsType: { type: string; model: string; year?: number } = {
  type: "Toyota",
  model: "Corolla",
};

//Index signatures can be used for objects without a defined list of properties.
const objectsType2: { [index: string]: number } = {};
objectsType2.Jack = 25; // no error
// objectsType2.Jack = "JJ"; // error

export { objectsType, objectsType2 };
