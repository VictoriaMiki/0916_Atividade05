function calcularPrecoComDesconto(valorProduto,qtdeProduto,callback) {
    const valorTotal = valorProduto * qtdeProduto
    console.log(`Preço final com desconto: ${callback(valorTotal)}`)
}

calcularPrecoComDesconto(10,20,(valorTotal)=>{
    const desconto = 0.1
    return valorComDesconto = valorTotal * (1 - desconto)
})

// Resolução do Professor

function calcularPrecoComDesconto(valor,qtd,fncallback){
    const total = valor * qtd
    return fncallback(total)
}

function descontoSimples(valor){
    const desconto = 0.1 // 10%
    return valor - (valor * desconto)
}

const precoNormal = 100
const precoComDesconto = calcularPrecoComDesconto(precoNormal,1,descontoSimples)
console.log(precoComDesconto)