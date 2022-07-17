function ImprimirSoma(a, b){
    console.log(a + b)
}

ImprimirSoma(4, 6)


function Soma(a, b = 0){ // valor padrão = 0
    return a + b
}

console.log(Soma(5, 3))
console.log(Soma(5))