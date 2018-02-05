let i =10
i = 20

i = 'teste'
const k = 10

console.log(i,k)

const soma = (num1,num2) => num1 + num2

const subtração = (num1, num2) => num1 - num2

const operacao = (op, num1, num2) => op(num1,num2)

console.log('Operação','soma', operacao(soma,10,20),'subtração', operacao(subtração, 60,40))

const arrey = [1,2,3,4]
const print = num => console.log ('Num:' + num)

arrey.forEach(print)

