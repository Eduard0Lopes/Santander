// > ESTRUTURAS CONDICIONAIS

const idade = 20;

if (idade >= 18) {
    console.log('Você é maior de idade!');
} else 
    {console.log('Você é menor de idade!');
};

// Se média >= 7, Aprovado.
// Se média < 7 e a média >= 5, Recuperação.
// Se média < 5 Reprovado.

console.clear() // LIMPAR TERMINAL ANTERIOR

let media = 10;

if(media >= 7){
    console.log("Aprovado(a)");
} else if (media >=5) {
    console.log("Recuperação");
} else{
    console.log("Reprovado(a)");
}
