let carta1 = {
    nome: "Bulbasauro",
    imagem: "https://th.bing.com/th/id/OIP.QaP-3QjKyNxi3k9U910tAAHaHa?w=194&h=194&c=7&r=0&o=5&pid=1.7",
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};

let carta2 = {
    nome: "Darth Vader",
    imagem: "https://th.bing.com/th/id/OIP.sMRzxqyo6BQD4CE5VPaEMgHaE7?w=296&h=197&c=7&r=0&o=5&pid=1.7",
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};

let carta3 = {
    nome: "Shiryu De Dragão",
    imagem: "https://th.bing.com/th/id/OIP.sIr4ScNLUnYJIortPV_JIgHaKq?w=200&h=288&c=7&r=0&o=5&pid=1.7",
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

let cartas = [carta1, carta2, carta3];

let cartaMaquina;

let cartaJogador;

function sortearCarta() {
   let numeroCartaMaquina = parseInt(Math.random() * 3);
    cartaMaquina = cartas[numeroCartaMaquina];
    
    let numeroCartaJogador = parseInt(Math.random() * 3);

    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = parseInt(Math.random() * 3);
    }

    cartaJogador = cartas[numeroCartaJogador];

    document.getElementById("btnSortear").disabled = true;

    document.getElementById("btnJogar").disabled = false;


    exibirCartaJogador();

}

function obterAtributoSelecionado() {
    let radioAtributos = document.getElementsByName("atributo");
    for (let i = 0; i < radioAtributos.length; i++) {
        if (radioAtributos[i].checked == true) {
            return radioAtributos[i].value;
        }
    }

}

function jogar() {
    let atributoSelecionado = obterAtributoSelecionado();

    let elementoResultado = document.getElementById("resultado");
    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        htmlResultado = "<p class ='resultado-final'>Venceu</p>";
   
    } else if (valorCartaJogador < valorCartaMaquina) {
        htmlResultado = "<p class ='resultado-final'>Perdeu</p>";

    } else {
        htmlResultado = "<p class ='resultado-final'>Empatou</p>";

    }
    elementoResultado.innerHTML = htmlResultado;

    document.getElementById("btnJogar").disabled = true;

    exibirCartaMaquina();
}

function exibirCartaJogador() {
    let divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    let moldura = '<img src ="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHtml = "<div id='opcoes' class='carta-status'>"

    let opcoesTexto = "";

    for ( let atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>";

   }
   let nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
   divCartaJogador.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";

}

function exibirCartaMaquina() {
    let divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    let moldura = '<img src ="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHtml = "<div id='opcoes' class='carta-status'>"

    let opcoesTexto = "";

    for ( let atributo in cartaJogador.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>";

   }
   let nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
   divCartaMaquina.innerHTML = moldura + nome + tagHtml + opcoesTexto + "</div>";


}