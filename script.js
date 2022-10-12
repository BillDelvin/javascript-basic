let fruits = ["Pisang", "Pepaya", "Kiwi", "Apel", "Jeruk", "Semangka"];
// let fruits2 = ["Lemon", "Durian", "Buah naga", "Sirsak", "Mata kucing"];

console.log(fruits);
// console.log(fruits2);
// console.log(fruits.toString());
// console.log(fruits.join(", "));

// fruits.pop();
// fruits.pop();
// console.log(fruits);

// fruits.push("Durian");
// console.log(fruits);

// fruits.shift();
// console.log(fruits);

// fruits.unshift("Lemon");
// console.log(fruits);

// const newArray = [];
// const joinArray = newArray.concat(fruits, fruits2);
// const joinArray = [...fruits, ...fruits2]; // ES6 array method

// console.log(joinArray);
// fruits.splice(2, 0, "kiwi", "lemon");
// 0 diawal adalah index
// 2 adalah posisi valua yang mau diambil
// console.log(fruits);

// const filterFruits = fruits.filter((val) => val !== "Kiwi" && val !== "kiwi");
// console.log(filterFruits);

// const sliceFruits = fruits.slice(1);
// console.log(sliceFruits);

let users = [
  { fname: "Alif", lname: "Fatwa" },
  { fname: "Arya", lname: "Widya" },
  { fname: "Arum", lname: "Lestiyorini" },
];
console.log(users);

const arum = users.find((val) => val.fname === "Arum");
console.log(arum);

const posisiArum = users.findIndex((val) => val.fname === "Arum");
console.log(posisiArum);
