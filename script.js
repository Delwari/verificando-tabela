document.addEventListener('DOMContentLoaded', function(){
    const capturaRevisao = document.querySelectorAll(".info-proximaRevisao");
    verifica(capturaRevisao);
})

function verifica(separandoRevisoes) {
    separandoRevisoes.forEach(td => {
        mudaCor(td);
    });
}

function mudaCor(td) {
    const conversaoString = td.textContent;
    const data = new Date(conversaoString);
    const hoje = new Date();
    const dataProxima = calculaDias(hoje, data);

    if(dataProxima < 10){
        td.style.backgroundColor = "#FF0000"
    }
    else if(dataProxima < 15){
        td.style.backgroundColor = "#FFFF00"
    }
    else{
        td.style.backgroundColor = "#00FF00"
    }
}

function calculaDias(dataAtual, DataRevisao) {
    const segundos = (dataAtual - DataRevisao) / 1000;
    const horas = (segundos / 3600);
    const dias = (horas / 24);
    const positivo = (dias * -1);
    const resultadoDoCalculo = Math.floor(positivo);

    return resultadoDoCalculo;
}

























// // Rodar o codigo toda vez que houver um reload na pag
// document.addEventListener("DOMContentLoaded", function () {
//     // Capturando os seletores
//     const proximasRevisoes = document.querySelectorAll(".info-proximaRevisao");
//     // Enviando para execução
//     verifica(proximasRevisoes);
// });

// // Recebendo os valores do array proximasRevisoes
// function verifica(ultimaRevisoes) {
//     // Rodando todos os valores
//     ultimaRevisoes.forEach(td =>
//         // Enviando para a função de mudança de cor
//         mudaCor(td));
// };
// // Recebendo todos os valores separados do array
// function mudaCor(td) {
//     // Transformando os valores em string
//     const dataPagina = td.textContent;
//     // Transformando string em data
//     const data = new Date(dataPagina);
//     // Pega a data atual
//     const hoje = new Date();
//     // Pega o valor devolvido pela function calculo
//     const quantidadeDeDias = calculoDeDias(hoje, data);
//     // (Quantidade de dias que faltam)

//     // Caso a quantidade de dias seja menor que 10 chame a função MudaParaVermelho
//     if (quantidadeDeDias < 10) {
//         mudaParaVermelho(td);
//     }
//     // Caso a quantidade de dias seja menor que 15 chame a função MudaParaAmarelo
//     else if (quantidadeDeDias < 15) {
//         mudaParaAmarelo(td);
//     }
//     // Caso a quantidade de dias não corresponda com os valores acima chame a função MudaParaVerde
//     else
//         mudaParaVerde(td);
// };

// // Executa a mudança das cores para as Revisões
// function mudaParaVermelho(td) {
//     td.style.backgroundColor = "#FF0F0F";
// };

// function mudaParaAmarelo(td) {
//     td.style.backgroundColor = "#FFFA00";
// };

// function mudaParaVerde(td) {
//     td.style.backgroundColor = "#31FF4E";
// };
// //                                                                                                                   //
// //// Eu sei que e possivel executar sem criar as funções, no entanto está foi a forma em que o projeto foi passado ////
// //                                                                                                                   //

// // Executa o calculo de transformar os milesimos em dias
// function calculoDeDias(dataAtual, ultimaRevisao) {
//     // Como os valores chegam em milesimo e "nescessario" fazer a conversão para dias
//     const segundos = (dataAtual - ultimaRevisao) / 1000;
//     // Dividindo segundos por 3600 para gerar horas
//     const horas = (segundos / 3600);
//     // Dividindo horas por 24 para gerar dias
//     const dias = (horas / 24);
//     // Multiplicando por -1 para gerar um valor positivo
//     const positivo = (dias * -1);
//     // Converte o valor em decimal para valor inteiro
//     const quantidadeDeDias = Math.floor(positivo);
    
    

//     // Retorna o valor obtido, assim quando for chamado a função ela devolvera este valor!!!!
//     return quantidadeDeDias;
// };




