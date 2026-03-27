async function carregarComponente(id, caminho) {
    const elemento = document.getElementById(id);

    if (!elemento) return;

    try {
        const resposta = await fetch(caminho);
        const conteudo = await resposta.text();
        elemento.innerHTML = conteudo;
    } catch (erro) {
        console.error(`Erro ao carregar o componente: ${caminho}`, erro);
    }
}

carregarComponente("header", "/html/header.html");
carregarComponente("footer", "/html/footerPaginas.html");