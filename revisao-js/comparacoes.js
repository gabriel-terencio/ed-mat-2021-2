// Números
let a = 10, b = 8, c = 10
console.log(a > b)
console.log(a < b)
console.log(a === b)
console.log(a !== b)
console.log(a === c)
console.log(a !== c)

console.log('--------------------------------------------------------')

// Strings
let nome1 = 'CATIFUNDA', nome2 = 'FELISBINO', nome3 = 'ÁGATHA'
console.log(nome1 > nome2)
console.log(nome1 < nome2)
console.log(nome1 === nome2)
console.log(nome1 > nome3)
console.log(nome1 < nome3)
console.log(nome1 === nome3)

console.log('--------------------------------------------------------')

// Booleanos
let x = true, y = false, z = true
console.log(x > y)
console.log(x < y)
console.log(x === y)
console.log(x !== y)
console.log(x === z)
console.log(x !== z)

console.log('--------------------------------------------------------')

// Diferença entre usar == e ===
// == : verdadeiro se o conteúdo for igual, mesmo se os tipos forem diferentes
// === : verdadeiro apenas se CONTEÚDO E TIPO forem iguais
let i = 56, j = '56'
console.log(i == j)     // Converte tipos automaticamente
console.log(i === j)    // NÃO converte automaticamente os tipos

console.log('--------------------------------------------------------')

// Vetores
let v1 = [10, 20, 30, 40, 50]
let v2 = [-3, -2, -1, 0]
let v3 = [10, 20, 30, 40, 50]
console.log(v1 > v2)
console.log(v1 < v2)
console.log(v1 === v2)
console.log(v1 !== v2)
console.log(v1 === v3)
console.log(v1 !== v3)
// MORAL DA HISTÓRIA: vetores NÃO SÃO diretamente comparáveis

console.log('--------------------------------------------------------')

// Objetos
let o1 = { marca: 'Volkswagen', modelo: 'Fusca', cor: 'preto', ano: 1969 }
let o2 = { marca: 'Chevrolet', modelo: 'Opala', cor: 'marrom', ano: 1979 }
let o3 = { marca: 'Volkswagen', modelo: 'Fusca', cor: 'preto', ano: 1969 }
console.log(o1 > o2)
console.log(o1 < o2)
console.log(o1 === o2)
console.log(o1 !== o2)
console.log(o1 === o3)
console.log(o1 !== o3)

console.log('--------------------------------------------------------')
console.log(o1.marca > o2.marca)
console.log(o1.marca < o2.marca)
console.log(o1.modelo === o3.modelo)

// MORAL DA HISTÓRIA: objetos também NÃO SÃO diretamente comparáveis

/*
    CONCLUSÃO
    Em JavaScript, apenas os seguintes tipos de dados são diretamente
    comparáveis:
    * números
    * strings
    * booleanos
*/