console.log('Início')
setTimeout(() => {
    console.log('Olá')
}, 2000);
console.log('Fim')

const fs = require('fs')

fs.readFile('01.js', (err, conteudo) => {
if(err){
    console.log('Não foi possível ler arquivo')
}else{
    console.log(String(conteudo))
}
})