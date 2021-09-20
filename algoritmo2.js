/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

const z = (y, x, fnComp) => { // Trata-se de uma arrow function, a função é atribuida a uma constante z 
    // e tem como parâmetro y e x
    // fnComp: função de comparação
    let w = 0
    let v = y.length - 1  // Length responsável pela contagem do vetor
    let comps = 0 // comparações começa com zero
    while(v >= w) { // enquanto v for maior ou igual a w faça..
        if(fnComp)
        comps++ //(irá contar a quantidade de comparações)
        let u = Math.floor((w + v) / 2) // Math.floor retira as casas decimais de um número
        if(x === y[u]) return u // se x tiver conteúdo e tipo igual a y[u] retornará u
        else if(x > y[u]) w = u + 1 // se não, se x maior que y[u] então w é igual a u + 1
        else v = u - 1 // se não, v é igual a u -1
    }
    return -1 // caso não entre em nenhum dos SE então retornará -1
}