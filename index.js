const express = require('express')
const app = express()
const mysql = require('mysql2/promise')
const bodyParser = require('body-parser')
const session = require('express-session')
const account = require('./account')
const admin = require('./admin')
const groups = require('./groups')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
app.use(session({
    secret: 'fullsatck-academy',
    resave: true,
    saveUninitialized: true
}))
app.set('view engine', 'ejs')

const init = async() => {
    const connection = await mysql.createConnection({
        host: 'mysql873.umbler.com:41890',
        user: 'tiago238',
        password: 'Ti12bom36Go',
        database: 'futibaclub'
    })

    app.use((req,res, next) => {
        if(req.session.user){
            res.locals.user = req.session.user
        }else{
            res.locals.user = false
        }
        next()
    })
       
    app.use(account(connection))
    app.use('/admin', admin(connection))
    app.use('/groups', groups(connection))


    let classification = null
    app.get('/classification', async(req, res) =>{
        if(classification){
            res.send(classification)
        }else{
    const query= ` select
            users.id,
            users.name,
            sum(guessings.score) as score
            from users
            left join
                guessings
                    on guessings.user_id = users.id
            group by guessings.user_id
            order by score DESC`
                
        const[rows] = await connection.execute(query)
        res.send(rows)
        }
    })
    
    const port = process.env.PORT || 3000;
    app.listen(port, err => {
        console.log('Futiba Club server is running...')
    })
}
init()
 
