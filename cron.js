"use strict" // Para o "browser" ignorar qualquer erro do JavaScript

var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; // Quantos milésimos valem 1 segundo?
var cron;

// Inicia o temporizador
function start() {
    cron = setInterval(function() { 
        timer(); 
    }, tempo); // setInterval(): executa um bloco específico repetidamente com um intervalo fixo entre cada chamada.
}

// Para o temporizador
function pause() {
    clearInterval(cron);
}

// Para o temporizador e limpa as variáveis
function stop() {
    clearInterval(cron); 
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';
}

// Faz a contagem do tempo e exibição
function timer() {
    ss++; // Incrementa +1 na variável "ss"

    if (ss == 59) { // Verifica se deu 59 segundos
        ss = 0; // Volta os segundos para 0
        mm++; // Adiciona +1 na variável "mm"

        if (mm == 59) { // Verifica se deu 59 minutos
            mm = 0; // Volta os minutos para 0
            hh++; // Adiciona +1 na variável "hh" 
        }
    } 

    // Cria uma variável com o valor tratado "hh:mm:ss"
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
    // Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    // Retorna o valor tratado
    return format;
}