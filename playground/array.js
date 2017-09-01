let arrOne = [];

let fruits = ['Apple', 'Orange', 'Mango'];

console.log(fruits[0]);
console.log(fruits[1]);

fruits[2] = 'Pear';
fruits[3] = 'Peach';

console.log(fruits.length);
console.log(fruits);

arrOne = ['Apple', 10, true, {name:'test'}, () => console.log("hi")];

console.log(arrOne[2]);
arrOne[4]();

fruits.push("WaterMelon");
console.log(fruits);

fruits.shift();
console.log(fruits);
fruits.unshift('Apple');
console.log(fruits);
fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
console.log(fruits);


for(let fruit of fruits) {
  console.log(fruit);
}
for(let fruit in fruits) {
  console.log(fruits[fruit]);
}


// delete fruits[1];
// console.log(fruits);

//fruits.splice(1,1);
console.log(fruits.length);
fruits.splice(1,1);
fruits.splice(2,1);
console.log(fruits);
console.log(fruits.length);

let arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(5, 0, "complex", "language")
console.log(arr);
arr.splice(0,3,"Let's", "dance");

console.log(arr);

let removed = arr.splice(0, 2);

console.log( removed ); // "I", "study" <-- array of removed elements
let arr2 = ["I", "study", "JavaScript"];
arr2.splice(2, 0, "complex", "language")

console.log(arr2);

let newarr = [1,0,false];

console.log(newarr.indexOf(0) + " " + newarr.indexOf(false));
console.log(newarr.includes(1));

let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1);
console.log(user);
let someUsers = users.filter(item => item.id < 3);
console.log(someUsers);

[1, -2, 15, 2, 0, 8].sort(function(a, b) {
  console.log( a + " <> " + b );
});
