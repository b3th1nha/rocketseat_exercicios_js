/* Celsius em Fahrenheit

Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação de uma unidade para outra 

C = (F - 32) * 5/9

F = C *9/5 + 32 

*/

function transformDegree (degree){
    const celsius = degree.toUpperCase().includes("C")
    const fahrenheit = degree.toUpperCase().includes("F")

    if(!celsius && !fahrenheit){
        throw new Error ("Grau não identificado")
    }

    let updateDegree = Number (degree.toUpperCase().replace("F", ""));
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = "°C"

    if (celsius){
        updateDegree = Number (degree.toUpperCase().replace("C", ""));
        formula = (celsius) => celsius * 9/5 + 32 
        degreeSing = "F"
    }

    return formula(updateDegree) + degreeSing
}

try{
    console.log(transformDegree("10C"))
    console.log(transformDegree("50F"))
    transformDegree("50H")
}catch(error){
    console.log(error.message)
}