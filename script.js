// ===============================
// RANKGOL - SCRIPT PRINCIPAL
// ===============================

// Usuários simulados da plataforma
let usuarios = [
  {
    nome: "Pedro Paulo",
    email: "pedro@email.com",
    status: "Ativo"
  },
  {
    nome: "Usuário Teste",
    email: "teste@email.com",
    status: "Inativo"
  }
];

// ===============================
// TROCA DE CAMPEONATOS
// ===============================

function mostrarCampeonato(campeonato) {
  const campeonatos = document.querySelectorAll(".campeonato");
  const botoes = document.querySelectorAll(".tab-btn");

  campeonatos.forEach((item) => {
    item.classList.remove("ativo");
  });

  botoes.forEach((botao) => {
    botao.classList.remove("active");
  });

  document.getElementById(campeonato).classList.add("ativo");

  if (campeonato === "brasileirao") {
    botoes[0].classList.add("active");
  } else {
    botoes[1].classList.add("active");
  }
}

// ===============================
// AUTENTICAÇÃO DE USUÁRIO
// ===============================

function fazerLogin() {
  const usuario = document.getElementById("login-usuario").value;
  const senha = document.getElementById("login-senha").value;
  const mensagem = document.getElementById("mensagem-login");
  const loginBox = document.getElementById("login-box");
  const painelAdmin = document.getElementById("painel-admin");

  if (usuario === "admin" && senha === "1234") {
    mensagem.textContent = "Login realizado com sucesso!";
    mensagem.style.color = "#22c55e";

    loginBox.classList.add("oculto");
    painelAdmin.classList.remove("oculto");

    renderizarUsuarios();
  } else {
    mensagem.textContent = "Usuário ou senha incorretos.";
    mensagem.style.color = "#ef4444";
  }
}

function fazerLogout() {
  const loginBox = document.getElementById("login-box");
  const painelAdmin = document.getElementById("painel-admin");
  const mensagem = document.getElementById("mensagem-login");

  document.getElementById("login-usuario").value = "";
  document.getElementById("login-senha").value = "";

  painelAdmin.classList.add("oculto");
  loginBox.classList.remove("oculto");

  mensagem.textContent = "Você saiu da área autenticada.";
  mensagem.style.color = "#facc15";
}

// ===============================
// GESTÃO DE USUÁRIOS
// ===============================

function renderizarUsuarios() {
  const tabela = document.getElementById("tabela-usuarios");

  if (!tabela) {
    return;
  }

  tabela.innerHTML = "";

  usuarios.forEach((usuario, index) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${usuario.nome}</td>
      <td>${usuario.email}</td>
      <td>
        <span class="${usuario.status === "Ativo" ? "status-ativo" : "status-inativo"}">
          ${usuario.status}
        </span>
      </td>
      <td>
        <button onclick="alterarUsuario(${index})">Alterar</button>
        <button onclick="ativarUsuario(${index})">Ativar</button>
        <button onclick="inativarUsuario(${index})">Inativar</button>
      </td>
    `;

    tabela.appendChild(linha);
  });
}

function cadastrarUsuario() {
  const nome = document.getElementById("nome-usuario").value;
  const email = document.getElementById("email-usuario").value;

  if (nome === "" || email === "") {
    alert("Preencha nome e e-mail para cadastrar o usuário.");
    return;
  }

  usuarios.push({
    nome: nome,
    email: email,
    status: "Ativo"
  });

  document.getElementById("nome-usuario").value = "";
  document.getElementById("email-usuario").value = "";

  renderizarUsuarios();

  alert("Usuário cadastrado com sucesso!");
}

function alterarUsuario(index) {
  const novoNome = prompt("Digite o novo nome do usuário:", usuarios[index].nome);
  const novoEmail = prompt("Digite o novo e-mail do usuário:", usuarios[index].email);

  if (novoNome && novoEmail) {
    usuarios[index].nome = novoNome;
    usuarios[index].email = novoEmail;

    renderizarUsuarios();

    alert("Usuário alterado com sucesso!");
  }
}

function ativarUsuario(index) {
  usuarios[index].status = "Ativo";
  renderizarUsuarios();

  alert("Usuário ativado com sucesso!");
}

function inativarUsuario(index) {
  usuarios[index].status = "Inativo";
  renderizarUsuarios();

  alert("Usuário inativado com sucesso!");
}

// ===============================
// INICIALIZAÇÃO
// ===============================

document.addEventListener("DOMContentLoaded", function () {
  mostrarCampeonato("brasileirao");
});