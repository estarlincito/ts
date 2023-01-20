console.clear();
import { aliasesType, interfaceType } from "./aliases-interfaces";
import { readonlyType, tupleType } from "./arraysType";
import { objectsType, objectsType2 } from "./objectTypes";
import { explicit, implicit } from "./simpleTypes";
import { anyType, nullType, undefinedType, unknownType } from "./specialTypes";
import { orType } from "./unionTypes";
import {
  add,
  divide,
  getTime,
  multiply,
  negateFunction,
  pow,
  printHello,
  restParameters,
} from "./functionsType";
import { asType, x } from "./castingType";
import { myRect, myRect2, mySq, mySq2, person, person2 } from "./classesType";
import {
  bob,
  bob2,
  myCar,
  nameAgeMap,
  point,
  point2,
  pointPart,
  value,
} from "./utilityTypes";

console.log(`

Typescript Types

Simple: 
- explicit: ${explicit}
- implicit: ${implicit}

Special:

- any: ${anyType("Hi")}
- any: ${anyType(20)}
- any: ${anyType(true)}

- unknown: ${unknownType("How")}
- unknown: ${unknownType(30)}
- unknown: ${unknownType(false)}

- undefined: ${undefinedType}
- null: ${nullType}

Arrays:
- readonly: ${readonlyType()}
- tuple: ${tupleType()}

Object:
- specific: ${JSON.stringify(objectsType)}
- signatures: ${JSON.stringify(objectsType2)}


Aliases, Interfaces:
- aliases: ${JSON.stringify(aliasesType())}
- interface: ${JSON.stringify(interfaceType())}


Union Types:
- or: ${orType(400)}
- or: ${orType("400")}
- or: ${orType(true)}


Functions Types:
- specifies: ${getTime()}
- parameters: ${multiply(10, 20)}
- optional parameters: ${add(10, 20)}
- default evalue: ${pow(10)}
- named parameters: ${divide({ dividend: 100, divisor: 50 })}
- Rest Parameters: ${restParameters(10, 10, 10, 10, 10)}
- Alises: ${negateFunction(10)}

TypeScript Casting:
- Casting with as: ${asType}
- Casting with <>: ${x}


TypeScript Classes:
- Parameter Properties: ${person.getName()}
- Readonly: ${person2.getName()}
- Inheritance "Implements": ${myRect.getArea()}
- Inheritance "Extends": ${mySq.getArea()}
- Override: ${mySq2.getArea()}
- Abstract Classes: ${myRect2.getArea()}


TypeScript Utility Types:
- Partial: ${JSON.stringify(pointPart)}
- Required: ${JSON.stringify(myCar)}
- Record: ${JSON.stringify(nameAgeMap)}
- Omit: ${JSON.stringify(bob)}
- Pick: ${JSON.stringify(bob2)}
- Exclude: ${value}
- ReturnType: ${JSON.stringify(point)}
- Parameters: ${JSON.stringify(point2)}
`);
printHello();
