// var tem escopo de função

{{{var oi = 'tchal'}}}

console.log(oi)

const fufu = a => {
    var ai = 4
    return ai + a
} 

console.log(fufu(3))

/*
 * console.log(ai)
 * ai inacessível
 */