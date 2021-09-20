/*
    INSTRUÇÕES

    1) Identifique o algoritmo abaixo.
    2) Faça o mapeamento das variáveis (registre em comentário o propósito de cada uma delas).
    3) Introduza a função de comparação, de modo que o algoritmo possa ser utilizado com vetores de objetos.

*/
// 
const z = (y, fnComp) => {  // Trata-se de uma arrow function, a função é atribuida a uma constante z
    // e tem como parâmetro y 
    // fnComp: função de comparação
    if(y.length < 2) return y // Length responsável pela contagem do vetor, se a contagem do y for menor a
    // 2 a função deverá retornar como resposta y.
    if(fnComp(vetor[y])) return y

    let x = Math.floor(y.length / 2)  // Math.floor retira as casas decimais de um número
    let w = y.slice(0, x) // Slice divide um vetor da primeira posição informada
    let v = y.slice(x)    // até a última posição informada.
    let u
    
    w = z(w) // w é igual a contante z que tem como parâmetro o w
    v = z(v) // v é igual a contante z que tem como parâmetro o v
    let t = 0, s = 0, r = []
    let comps = 0 // comparações começa com zero
    while(t < w.length && s < v.length) { // while é uma estrutura de repetição, diz que 
        comps ++ //(irá contar a quantidade de comparações)
        // enquanto t < w.length e s < v.length faça o if (SE)
        if(w[t] < v[s]) { // se w[t] for < v[s] então o w e o t entrará no vetor r, fará a contagem do t
            r.push(w[t]) // Push é responsável por adicionar um elemento no vetor
            t++ // fará uma contagem de quantas vezes o t aparecerá nas repetições do while
        }
        else { // Se não, o v e o s entrará no vetor r e fará a contagem do s de qantas vezes aparecerá nas repetições
            r.push(v[s])
            s++
        }
    }
    if(t < s) u = w.slice(t) // se t < s então u é igual a w dividindo t
    else u = v.slice(s) // se não, u é igual a v dividindo s
    return [...r, ...u]  //será a concatenação de r e u
    
}

console.log(fnComp)


