/*
BUBBLE SORT
Percorre o conjunto de dados, comparando o elemento atual com o seu
sucessor e promovendo a troca entre eles caso o primeiro seja maior
que o segundo.
Faz isso em várias passadas, até, que, na última delas, nenhuma troca
tenha sido registrada.
*/

function bubbleSort(vetor) {
    let trocou

    do {
        trocou = false

        // Percurso for tradicional até a PENULTIMA posição do vetor
        for(let i = 0; 1 < vetor.length - 1; i++) {
            if(vetor[i] > vettor[i + 1]) {
                // Efetua a troca entre os elementos por desestruturação
                [ vetor[i], vetor[i + 1] ] = [ vetor[i + 1], vetor[i] ]
                trocou = true
                
            }
        }
    } while(trocou)
}

let nums = [ 77, 44, 22, 33, 99, 55, 88, 0, 66, 11 ]

bubbleSort(nums)
console.log(nums)
