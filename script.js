
// Rodar o codigo toda vez que houver um reload na pag
document.addEventListener("DOMContentLoaded", function () {
    // Capturando os seletores
    const proximasRevisoes = document.querySelectorAll(".info-proximaRevisao");
    // Enviando para execução
    verifica(proximasRevisoes);
});

// Recebendo os valores do array proximasRevisoes
function verifica(ultimaRevisoes) {
    // Rodando todos os valores
    ultimaRevisoes.forEach(function (td) {
        // Enviando para a função de mudança de cor
        mudaCor(td);
    });
}
// Recebendo todos os valores separados do array
function mudaCor(td) {
    // Transformando os valores em string
    const dataPagina = td.textContent;
    // Transformando string em data
    const data = new Date(dataPagina);
    // Pega a data atual
    const hoje = new Date();
    // Pega o valor devolvido pela function calculo
    const quantidadeDeDias = calculoDeDias(hoje, data);


    console.log(quantidadeDeDias);
    



    if (quantidadeDeDias < 10) {
        mudaParaVermelho(td);
    }
    else if (quantidadeDeDias < 15) {
        mudaParaAmarelo(td);
    }
    else
        mudaParaVerde(td);
}

function mudaParaVermelho(td) {
    td.style.backgroundColor = "#FF0F0F";
};

function mudaParaAmarelo(td) {
    td.style.backgroundColor = "#FFFA00";
}

function mudaParaVerde(td) {
    td.style.backgroundColor = "#31FF4E";
}

function calculoDeDias(dataAtual, ultimaRevisao) {
    const segundos = (dataAtual - ultimaRevisao) / 1000;
    const horas = (segundos / 3600);
    const dias = (horas / 24);
    const positivo = (dias * -1)
    const quantidadeDeDias = Math.floor(positivo);

    return quantidadeDeDias;
};




