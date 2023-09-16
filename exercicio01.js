function calcularPrecoComDesconto(valorProduto,qtdeProduto,callback) {
    const valorTotal = valorProduto * qtdeProduto
    console.log(`Preço final com desconto: ${callback(valorTotal)}`)
}

calcularPrecoComDesconto(10,20,(valorTotal)=>{
    const desconto = 0.1
    return valorComDesconto = valorTotal * (1 - desconto)
})