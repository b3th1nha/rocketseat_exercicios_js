/* Gastos Familiares

Desafio:

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo. */


let family = {
    entradas: [6700, 500, 500, 1220,45],
    gastos: [144.25, 1500, 224.25, 640, 1100,650]
}

function sum (array){
    let total = 0
        for (let value of array){
            total += value
        }
    return total
}
 function calculateBalance () {
    const calculateEntradas = sum (family.entradas)
    const calculateGastos = sum (family.gastos)

    const total = calculateEntradas - calculateGastos

    const saldoPositivo = total >= 0

    let saldo = "Negativo"

    if (saldoPositivo){
         saldo =  "Positivo"
    }
    console.log (`Seu saldo deu ${saldo} de R$ ${total.toFixed(2)}`)
 }
calculateBalance()