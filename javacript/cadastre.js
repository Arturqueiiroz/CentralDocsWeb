const btnCadastrar = document.querySelector("#btnCadastrar");

const nomeCompleto = document.querySelector("#nomeCompleto");
const CPF = document.querySelector("#CPF");
const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const confirmeSuaSenha = document.querySelector("#ConfirmeSuaSenha");

btnCadastrar.addEventListener("click", cadastrarUsuario);

async function cadastrarUsuario() {

    if (!nomeCompleto.value || !CPF.value || !email.value || !senha.value || !confirmeSuaSenha.value) {
        mostrarMensagem("Preencha todos os campos");
        return;
    }

    if (senha.value.length < 3) {
        mostrarMensagem("A senha deve ter no mínimo 3 caracteres");
        return;
    }

    if (senha.value !== confirmeSuaSenha.value) {
        mostrarMensagem("As senhas não coincidem");
        return;
    }

    if (CPF.value.length !== 11) {
        mostrarMensagem("CPF precisa conter 11 números");
        return;
    }
    if (!email.value.includes("@") || !email.value.includes(".")) {
        mostrarMensagem("Digite um e-mail válido");
    return;
    }

    const body = {
        cpf: CPF.value,
        email: email.value,
        senha: senha.value,
        confirmarSenha: confirmeSuaSenha.value,
        nome: nomeCompleto.value
    };
    try {
        const resposta = await fetch("https://localhost:7196/api/Usuario/CriarUsuario", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });

        const mensagem = await resposta.text();

        if (resposta.ok) {

            mostrarMensagem("Usuário criado com sucesso!");

            setTimeout(() => {
                window.location.href = "./telaDeLogin.html";
            }, 1500);

        } else {
            mostrarMensagem(mensagem);
        }
        
            document.querySelector(".formulario").reset();

    } catch (erro) {
        mostrarMensagem("Erro ao conectar com o servidor");
        console.error(erro);
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