function mudaParaVermelho(td) {
    td.style.backgroundColor = "#FF0F0F";
};

function mudaParaAmarelo(td) {
    td.style.backgroundColor = "#FFFA00";
}

function mudaParaVerde(td) {
    td.style.backgroundColor = "#31FF4E";
}

function mudaCor(td) {
    const dataPagina = td.textContent;
    const data = new Date(dataPagina);
    const hoje = new Date();
    const quantidadeDeDias = calculoDeDias(hoje, data);

    if (quantidadeDeDias < 10) {
        mudaParaVermelho(td);
    }
    else if (quantidadeDeDias < 15) {
        mudaParaAmarelo(td);
    }
    else
        mudaParaVerde(td);
}

function calculoDeDias(dataAtual, ultimaRevisao) {
    const segundos = (dataAtual - ultimaRevisao) / 1000;
    const horas = (segundos / 3600);
    const dias = (horas / 24);
    const quantidadeDeDias = Math.floor(dias);

    return quantidadeDeDias;
};

function verifica(ultimaRevisoes) {
    ultimaRevisoes.forEach(td => {
        mudaCor(td);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const proximasRevisoes = document.querySelectorAll(".info-proximaRevisao");
    verifica(proximasRevisoes);
});
