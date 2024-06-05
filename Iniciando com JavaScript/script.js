//1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

//alert('Hello World!')

//2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.

/*let numOne = prompt('Digite o 1º número:')
let numTwo = prompt('Digite o 2º número:')
let soma = Number(numOne) + Number(numTwo)
alert(`A soma de ${numOne} e ${numTwo} é igual a ${soma}`)
*/

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

/*let idade = 10
console.log(typeof idade == 'number'? 'é um número' : 'Não é um número') 
*/

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

/*const nome = 'Heitor'
if (typeof nome == 'string'){
    alert('É uma string')
}else{
    alert('Não é uma string')
}
*/

//5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
/*const isBoolean = false
if (typeof isBoolean =='boolean'){
    alert('É um booleano')
}else{
    alert('Não é um booleano')
} */

//6.6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
/* let numberOne = 35
let numberTwo = 13
let sub = numberOne - numberTwo
alert(`A subtração de ${numberOne} e ${numberTwo} é igual a ${sub}`)*/

//7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
let one = 100
let two = 25
let mult = one * two
alert(`A multiplicação de ${one} e ${two} é igual a ${mult}`)
//8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
let div = one / two
alert(`A divisão de ${one} e ${two} é igual a ${div}`)

//9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
if(one%2 == 0){
    alert(`${one} é um número par`)
}else{
    alert(`${one} não é um número par`)
}
//10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
if(two%2 == 0){
    alert(`${two} não é um número impar`)
}else{
    alert(`${two} é um número impar`)
}