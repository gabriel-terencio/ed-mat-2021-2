let frutas = ['laranja', 'maçã', 'banana', 'melancia']

// push(): inserção no final do vetor
frutas.push('morango')

console.log(frutas)

// unshift(): inserção no incio do vetor
frutas.unshift('maracujá')
console.log(frutas)

// splice(): inserção em posição intermediaria
// Parâmetros:
// 1º: a posição para inserção
// 2º: quantos elementos serão apagados? (na inserção, informamos 0)
// 3º: o novo elemento a ser inserido
frutas.splice(3, 0, 'mamão')
console.log(frutas)

// pop(): retira o ultimo elemento do vetor
let ultimo = frutas.pop()
console.log(ultimo, frutas)

//shift(): retira o primeiro elemento do vetor
let primeiro = frutas.shift()
console.log(primeiro, frutas)

// splice(): retira um elemento de qualquer posição
// Parâmetros:
// 1º: a posição do elemento a ser removido
// 2º: quantos elementos serão removidos (na remoção, deve ser pelo menos 1)
// splice() SEMPRE retornará um vetor, mesmo que vazio, na remoção
let intermed = frutas.splice(3,1)
console.log(intermed, frutas)

// os metodos de inserção (push(), unshift() e splice()) são capazes  
// de inserir varios elementos de uma unica vez
frutas.push('jaboticaba', 'abacaxi', 'amora', 'abacate')
console.log(frutas)

console.log('--------------------------------------------------')

//percurso (1): for tradicional
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

console.log('--------------------------------------------------')

//percurso (2): for tradicional em ordem inversa
for(let i = frutas.length - 1; i >= 0; i--) {
    console.log(frutas[i])
}

console.log('--------------------------------------------------')

// percurso (3): for..of
for(let f of frutas) {
    console.log(f)
}

console.log('--------------------------------------------------')

// Percurso (4): forEach()
// forEach() tem como parâmetro uma função que será chamada
// para cada elemento do vetor
frutas.forEach(function(elemento) {
    console.log(elemento)
})