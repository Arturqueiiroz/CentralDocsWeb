const btnRedefinicao = document.querySelector("#btnRedefinicao");
const email = document.querySelector("#email");

btnRedefinicao.addEventListener("click", enviarRedefinicao);

async function enviarRedefinicao(event) {
    event.preventDefault();

    if (!email.value) {
        mostrarMensagem("Preencha o campos email");
        return;
    }

function mostrarMensagem(texto) {
    const card = document.getElementById("mensagemCard");
    const textoMsg = document.getElementById("mensagemTexto");

    textoMsg.innerText = texto;

    card.classList.remove("oculto");

    setTimeout(() => {
        card.classList.add("oculto");
    }, 2800);
}
}