/* Arrays */
const lista = [1, 2, 3, 4, 5];

console.log(lista);

console.log(typeof lista);

const itens = ["Matheus", true, 2, 4.12, []];

console.log(itens);

/* mais arrays */
const arr = ["a", "b", "c", "d"];

console.log(arr[1]);

console.log(arr[2]);


/* propriedades */
const numbers = [5, 3, 4];

console.log(numbers.length);

const myName = "Matheus";

console.log(myName.length);

/* métodos */
const otherNumbers = [1, 2, 3];

const allNumbers = numbers.concat(otherNumbers);

console.log(allNumbers);

const text = "algum texto";

console.log(text.toUpperCase());

console.log(typeof text.toUpperCase);

console.log(text.indexOf("g"));

/* objetos */
const person = {
    name: "Matheus",
    age: 31,
    job: "Programador"
}

console.log(person);

console.log(person.name);

/* criando propriedas */

const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car);

car.dorrs = 4;

console.log(car);

delete car.km;

console.log(car);

/* mais sobre objetos  */
const obj = {
    a: "teste",
    b: true,
}

console.log(obj instanceof Object);

const obj2 = {
    c: [],
}

Object.assign(obj2, obj);

console.log(obj2);

console.log(obj);

/* Conhecendo meljor objetos */
console.log(Object.keys(obj));
console.log(Object.keys(obj2));
console.log(Object.keys(car));

console.log(Object.entries(car));

/* loop em arry */
const users = ["Matheus", "João", "Pedro", "Miguel"];

for (let i = 0; i < users.length; i++) {
        console.log(`Listando o usuário: ${users[i]}`);
}

/* push e pop */
const array = ["a", "b", "c"]; 

array.push("d");

console.log(array.length);

array.pop();

console.log(array);

const itemRemovido = array.pop();

console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");

console.log(array);

/* Shift e unshift */

const letters = ["a", "b", "c"];

const letter = letters.shift()

console.log(letter);

console.log(letters);

letters.unshift("p", "q", "r");

letters.unshift("z");

console.log(letters);

/* indexOf e lastIndexOf */
const myElements = ["Morango", "Maça", "Abacate", "Pera", "Abacate"];

console.log(myElements.indexOf("Maça"));
console.log(myElements.indexOf("Abacate"));

console.log(myElements[2]);
console.log(myElements[myElements.indexOf("Abacate")]);

console.log(myElements.lastIndexOf("Abacate"));

console.log(myElements.indexOf("Mamão"));

/* Slice */
const testeSlice = ["a", "b", "c", "d", "e", "f"];

const subArray = testeSlice.slice(2, 4);

console.log(subArray);

console.log(testeSlice);

const subArray2 = testeSlice.slice(2, 4 + 1);

console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);

console.log(subArray3);

const subArray4 = testeSlice.slice(2);

console.log(subArray4);

/* forEach */
const nums = [1, 2, 3, 4, 5];

nums.forEach((numero) => {
    console.log(`O número é ${numero}`);
});

const posts = [
    { title: "Primeiro post", category: "PHP" },
    { title: "Segundo post", category: "Javascript0" },
    { title: "Terceiro post", category: "Python" },
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title}, da categoria: ${post.category}`);
});

/* Includes */
const brands = ["BMW", "VW", "Fiat"];

console.log(brands.includes("Fiat"));
console.log(brands.includes("KIA"));

if(brands.includes("BMW")) {
    console.log("Há carros da marca BMW");
}

/* reverse */
const reverseTest = [1, 2, 3, 4, 5];

reverseTest.reverse();

console.log(reverseTest);

/* trim */
const trimTest = "   testando \n ";

console.log(trimTest);

console.log(trimTest.trim())

/* padstart */
const testePadStart = "1";

const newNumber =testePadStart.padStart(4, "0");

console.log(testePadStart);

console.log(newNumber);

const testePadEnd = newNumber.padEnd(10, "0");

console.log(testePadEnd);

/* split */
const frase = "O rato roeu a roupa do rei de Roma";

const arrayDaFrase = frase.split(" ");

console.log(arrayDaFrase);

/* join */
const fraseDenovo = arrayDaFrase.join(" ");

console.log(fraseDenovo);

const itensParaComprar = ["Mouse", "Teclado", "Monitor"];

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`;

console.log(fraseDeCompra);

/* repeat */
const palavra = "Testando ";

console.log(palavra.repeat(5));

/* rest operator */

const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}

console.log(somaInfinita(1, 2, 3));

console.log(somaInfinita(14, 20, 1201, 1212, 10));

/* for of */
const somaInfinita2 = (...args) => {
    let total = 0;

    for (num of args) {
        total += num;
    }

    return total;
}

console.log(somaInfinita2(1, 2, 4));

console.log(somaInfinita2(4, 2, 1, 5325));

/* destructuring em objetos */
const userDetails = {
    firstName: "Matheus",
    lastName: "Battisti",
    job: "Programador",
}

const { firstName, lastName, job } = userDetails;

console.log(firstName, lastName, job);

/* renomear variaveis */
const {firstName: primeiroNome } = userDetails;

console.log(firstName); 

/* destructuring em arrys */
const myList = ["Avião", "Submarino", "Carro"];

const [veiculoA, veiculoB, veiculoC] = myList;

console.log(veiculoA, veiculoB, veiculoC);

/* JSON */
const myJson = 
    '{"name": "Matheus", "age": 31, "skills": ["PHP", "Javascript", "Python"]}';

console.log(myJson);

console.log(typeof myJson);

/* JSON para objeto e objeto para JSON */

const myObject = JSON.parse(myJson);

console.log(myObject);

console.log(myObject.name);

console.log(typeof myObject);

/*  */

myObject.isOpenToWork = true;

console.log(myObject);

const myNewJson = JSON.stringify(myObject);

console.log(myNewJson);

console.log(typeof myNewJson);