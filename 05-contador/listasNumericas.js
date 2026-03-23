'use strict'

export function criarListaNumeros(quantidade){
    //criado o for para que crie um array vazio a partir do 1
    let listaNumeros = []
    for(let i = 1; i <= quantidade; i++){
        listaNumeros.push(i)
    }

    return listaNumeros
}

export function criarListaPares(quantidade){
    let listaPares = []
    let par = 2
    for(let i = 1; i <= quantidade; i ++){
        listaPares.push(par)

        par += 2
    }

    return listaPares
}

export function criarListaImpares(quantidade){
    let listaImpares = []
    let impar = 1

    for(let i = 1; i <= quantidade; i ++){
        listaImpares.push(impar)
        impar += 2
    }
    return listaImpares
}

export function criarListaMult5(quantidade){
    let listaMult5 = []
    let mult5 = 5

    for(let i = 1; i<= quantidade; i ++){
        listaMult5.push(mult5)
        mult5 += 5
    }

    return listaMult5

}

export function criarListaPotencia2(quantidade){
    let listaPotencia2 = []
    for(let i = 0; i < quantidade; i++){
        listaPotencia2.push(2**i)
    }

    return listaPotencia2
}

