/*
Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
deles estão fora do intervalo, escrevendo estas informações.
*/

let numeros = [0, 12, 20, 3, 4, -12, 21, 7, 9, 10]

const verificaIntervalo = function(valores){
    let dentro = 0
    let fora = 0

    for(let i = 0; i < valores.length; i++){
        if(valores[i] >= 10 && valores[i] <= 20){
            dentro++
        }else{
            fora++
        }
    }

    return console.log(`Existem ${dentro} número(s) dentro e ${fora} número(s) fora do intervalo 10~20`)
}

verificaIntervalo(numeros)

