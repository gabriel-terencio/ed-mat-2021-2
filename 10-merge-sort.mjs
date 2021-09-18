/*
    MERGE SORT

    No processo de ordenação, esse algoritmo "desmonta" o vetor original
    contendo N elementos até obter N vetores de apenas um elemento cada um.
    Em seguida, usando a técnica de mesclagem (merge), "remonta" o vetor,
    dessa vez com os elementos já em ordem.
*/

function mergeSort(vetor) {

    // Para ser dividido, um vetor precisa ter pelo menos 2 elementos
    if(vetor.length < 2) return vetor      // Sai da função sem fazer nada

    // Acha o meio (aproximado) do vetor
    let meio = Math.floor(vetor.length / 2)

    // slice() divide um vetor da primeira posição informada (inclusive)
    // até a ultima posição informada (exclusive)
    let vetEsq = vetor.slice(0, meio)

    // Quando o segundo parâmetro de slice() é omitido, a fatia vai
    // da posição informada até o final do vetor
    let vetDir = vetor.slice(meio)

    // Chamadas recursivas ao mergeSort
    vetEsq = mergeSort(vetEsq)
    vetDir = mergeSort(vetDir)
}