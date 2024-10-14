/* 1 - Number */
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -127);

/* 2 - Opererações Aritméticas */
console.log(2 + 4);
console.log(10 - 5);
console.log(10 * 25);
console.log(30 / 4);

console.log(5 + (4 * 2));

/* Special Numbers */
console.log(typeof Infinity);

console.log(typeof -Infinity);

/* console.log(10 * "aasas");
console.log(typeof NaN); */

/* Strings */
console.log("Um texto");

/* Simbolo especiais em string */
console.log("Testando a \nquebra de linha");

console.log("Espaçamento \t de tab");

/* Concatenação */
console.log("oi," + " tudo" + " bem?");

/* Interpolação TEMPLATE STRINGS */
console.log(`A soma de 2 + 2 é: ${2 + 2}`);

console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

/* Boolean */
console.log(true);

console.log(5 > 20);

/* Identico  */
/* console.log(9 === 9);

console.log(9 != "9");
console.log(9 !== "9");

console.log(9 != 9);

console.log(9 !== 9); */

/* Operadores lógicos */

/* prompt e alert */
/* const age = prompt("Digite a sua idade:");

console.log(`Você tem ${age} anos.`) */

/* alert("Testando"); */

/* Math */
/* console.log(Math.max(5, 2, 1, 10));

console.log(Math.floor(5.14));

console.log(Math.ceil(5.14));

/* if e else */
/* const aprovado = 70;

if (aprovado > 80) {
    console.log("ACEITO");
} else {
    console.log("RECUSADO");
} */

/* wile  */
let p = 0

while (p < 5) {
    console.log(`Repetindo ${p}`);
    p = p + 1;
}

/* loop infinito */
/* let x = 10
while(x > 5) {
console.log(`Repetindo ${x}`)
}
*/

let a = 10;

for (a; a > 0; a = a - 1) {
    console.log(`O a está diminuindo: ${a}`);
}


for (let g = 20; g > 10; g--) {
    console.log(`o g é ${g}`);

    if (g === 15) {
        console.log("o g é 15!");
        break;
    }
}

/* continue */
for (let s = 1; s < 10; s++) {
    if (s % 2 === 0) {
        console.log("Número par!");
        continue;
    }

    console.log(s);
}

/* switch */

const job = "Advogado";

switch (job) {
    case "Programador":
        console.log("Você é um programador!");
        break;
    case "Advogado":
        console.log("Você é um advogado!");
        break;
    case "Engenheiro":
        console.log("Você é um engenheiro!");
        break;
    default:
        console.log("Profissão não encontrada!");
}

/* switch errado */