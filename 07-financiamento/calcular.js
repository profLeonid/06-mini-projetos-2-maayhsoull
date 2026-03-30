'use strict'

export function calcularJuros(valorTotal, txJuros, numParcelas){

    let parcela = valorTotal / numParcelas
    let valor = valorTotal
    let mes = []

    for(let i = 1; i <= numParcelas; i++){

        let jurosMensal = valor * (txJuros / 100)
        let totalMensal = parcela + jurosMensal
        let saldoFinal = valor - parcela

        let meses = {
            mes: i,
            parcela: parcela,
            jurosMensal: jurosMensal,
            totalMensal: totalMensal,
            saldoDevedor: saldoFinal
        }

        mes.push(meses)        

        valor = valor - parcela
    }    

    return mes

}

console.log(calcularJuros(12000, 1.5, 12))