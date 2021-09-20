/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/

const z = (y, fnComp)=> { // Trata-se de uma arrow function, a função é atribuida a uma constante z
    // e tem como parâmetro y 
    // fnComp: função de comparação
    for(let x = 0; x < y.length - 1; x++) { // para x = 0; x menor que 
        //y.length (Length responsável pela contagem do vetor) - 1
        // x++ irá contar quantas vezes o x aparece. 
       
        let w = x + 1 
        let comps = 0 // comparações começa com zero
        for(let i = w + 1; i < y.length; i++) { //y.length (Length responsável pela contagem do vetor) 
            
            if(fnComp)
            if(y[w] > y[i]) w = i
            comps++ //(irá contar a quantidade de comparações)
        }
        if(y[x] > y[w]) {
            [ y[x], y[w] ] = [ y[w], y[x] ]
        }
    }
}