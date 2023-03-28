//Aula 1

//app de frases motivacionais


//declaração de função

/*function createPhrases(){
console.log("Estudar é muito bom")
console.log("Paciência e persistência")
console.log("Revisão é a mãe do aprendizado")
}

//executar (rodar/chamar) a função

createPhrases()*/


// Aula 2

//parametros da função
/* const sum = function(me, you){
    total = me + you
   

}
let me = 34
let you = 47
//sum(2, 3) //argumentos

console.log(`Me é igual a ${me}`)
console.log(`You é igual a ${you}`)
console.log(`A soma é ${me+you}`)


//função liquidificador - exemplo

function fazerSuco (fruta1,fruta2){
    return "Suco de " + fruta1 + fruta2
}

const copo = fazerSuco ("banana", "maça")


console.log(copo)

//arrow function, modos difrentes de escrever o function

const sayMyName = () => {
    console.log ("Beth")
}
sayMyName(); */

//callback function

/* function sayMyName(name){
    console.log("antes de executar a função callback")

    name()

    console.log("depois de executar a função callback")
}
sayMyName (
    () => {
        console.log("estou em um callback")
    }
) */

//FUNCTION CONSTRUCTOR - criar varios objetos

/* function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " andando"
    }
}


const beth = new Person("Beth")
const mayk = new Person("Mayk")
console.log(beth.walk())
console.log(mayk.walk()) */



//CONTROLE FLOW (IF - ELSE) if(true) else(senão)

/* let temperature = 36
//let highTemperature = 
//let mediumTemperature = 

if(temperature >=37.5){
    console.log("Febre Alta")
}else if(temperature < 37.5 && temperature >= 37
    ){
    console.log("Febre Moderada")
}else {
    console.log ("Saudável")
} */


//SWITCH

/* let expression = "a"
switch(expression){
    case "a": 
    //.. o código
    console.log("a")
       break
    case "b":
    //..código para expression b
    console.log("b")
        break
    default: console.log("default")
        break
} */

//throw (lançar)

/* function sayMyName(name = ""){
    if(name ===""){
        throw new Error ("Nome é obrigatório")
    }
    console.log("depois do erro") //colocar o nome
}
//try...catch (tentar ..... capturar)
try{
    sayMyName() //qual nome
} catch(e){
    console.log(e)
}  */

//ESTRUTURA DE REPETIÇÃO
    //FOR - break: para a execução do momento
        // - continue: pula e continua

    /* for(let i = 10; i > 0; i++){
            if(i === 5){
                continue
            }
            console.log(i)
    } */

    //WHILE 

    /* let i = 0
    while(i > 10){
        console.log(i)
    } */

    //FOR OF - pega todas as informações dos elementos

   /* let name = "Beth"
    let names = ["João", "Paulo", "Pedro"]

    for(let elements of names){
        console.log(elements)
    } */

        //FOR IN
  /* let person = {
        name: "John",
        age: 30,
        weight: 75
    }
    for(let property in person){
        console.log(property)
        console.log(person[property])
    } */

