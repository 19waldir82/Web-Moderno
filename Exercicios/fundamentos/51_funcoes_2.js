const imprimirSoma = function (a, b){
    console.log(a + b)
}

imprimirSoma(6, 8)




const soma = (a, b) => { // arrow function
    return a + b
}

console.log(soma(6, 9))



const soma2 = (a, b) => a + b  // retorno implicito arrow function

console.log(soma2(3, 5))



const soma3 = a => a + 4 // arrow function 1 parâmetro sem parenteses

console.log(soma3(2))