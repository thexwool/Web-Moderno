/*
Fazer um programa para encontrar todos os pares entre 1 e 100.
*/

function numerosPares(){
    let pares = []
    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            pares.push(i)
        }
    }

    return pares
}

console.log(numerosPares())