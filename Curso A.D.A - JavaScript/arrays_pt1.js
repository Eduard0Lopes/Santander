// > ARRAYS

// - Como criar um array?

let arr = ['Luiz', 26, 1.80, true];

console.log(arr);

// - Como acessar os elementos do Array

console.log('Primeiro elemento: ', arr[0]);
console.log('Segundo elemento: ', arr[1]);
console.log('Terceiro elemento: ', arr[2]);
console.log('Quarto elemento: ', arr[3]);

// - Como obter o tamanho do Array

console.log('Tamanho do Array: ', arr.length);

console.clear()
// - Percorrendo Arrays

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};

console.clear()

for (let elemento of arr) {
    console.log(elemento);
};

console.clear()

for (let indice in arr) {
    console.log(indice, arr[indice]);
};
