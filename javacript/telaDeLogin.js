const btnEntrar = document.querySelector("#btnEntrar");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

btnEntrar.addEventListener("click", entrar);

async function entrar(event) {

    event.preventDefault();

    if (!email.value || !senha.value) {
        mostrarMensagem("Preencha todos os campos");
        return;
    }

    const body = {
        email: email.value,
        senha: senha.value
    };

    try {

        const resposta = await fetch("https://localhost:7062/Usuarios/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const mensagem = await resposta.text();

        if (resposta.ok) {

            window.location.href = "./esqueceuSenha.html";

        } else {

            mostrarMensagem(mensagem);
        }

    } catch (erro) {

        console.error(erro);
        mostrarMensagem("Erro ao conectar com o servidor.");
    }
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