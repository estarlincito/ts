//TypeScript Utility Types

//Partial
//Partial changes all the properties in an object to be optional.
interface Point {
  x: number;
  y: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional

pointPart.x = 10;
pointPart.y = 20;

//Required
//Required changes all the properties in an object to be required.
interface Car {
  make: string;
  model: string;
  mileage?: number;
}

let myCar: Required<Car> = {
  make: "Ford",
  model: "Focus",
  mileage: 12000, // `Required` forces mileage to be defined
};

//Record
//Record is a shortcut to defining an object type with a specific key type and value type.
const nameAgeMap: Record<string, number> = {
  Alice: 21,
  Bob: 25,
};

//Omit
//Omit removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, "age" | "location"> = {
  name: "Bob",
  // `Omit` has removed age and location from the type and they can't be defined here
};

//Pick
//Pick removes all but the specified keys from an object type.
const bob2: Pick<Person, "name"> = {
  name: "Bob",
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

//Exclude
//Exclude removes types from a union.
type Primitive = string | number | boolean;
let value: Exclude<Primitive, string> = true;

//ReturnType
//ReturnType extracts the return type of a function type.
type PointGenerator = () => { x: number; y: number };
const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20,
};

//Parameters
//Parameters extracts the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number }) => void;
const point2: Parameters<PointPrinter>[0] = {
  x: 30,
  y: 40,
};

export { pointPart, myCar, nameAgeMap, bob, bob2, value, point, point2 };
