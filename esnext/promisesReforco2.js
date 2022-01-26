// CALLBACK HELL
setTimeout(function(){
    console.log("Executando callback....")

    setTimeout(function(){
        console.log("Executando callback....")

        setTimeout(function(){
            console.log("Executando callback....")
        }, 2000)
    }, 2000)
}, 2000)

// com promises

function esperarPor(tempo = 2000){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Executando promise...')
            resolve()
        }, tempo)
    })
}

esperarPor().then(() => esperarPor())
            .then(esperarPor)