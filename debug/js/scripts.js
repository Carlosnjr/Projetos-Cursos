/* strict */
"use strict";

/* console.log */
let a = 1;
let b = 2;

for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a);
}

// debugger;

// tratamento de dados
function checkNumber(n) {
    const result = Number(n);

    if (Number.isNaN(result)) {
        console.log("Valor incorreto");
        return;
    }

    console.log("Valor correto!");
    return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("teste");

// exceptions 
let x = 10;

if(x != 11) {
    //throw new Error("O valor de x não pode ser diferente de 11!");
}

// try catch
try {
    const soma = x + y;
} catch (error) {
    console.log(`Erro no programa: ${error}`)
}

// finally
try {
    const value = checkNumber("1");

    if (!value) {
        throw new Error("Valores inválidos");
    }
} catch (error) {
    console.log(`Opa, aconteceu um problema: ${error}`);
} finally {
    console.log("O código foi executado!");
}

// assertion 
function checkArray(arr) {
    if (arr.length === 0) {
        throw new Error("O array precisa ter elementos");
    } else {
        console.log(`O array tem ${arr.length} elementos`);
    }
}

//checkArray([]);

checkArray([1, 2 , 3])