'use strict'

export function criarListaNumeros(){
    //criado o for para que crie um array vazio a partir do 1
    let listaNumeros = []
    for(let i = 1; i <= 10; i++){
        listaNumeros.push(i)
    }

    return listaNumeros
}

export function criarListaAdicao(numero){
    let listaAdicao = []
    let adicao = 0
    for(let i = 1; i <= 10; i++){

        adicao = numero + i
        listaAdicao.push(adicao)
    }

    return listaAdicao
}

export function criarListaSubtracao(numero){
    let listasubtracao = []
    let adicao = 0
    for(let i = 1; i <= 10; i++){
        
        adicao = numero - i
        listasubtracao.push(adicao)
    }

    return listasubtracao
}

export function criarListaMultiplicacao(numero){
    let listaMultiplicacao = []
    let adicao = 0
    for(let i = 1; i <= 10; i++){
        
        adicao = numero * i
        listaMultiplicacao.push(adicao)
    }

    return listaMultiplicacao
}

export function criarListaDivisao(numero){
    let listaDivisao = []
    let adicao = 0
    for(let i = 1; i <= 10; i++){
        
        adicao = (numero / i).toFixed(2)
        listaDivisao.push(adicao)
    }

    return listaDivisao
}
