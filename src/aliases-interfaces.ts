//TypeScript Type Aliases and Interfaces

//Type Aliases can be used for primitives like string or more complex types such as objects and arrays:
const aliasesType = () => {
  type CarYear = number;
  type CarType = string;
  type CarModel = string;
  type Car = {
    year: CarYear;
    type: CarType;
    model: CarModel;
  };

  const carYear: CarYear = 2001;
  const carType: CarType = "Toyota";
  const carModel: CarModel = "Corolla";
  const car: Car = {
    year: carYear,
    type: carType,
    model: carModel,
  };

  return car;
};

//Interfaces are similar to type aliases, except they only apply to object types
const interfaceType = () => {
  interface Rectangle {
    height: number;
    width: number;
  }

  const rectangle: Rectangle = {
    height: 20,
    width: 10,
  };

  return rectangle;
};
export { aliasesType, interfaceType };
