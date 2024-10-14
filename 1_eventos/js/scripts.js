// adicionando eventos
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
    console.log("Clicou aqui!");
});

// removendo eventos

const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
    console.log("Teste");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thridBtn = document.querySelector("#other-btn");

thridBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMensagem);
})

// argumento do evento
const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.offsetX);
    console.log(e.pointerType);
    console.log(e.target);
})

// propagação
const containerBtn = document.querySelector("btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

// containerBtn.addEventListener("click", () => {
//     console.log("Evento 1");
// })

// btnInsideContainer.addEventListener("click", (e) => {
//     e.stopPropagation();
//     console.log("Evento 2");
// });


// removendo evento padrão
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
    e.preventDefault();

    console.log("Não alterou a página");
})

// eventos keyup e keydown (teclado)
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`);
})

document.addEventListener("keydown", (e) => {
    console.log(`Pressionou a tecla ${e.key}`);
})

// eventos de mouse
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", (e) => {
    console.log("Pressionou o botão");
})

mouseEvents.addEventListener("mouseup", (e) => {
    console.log("Segurou o botão");
})

mouseEvents.addEventListener("dblclick", (e) => {
    console.log("Duplo click");
});

//  movimento do mouse
document.addEventListener("mousemove", (e) => {
    console.log(`No eixo x: ${e.x}`);
    console.log(`No eixo y: ${e.y}`);
});

// evento de scroll
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 200)
        console.log("passamos de 200px");
})


// evento de focus/blur
const input = document.querySelector("#my-input")

input.addEventListener("focus", (e) => {

    console.log("Entrou no input");
})

input.addEventListener("blur", (e) => {

    console.log("Saiu do input");
})
input.addEventListener("focus", (e) => {

    console.log("Entrou no input");
})

// evento de carregamento
window.addEventListener("load", () => {
    console.log("A página carregou");
})

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
})

// debounce
const debounce = (f, delay) => {
    let timeout

    return (...arguments) => {
        if (timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
}

window.addEventListener("mouse", debounce(() => {
    console.log("Executando a cada 400ms");
}, 400)
);