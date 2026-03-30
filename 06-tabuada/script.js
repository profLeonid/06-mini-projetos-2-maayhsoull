'use strict'

import {
    criarListaNumeros,
    criarListaAdicao,
    criarListaSubtracao,
    criarListaMultiplicacao,
    criarListaDivisao

} from "./listasNumericas.js"

const gerarTabuada = document.getElementById('gerarTabuada')

function criarLinha(numero, adicao, subtracao, multiplicacao, divisao){
    const tabela = document.getElementById('tabela')

    const tr = document.createElement('tr')

    const tdNumeros = document.createElement('td')
    tdNumeros.textContent = numero
    const tdAdicao = document.createElement('td')
    tdAdicao.textContent = adicao
    const tdSubtracao = document.createElement('td')
    tdSubtracao.textContent = subtracao

    if(subtracao < 0){
        tdSubtracao.style.color = 'red'
    }
    const tdMultiplicacao = document.createElement('td')
    tdMultiplicacao.textContent = multiplicacao
    const tdDivisao = document.createElement('td')
    tdDivisao.textContent = divisao


    tr.replaceChildren(tdNumeros, tdAdicao, tdSubtracao, tdMultiplicacao, tdDivisao)
    tabela.appendChild(tr)
}

function preencherTabela(){
    const numero = Number(document.getElementById('numero').value)

    const listaNumeros = criarListaNumeros()
    const listaAdicao = criarListaAdicao(numero)
    const listasubtracao = criarListaSubtracao(numero)
    const listaMultiplicacao = criarListaMultiplicacao(numero)
    const listadivisao = criarListaDivisao(numero)

    document.getElementById('tabela').replaceChildren()
    for (let i=0; i <= 10; i++){
        criarLinha(listaNumeros[i],listaAdicao[i], listasubtracao[i],listaMultiplicacao[i],listadivisao[i])
    }
}

gerarTabuada.addEventListener('click', preencherTabela)