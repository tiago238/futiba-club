const express = require('express')
const app = express()
const session = require('express-session')

app.use(session({
    secret: 'fullstackacademy',
    saveUninitialized: true,
    resave: true
}))



app.get('/', (req,res) => {
    let i = 0
    if(req.session.i){
        i=req.session.i
    }
    i++
    req.session.i = i
    res.send('<h1>Ola steckacademi' +i+' </h1>')
})
app.get('/page1', (req,res) => {
    res.send('Ola'+i)
})


app.listen(3000, err => {
    if (err){
        console.log('Não foi possível iniciar')
    }else{
        console.log('servidor rodando')
    }
})