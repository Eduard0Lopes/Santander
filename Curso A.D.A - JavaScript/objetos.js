// OBJETOS

// Como criar um objeto no JavaScript?

let pessoa = {
    nome: 'Luiz',
    idade: 21,
}

console.log(pessoa);

console.clear();

console.log(pessoa.nome);
console.log(pessoa['nome']);
console.log(pessoa.idade);

console.clear();
// Como adicionar um par chave-valor

pessoa.altura = 1.80;

console.log(pessoa)

console.clear();
// Como remover um par chave-valor?

delete pessoa.altura;

console.log(pessoa);

console.clear();

// Como percorrer?

for (let chave in pessoa) {
    console.log(chave)
}