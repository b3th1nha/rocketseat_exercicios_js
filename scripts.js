//Object

/* const person = {
        name: 'Beth',
        age: 34,
        weight: 72.3,
        isHuman: true,
}

console.log(person.name)


//Array

const animals = [
        'Lion', //0
        'Monkey', //1
        'Cat', //2
]

//aceesar valores dentro do Array
console.log(animals.length)
//length = valor total
//caso só queira uma posição 
//(animals[2]) */

//__proto__ (Prototype)** 

// MANINPULANDO STRINGS E ARRAY

/* Type conversion (typecasting) vs
Type coersion (só o JS uso esse tipo)
* alteração de um tipo de dado para outro tipo

ex: mudar uma string em numero 

console.log(("9") + 5)
console.log(Number("9") + 5) */

//transformando numero em string e string em numero
/* let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))*/


//contar qtos. caracteres tem um palavra e qtos digitos tem o numero
/* let word = "paralelepipedo"
console.log(word.length)
let number = 3652147812
console.log(String(number).length) */

//transformar um numero quebrado com 2 casas decimais e trocar ponto em virgula usando metodo
/* let number = 345.5442118454
console.log(number.toFixed(2).replace(".",","))
console.log(number.toFixed(3).replace(".",",")) */

//transformar letra minusculas em maiusculas e vice-versa
/* let word = "Estudar é muito legal"
console.log(word.toUpperCase())
console.log(word.toLowerCase())
console.log(word.toUpperCase(),word.toLowerCase()) */



//separe um texto que contem espaço, em um novo array ond cada texto é uma posição do array. depois disso, transforme o array em um texto onde os espaços sao _.
/* let phrase = "Eu quero muito dinheiro"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(myArray)
console.log(phraseWithUnderscore.toUpperCase()) */

//Varificar se o texto contém a palavra Dinheiro
/* let phrase = "Eu quero muito Dinheiro"
console.log(phrase.includes("dinheiro"))  */ //faz diferença a string ter letra MAIU. ou minus. 

//criar Array com Construtor
/* let myArray = new Array(["a","b","c"])
console.log(myArray) */

//contar elementos do Array
/* console.log(["a","b","c"].length)
console.log([
        "a",
        {type: "array"},
        function(){return "alô"},
        "Fim das Arrays"
].length)

console.log([
        "a",
        {type: "array"},
        function(){return "alô"},
        "Fim das Arrays"
][2]()) */

//TRNSFORMAr um cadeia de caracteres em elemntos de um array
/* let word = "manipulação"
console.log(Array.from(word)) */

//GRANDE MANIPULAÇÂO

//- pegar o array
//let techs = ["html", "css", "js"]
//-adicionar um item no fim
//techs.push("modejs") //o push já sabe que é o último
//-adicionar no começo
//techs.unshift("sql")//unshift já sabe que é no começo
//-remover do fim
//techs.pop()
//- remover do começo
//techs.shift()
//-pegar somente alguns elementos do array
//console.log(techs.slice(1, 3))
//- remover 1 ou mais itens em qq posição do array
//techs.splice(1,2)
//-encontrar a posição de um elemnto no array 
/* let index = techs.indexOf("js")
techs.splice(index, 1)
console.log(techs) */



/* - Expressions
        -Operators: Binary (number)
                    Unary ++ ou --
                    Ternary (false/true ? "alo" : nada) */

//new

/* let name = new String ("Beth")
name.surName = "Araujo"
let age = new Number (34)
console.log(name.surName, age)
let date = new Date("2023-04-08")
console.log(date) */

//unarios
/*const person = {
        name: "Beth", age: 34,
}
delete person.age
console.log(person)*/

//Operadores aritiméticos

//multiplicação *
//console.log(3.2 * 9)
//divisão /
//console.log(12 / 5)
//soma +
//console.log(34.5 + 34.5)
//subtração -
//console.log(365 - 65)

//resto da dicisão %
//let remaider 
//remaider = 11 % 9
//console.log(remaider)

//incremento ++
//let increment = 0
//increment ++
//console.log(increment)


//decremento --
//let decrement = 0
//decrement --
//console.log(decrement)

//exponecial ** (elevado)
//console.log(3**3)

//AGRUPA EXPRESSÔES (grouping operator)
/* let total = 2 + 3 * 5
console.log(total)
let total2 = (2 + 3) * 5
console.log(total2) */

//OPERADOR DE COMPARAÇÂO

//let one = 1
//let two = 2

// == igual a 
//console.log(two == 1)
//console.log(one == "1")

//!= diferente de
//console.log(one != 2)
//console.log(two != 2)

// === estritamente igual
//console.log(one === "1") //salse pois "1" é ua string
//console.log(one === 1)

// !== estritamente diferente
//console.log(two !== "2")
//console.log (two !== 2)

// > (maior que)
//console.log(one > 2)

// >= (maior ou igual)
//console.log(two >= 2)

// < (menor que)
//console.log(one < two)

// <= (menor ou igual)
//console.log(one <= two)
//console.log (one <= 1)
//console.log (two <= 1)

//ATRIBUIÇAO (assignment)
//let x
//assignment
//==x = 1

// addition assignment
//x = x + 2
//x += 2
//subtraction assignemt
//x -= 2
//multiplication
//x *= 2
//division
//x /= 2
// remainder , exponetiation
//x %= 2
//x **= 2 

//OPERADORES LOGICOS - BOOLEANOS

//let pao = true
//let queijo = false
//AND &&
//console.log(pao && queijo)
//OR || 
//console.log(pao || queijo)
// NOT !
//console.log(!pao)

//OPERADOR CONDICIONAL (TERNÁRIO)
// - condiççao valor 1 se não valor 2
// condição ? value 1 : value 2
//exemplo café da manhã top
//let pao = true
//let queijo = false
//let cafe = true
                        // (se tem) ? value 1 (senao): value 2
//const topBreakfast = pao && queijo && cafe ? "Café TOP" : "Café Ruim"

//maior de 18

/* let age = 17
const canDrive = age >= 18 ?"can drive" : "can't drive"
console.log(canDrive) */

//OPERADOR DE STRING

//concatenação
//let eu = "Eliza"
//console.log(eu + "beth")

/* FALSY (quando um valor é considerado false em contextos onde um booleano é obrigatório) (condicionais e loops)

false
0
-0
""
null
underfined
NaN


console.log (null ? "verdadeiro" : "falso")

*/

/* TRUTHY (quando um valor é considerado true em contextos onde um booleano é obrigatório) (condicionais e loops)

true 
{}
[]
1
3.25
"0"
"false"
-1
Infinity
-Infinity


console.log({} ? "verdadeiro" : "falso")
*/


/* PRECEDÊNCIA DE OPERADORES
* grouping ()
*negação e incremento ! ++ --
* multiplicação e divisão * /
* adição e subtração + - 
*relacional < <= > >=
*igualdade == != ===!==
*AND &&
*OR ||
*condicional ?:
*assignment = += -= *=

Lembrando que 0 é transformado em false e 1 é transformado em true, por baixo dos panos
*/

// (3 > 2 && 2 > 1) true && true
