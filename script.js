const campeonatos = {
  brasileirao: {
    nome: "Brasileirão Série A",
    times: [
      {
        posicao: 1,
        nome: "Flamengo",
        pontos: 42,
        titulos: 8,
        artilheiro: "Pedro",
        gols: 18,
        melhorJogador: "Arrascaeta",
        destaque: "Meia criativo"
      },
      {
        posicao: 2,
        nome: "Palmeiras",
        pontos: 39,
        titulos: 12,
        artilheiro: "Raphael Veiga",
        gols: 14,
        melhorJogador: "Gustavo Gómez",
        destaque: "Líder defensivo"
      },
      {
        posicao: 3,
        nome: "Atlético-MG",
        pontos: 36,
        titulos: 3,
        artilheiro: "Hulk",
        gols: 13,
        melhorJogador: "Guilherme Arana",
        destaque: "Lateral ofensivo"
      },
      {
        posicao: 4,
        nome: "São Paulo",
        pontos: 33,
        titulos: 6,
        artilheiro: "Luciano",
        gols: 11,
        melhorJogador: "Lucas Moura",
        destaque: "Velocidade e criação"
      },
      {
        posicao: 5,
        nome: "Corinthians",
        pontos: 30,
        titulos: 7,
        artilheiro: "Yuri Alberto",
        gols: 10,
        melhorJogador: "Rodrigo Garro",
        destaque: "Organização ofensiva"
      },
      {
        posicao: 6,
        nome: "Grêmio",
        pontos: 28,
        titulos: 2,
        artilheiro: "Cristaldo",
        gols: 9,
        melhorJogador: "Kannemann",
        destaque: "Referência defensiva"
      }
    ]
  },

  champions: {
    nome: "Champions League",
    times: [
      {
        posicao: 1,
        nome: "Real Madrid",
        pontos: 44,
        titulos: 15,
        artilheiro: "Kylian Mbappé",
        gols: 15,
        melhorJogador: "Jude Bellingham",
        destaque: "Meia completo"
      },
      {
        posicao: 2,
        nome: "Manchester City",
        pontos: 41,
        titulos: 1,
        artilheiro: "Erling Haaland",
        gols: 12,
        melhorJogador: "Kevin De Bruyne",
        destaque: "Criação de jogo"
      },
      {
        posicao: 3,
        nome: "Bayern de Munique",
        pontos: 39,
        titulos: 6,
        artilheiro: "Harry Kane",
        gols: 14,
        melhorJogador: "Jamal Musiala",
        destaque: "Talento ofensivo"
      },
      {
        posicao: 4,
        nome: "Barcelona",
        pontos: 35,
        titulos: 5,
        artilheiro: "Robert Lewandowski",
        gols: 10,
        melhorJogador: "Pedri",
        destaque: "Controle de meio-campo"
      },
      {
        posicao: 5,
        nome: "Paris Saint-Germain",
        pontos: 32,
        titulos: 1,
        artilheiro: "Ousmane Dembélé",
        gols: 8,
        melhorJogador: "Vitinha",
        destaque: "Equilíbrio técnico"
      },
      {
        posicao: 6,
        nome: "Liverpool",
        pontos: 30,
        titulos: 6,
        artilheiro: "Mohamed Salah",
        gols: 9,
        melhorJogador: "Virgil van Dijk",
        destaque: "Liderança defensiva"
      }
    ]
  }
};

const usuarios = [
  {
    nome: "Pedro Paulo Lopes",
    email: "pedro@rankgol.com",
    categoria: "Administrador",
    status: "Ativo"
  },
  {
    nome: "Ana Souza",
    email: "ana@rankgol.com",
    categoria: "Editor",
    status: "Ativo"
  },
  {
    nome: "Carlos Lima",
    email: "carlos@rankgol.com",
    categoria: "Usuário comum",
    status: "Inativo"
  }
];

const tabelaRanking = document.getElementById("tabela-ranking");
const listaTimes = document.getElementById("lista-times");
const listaTitulos = document.getElementById("lista-titulos");
const listaArtilheiros = document.getElementById("lista-artilheiros");
const listaMelhores = document.getElementById("lista-melhores");

const totalTimes = document.getElementById("total-times");
const totalTitulos = document.getElementById("total-titulos");
const totalArtilheiros = document.getElementById("total-artilheiros");

const tabelaUsuarios = document.getElementById("tabela-usuarios");
const nomeUsuario = document.getElementById("nome-usuario");
const emailUsuario = document.getElementById("email-usuario");
const categoriaUsuario = document.getElementById("categoria-usuario");

function limparConteudoRanking() {
  tabelaRanking.innerHTML = "";
  listaTimes.innerHTML = "";
  listaTitulos.innerHTML = "";
  listaArtilheiros.innerHTML = "";
  listaMelhores.innerHTML = "";
}

function carregarCampeonato(campeonato) {
  const dados = campeonatos[campeonato].times;

  limparConteudoRanking();

  totalTimes.textContent = dados.length;
  totalTitulos.textContent = dados.reduce((total, time) => total + time.titulos, 0);
  totalArtilheiros.textContent = dados.length;

  dados.forEach((time) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${time.posicao}º</td>
      <td>${time.nome}</td>
      <td>${time.pontos}</td>
      <td>${time.titulos}</td>
      <td>${time.artilheiro}</td>
      <td>${time.melhorJogador}</td>
    `;

    tabelaRanking.appendChild(linha);

    const itemTime = document.createElement("div");
    itemTime.classList.add("item-lista");
    itemTime.innerHTML = `
      <strong>${time.nome}</strong>
      <span>${time.pontos} pontos</span>
    `;
    listaTimes.appendChild(itemTime);

    const itemTitulo = document.createElement("div");
    itemTitulo.classList.add("item-lista");
    itemTitulo.innerHTML = `
      <strong>${time.nome}</strong>
      <span>${time.titulos} títulos</span>
    `;
    listaTitulos.appendChild(itemTitulo);

    const itemArtilheiro = document.createElement("div");
    itemArtilheiro.classList.add("item-lista");
    itemArtilheiro.innerHTML = `
      <strong>${time.artilheiro}</strong>
      <span>${time.gols} gols - ${time.nome}</span>
    `;
    listaArtilheiros.appendChild(itemArtilheiro);

    const itemMelhor = document.createElement("div");
    itemMelhor.classList.add("item-lista");
    itemMelhor.innerHTML = `
      <strong>${time.melhorJogador}</strong>
      <span>${time.destaque} - ${time.nome}</span>
    `;
    listaMelhores.appendChild(itemMelhor);
  });
}

function trocarCampeonato(campeonato, botaoClicado) {
  carregarCampeonato(campeonato);

  const nomeCampeonato = document.getElementById("nome-campeonato");
  nomeCampeonato.textContent = campeonatos[campeonato].nome;

  const botoes = document.querySelectorAll(".aba");
  botoes.forEach((botao) => {
    botao.classList.remove("ativa");
  });

  botaoClicado.classList.add("ativa");
}

function renderizarUsuarios() {
  tabelaUsuarios.innerHTML = "";

  usuarios.forEach((usuario, index) => {
    const linha = document.createElement("tr");

    const classeStatus = usuario.status === "Ativo" ? "status-ativo" : "status-inativo";

    linha.innerHTML = `
      <td>${usuario.nome}</td>
      <td>${usuario.email}</td>
      <td>${usuario.categoria}</td>
      <td><span class="${classeStatus}">${usuario.status}</span></td>
      <td>
        <div class="acoes-usuario">
          <button class="btn-alterar" onclick="alterarUsuario(${index})">Alterar</button>
          <button class="btn-ativar" onclick="ativarUsuario(${index})">Ativar</button>
          <button class="btn-inativar" onclick="inativarUsuario(${index})">Inativar</button>
        </div>
      </td>
    `;

    tabelaUsuarios.appendChild(linha);
  });
}

function cadastrarUsuario() {
  const nome = nomeUsuario.value.trim();
  const email = emailUsuario.value.trim();
  const categoria = categoriaUsuario.value;

  if (nome === "" || email === "") {
    alert("Preencha o nome e o e-mail do usuário.");
    return;
  }

  const novoUsuario = {
    nome: nome,
    email: email,
    categoria: categoria,
    status: "Ativo"
  };

  usuarios.push(novoUsuario);

  nomeUsuario.value = "";
  emailUsuario.value = "";
  categoriaUsuario.value = "Administrador";

  renderizarUsuarios();

  alert("Usuário cadastrado com sucesso!");
}

function alterarUsuario(index) {
  const usuario = usuarios[index];

  const novoNome = prompt("Digite o novo nome do usuário:", usuario.nome);
  if (novoNome === null || novoNome.trim() === "") {
    return;
  }

  const novoEmail = prompt("Digite o novo e-mail do usuário:", usuario.email);
  if (novoEmail === null || novoEmail.trim() === "") {
    return;
  }

  usuario.nome = novoNome.trim();
  usuario.email = novoEmail.trim();

  renderizarUsuarios();

  alert("Usuário alterado com sucesso!");
}

function ativarUsuario(index) {
  usuarios[index].status = "Ativo";
  renderizarUsuarios();
}

function inativarUsuario(index) {
  usuarios[index].status = "Inativo";
  renderizarUsuarios();
}

carregarCampeonato("brasileirao");
renderizarUsuarios();