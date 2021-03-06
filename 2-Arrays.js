let arr = [];
arr.name = "My name is arréi!";
arr.age = 2;
console.log("arr.name --> ", arr.name);
console.log("arr.age --> ", arr.age);
let exp1 = "Arrays are objects, i.e. its type is not \"array\" but \"object\", so array_name.property is valid!"
console.log(exp1);
console.log("typeof arr --> ", typeof arr);

let exp2 = "Array´s attributes can be accessed via brackets too!"
console.log(exp2);
console.log("arr[\"name\"] --> ", arr["name"]);
console.log("arr[\"age\"] --> ", arr["age"]);

console.log("Weird thing: arr´s length should be 2 but it´s zero");
console.log("arr.length --> ", arr.length);

console.log("We can add another element with an number index - arr[0]");
arr[0] = "I´m in index zero!";
console.log("arr[0] --> ", arr[0]);
console.log("But if we try to access this new element using dot notation, we´d get an Syntax Error!");
console.log("arr.0 --> Uncaught SyntaxError: Unexpected number");

console.log("Our array has 3 elements. Let´s check its length now");
console.log("arr.length --> ", arr.length);
console.log("Now its length has increased! It appears the length property of the array stores only the elements indexed by a number. For now I don´t know why it behaves like that.")

console.log("Since array are objects then we can access objects' properties using brackets!");
let obj = {
  name : "Goethe",
  occupation : "Poet",
  0 : "I´ve got an index zero too!"
};
console.log("obj[\"name\"] --> ", obj["name"]);
console.log("obj[\"occupation\"] --> ", obj["occupation"]);
console.log("obj[0] --> ", obj[0]);
console.log("** We can expect the same behavior of arrays when trying to access an object´s element whose index is a number using brackets **");
console.log("Finally, we would be tempted to check the object´s length, but this property doesn´t exist in an object (undefined). It appears that array has some exclusive properties and methods!")
console.log("obj.length --> ", obj.length);

// Destructuring
console.log("\n----------- Destructuring -----------\n")
console.log('Array Destructuring');
let fl = ['Clojure', 'Lisp', 'Scala', 'Elixir']
let [a, b, c, d, e] = fl;
let [cloj, , , elix] = fl;
let [cl, ...others] = fl;
console.log(`Array -> `, fl, `
[a, b, c, d, e] = ['Clojure', 'Lisp', 'Scala', 'Elixir']
a = ${a}  b = ${b}  c = ${c}  d = ${d}

[cloj, , , elix] = ['Clojure', 'Lisp', 'Scala', 'Elixir']
cloj = ${cloj}  elix = ${elix}

[cl, ...others] = ['Clojure', 'Lisp', 'Scala', 'Elixir']
cl = ${cl}  others = `, others, `
`);


console.log('Array destructuring as arguments of functions');
let getFirstLanguage = function ([first, second, ...rest]) {
  console.log(`Primeira: ${first} - Segunda: ${second}`);
  console.log("Resto: ", rest);
}
getFirstLanguage(fl);

console.log("Object Desctructuring");

const peso = "PesoKG";
const pedro = {
  nome: 'Pedro',
  idade: 38,
  altura: 171,
  endCasa: { rua: 'Rua inexistente, 70'},
  endEntrega: { rua: 'Rua que Sobe mas não Desce, 12' },
  [peso]: 75,
  [Symbol.for('corFavorita')]: 'Laranja',
};
console.log(pedro);
let { nome, idade } = pedro;
console.log(`Nome: ${nome}   Idade: ${idade}`);

console.log("As propriedades do objeto não são posicionais, portanto deve-se citar o nome da propriedade, independente de sua posição.");
let { age, endEntrega, endCasa} = pedro;
console.log(
`Age não existe no objeto. Portanto seu valor é undefined.
Age: ${age}
End. de casa: `, endCasa, `
End. de entrega: `, endEntrega
);

console.log("Extracting When Passing to a Function")