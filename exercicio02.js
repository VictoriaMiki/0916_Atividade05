const arrayPrint = [
                [5,10,12],
                [2,9,11],
                [15,8,6]
            ]

console.log("Valores maiores que 10:")
arrayPrint.forEach((NULL,i)=> {
    arrayPrint[i].forEach((item)=> {
        if (item > 10) {
            console.log(item)
        }
    })
})

// Resolução do Professor

arrayPrint.forEach(lista => { // Ele joga cada linha (item) da matriz dentro da variável lista
    lista.forEach(numero => {
        if(numero > 10) {
            console.log(numero)
        }
    })
})