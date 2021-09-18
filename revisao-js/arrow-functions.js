// Função tradicional com 1 parâmetro e
// 1 linha no corpo, com return
function quadrado(x) {
    return x * x
}

// ARROW FUNCTION: forma "abreviada" de escrever funções em JS

// Arrow function equivalente
// 1) A função é atribuída a uma variável (ou ainda melhor, a uma constante)
// 2) Desaparece a palavra-chave "function"
// 3) Desaparecem os parênteses em torno do parâmetro
// 4) Entre o parâmetro e o corpo da função, temos o sinal "=>" (arrow, flecha)
// 5) Desaparecem as chaves que delimitam o corpo da função
// 6) Desaparece a palavra-chave "return"
const quadrado2 = x => x * x

console.log(quadrado(7))
console.log(quadrado2(7))

console.log('------------------------------------------')

// Função tradicional com 2 parâmetros, 1 linha de corpo com return
function potencia(base, expoente) {
    return base ** expoente
}

// Arrow function correspondente
// Retornam os parênteses em torno dos parâmetros
const potencia2 = (base, expoente) => base ** expoente

console.log(potencia(2, 5))
console.log(potencia2(2, 5))

console.log('------------------------------------------')

// Função tradicional sem parâmetros, 1 linha de corpo com return
function dataHoraAtual() {
    return new Date()
}

// Arrow function correspondente
// Os parênteses vazios marcam a posição do parâmetro
const dataHoraAtual2 = () => new Date()

console.log(dataHoraAtual())
console.log(dataHoraAtual2())

console.log('------------------------------------------')

// Função tradicional com 1 parâmetro e múltiplas linhas de corpo
function fatorial(n) {
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

// Arrow function correspondente
// Retornam as chaves delimitando o corpo da função
const fatorial2 = n => {
    let res = 1
    for(let i = n; i > 1; i--) res *= i
    return res
}

console.log(fatorial(5))
console.log(fatorial2(5))