fetch("https://localhost:7062/Usuarios/getAll")
  .then(response => response.json())
  .then(data => {
    const lista = document.getElementById("listaUsuarios");

    data.forEach(usuario => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>ID:</strong> ${usuario.id}</p>
        <p><strong>Nome:</strong> ${usuario.nome}</p>
        <p><strong>Email:</strong> ${usuario.email}</p>
        <hr>
      `;
      lista.appendChild(div);
    });
  })
  .catch(error => {
    console.error("Erro ao buscar usuários:", error);
  });