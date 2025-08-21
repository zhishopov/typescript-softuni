let firstName: string = "Josh";
let lastName: string = "Hermano";
let age: number = 25;
let hasGraduated: boolean = true;
let skills: string[] = ["JS", "HTML", "TypeScript"];
let certificateInfo: [string, number, boolean] = ["MySQL", 2025, true];
let strNumArr: (string | number)[] = [2, "test", 4];

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(hasGraduated);
console.log(skills);
console.log(certificateInfo);

// Enums
enum Directions {
  Up,
  Down,
  Left,
  Right,
}

const point = { x: 0, y: 0 };

function movePoint(point: { x: number; y: number }, moveDirection: Directions) {
  if (moveDirection === Directions.Up) {
    return { x: point.x, y: point.y + 1 };
  } else if (moveDirection === Directions.Down) {
    return { x: point.x, y: point.y - 1 };
  } else if (moveDirection === Directions.Right) {
    return { x: point.x + 1, y: point.y };
  } else if (moveDirection === Directions.Left) {
    return { x: point.x - 1, y: point.y };
  }
}

console.log(movePoint(point, Directions.Up));
console.log(movePoint(point, Directions.Down));

// Optional params and Return type
function greetUser(username: string, addHello?: boolean): string {
  if (addHello) {
    return `Hello, ${username}`;
  }
  return username;
}

console.log(greetUser("Justin", true));
console.log(greetUser(" ", false));
console.log(greetUser("Justin"));

// Type assertion
// const inputEl = document.getElementById("email") as HTMLInputElement;
// console.log(inputEl!.value);

// Type Guards
function formatData(a: string | number, b: string | number) {
  if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log(`${a} <-> ${b}`);
  }
}

formatData(5, 2);
formatData("5", 10);
