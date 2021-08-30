/*
BUBBLE SORT
Percorre o conjunto de dados, comparando o elemento atual com o seu
sucessor e promovendo a troca entre eles caso o primeiro seja maior
que o segundo.
Faz isso em várias passadas, até, que, na última delas, nenhuma troca
tenha sido registrada.
*/

let pass, comps, trocas

function bubbleSort(vetor) {
    
    pass = 0, comps = 0, trocas = 0

    let trocou

    do {
        pass++
        trocou = false

        // Percurso for tradicional até a PENULTIMA posição do vetor
        for(let i = 0; 1 < vetor.length - 1; i++) {
            comps++
            if(vetor[i] > vettor[i + 1]) {
                // Efetua a troca entre os elementos por desestruturação
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocou = true
                trocas++
                
            }
        }
    } while(trocou)
}

//let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

// Pior caso
//let nums = [99, 88, 77, 66, 55, 44, 33, 22, 11, 0]

// Melhor caso
let nums = [0, 11, 22, 33, 44, 55, 66, 77, 88, 99]

bubbleSort(nums)
console.log(nums)
console.log({pass, comps, trocas})

/**************************************************************/

import { nomes } from './Data/nomes-desord.mjs'

console.time('Tempo de ordenação')
bubleSort(nomes)
console.timeEnd('Tempo de ordenação')

console.log(nomes)
console.log({pass, comps, trocas})

