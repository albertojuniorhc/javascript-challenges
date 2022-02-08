/*
Crie um array com 5 items (tipos variados).
*/
let arr = [1, 'dois', 3, {prop1: 4, prop2: 'cinco'}, 6]

/*
Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
A função deverá retornar o array atualizado.
*/
const addItem = arg => {
    arr.push(arg)
    return arr;
}

/*
Adicione um novo array ao array criado no início do desafio, com ao menos 3
itens de tipos diferentes, mostrando o resultado no console.
*/
console.log(addItem(['lalala', 5, 6, 7]))

/*
Mostre no console o segundo elemento desse último array, criado acima, com a
frase:
"O segundo elemento do segundo array é [ELEMENTO]."
*/
console.log('O segundo elemento do segundo array é ' + arr[5][1])

/*
Mostre no console quantos itens tem o primeiro array criado, com a frase:
"O primeiro array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O primeiro array tem ' + arr.length + ' itens.')

/*
Agora mostre no console quantos itens tem o segundo array criado, com a frase:
"O segundo array tem [QUANTIDADE DE ITENS] itens."
*/
console.log('O segundo array tem ' + arr[5].length + ' itens.')

/*
Utilizando a estrutura de repetição `while`, mostre no console todos os números
pares entre 10 e 20, inclusive esses 2.
*/
console.log( 'Números pares entre 10 e 20:' );
const numerosPares = (start, finish) => {
    for (start; start <= finish; start++) {
        if (start % 2 == 0) {
            console.log(start)
        }
    }
}
numerosPares(10,20)

/*
Na mesma ideia do exercício acima: mostre agora os números ímpares.
*/
const numerosImpares = (start, finish) => {
    for (start; start <= finish; start++) {
        if (start % 2 != 0) {
            console.log(start)
        }
    }
}
console.log( 'Números ímpares entre 10 e 20:' );
numerosImpares(10,20)

/*
Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
Só vamos mudar o range:
- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
*/
console.log( 'Números pares entre 100 e 120:' );
numerosPares(100,120)

console.log( 'Números ímpares entre 111 e 125:' );
numerosImpares(111,125)