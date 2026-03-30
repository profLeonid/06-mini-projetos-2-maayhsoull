'use strict'
// importa apenas uma função
import {
    criarListaPares,
    criarListaNumeros,
    criarListaImpares,
    criarListaMult5,
    criarListaPotencia2

} from "./listasNumericas.js"  

const gerarNumeros = document.getElementById('gerarNumeros')

function criarLinha(numero, par, impar, mult5, potencia2){
    const tabela = document.getElementById('tabela')

    const tr = document.createElement('tr')

    const tdNumeros = document.createElement('td')
    tdNumeros.textContent = numero
    const tdPares = document.createElement('td')
    tdPares.textContent = par
    const tdImpares = document.createElement('td')
    tdImpares.textContent = impar
    const tdMult5 = document.createElement('td')
    tdMult5.textContent = mult5
    const tdPotencia2 = document.createElement('td')
    tdPotencia2.textContent = potencia2


    tr.replaceChildren(tdNumeros, tdImpares, tdPares, tdMult5, tdPotencia2)
    tabela.appendChild(tr)
}

//import completo com todas as funções
// import * as listas from "./listasNumericas.js"

function preencherTabela(){
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNumeros = criarListaNumeros(quantidade)
    const listaPares = criarListaPares(quantidade)
    const listaImpares = criarListaImpares(quantidade)
    const listaMult5 = criarListaMult5(quantidade)
    const listaPotencia2 = criarListaPotencia2(quantidade)

    document.getElementById('tabela').replaceChildren()
    for (let i=0; i < quantidade; i++){
        criarLinha(listaNumeros[i], listaImpares[i],listaPares[i],listaMult5[i],listaPotencia2[i])
    }
}

gerarNumeros.addEventListener('click', preencherTabela)