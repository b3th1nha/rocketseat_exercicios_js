 /* TRANSFORMAR NOTAS ESCOLARES

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C.

* de 90 para cima - A
*entre 80 - 89 - B
*entre 70 - 79 - C
*entre 60 - 69 - D
*menor que 60 - E

*/
let score = 60

function getScore(score){
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreE = score < 60 && score >= 0 

    let scoreFinal;

if (scoreA){
    scoreFinal = "Nota A"
}else if (scoreB){
    scoreFinal ="Nota B"
}else if(scoreC){
    scoreFinal = "Nota C"
}else if(scoreD){
    scoreFinal = "Nota D"
}else if(scoreE){
    scoreFinal = "Nota E"
}else{
    scoreFinal = "Nota Inválida"
}
 return (scoreFinal)
}

console.log (getScore(101))
console.log (getScore(65))
console.log (getScore(-1))
console.log (getScore(75))
console.log (getScore(89))
console.log (getScore(95))