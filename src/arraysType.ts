//TypeScript Arrays

//The readonly keyword can prevent arrays from being changed.
const readonlyType = () => {
  const names: readonly string[] = ["Dylan"];
  // names.push("Jack"); //error
  return names;
};

//A tuple is a typed array with a pre-defined length and types for each index.
const tupleType = () => {
  let ourTuple: [number, boolean, string];

  ourTuple = [5, false, "Coding God was here"];

  //ourTuple = [false, 'Coding God was mistaken', 5]; //error
  return ourTuple;
};

export { readonlyType, tupleType };
