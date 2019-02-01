let person = {};
person.name = "Mr. Hanky";
console.log(person.name);
let pessoa = {
  nome : "Mr. Teixeira"
};
console.log("pessoa.nome --> ", pessoa.nome);
console.log("* Assigning pessoa.nome to variable who *");
let who = pessoa.nome;
console.log("who --> ", who);
console.log("Assigning pessoa to another object");
let pipo = pessoa;
console.log("pipo.nome -->", pipo.nome);
console.log("------------------------");
console.log("* Changing pessoa.nome value *");
pessoa.nome = "Lilo";
console.log("pessoa.nome --> ", pessoa.nome);
console.log("who --> ", who);
console.log("pipo.nome --> ", pipo.nome);
console.log(`A variável who não teve seu valor alterado após a mudança no valor do atributo nome, porque valores primitivos (no caso, string)
são passados por valor. Já o objeto pipo teve o valor do atributo alterado, pois objetos (valores não-primitivos) são passados como referência.`);
