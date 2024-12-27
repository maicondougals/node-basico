import dotenv from "dotenv"
import express from "express"

dotenv.config()

const app = express()
const {PORT} = process.env

app.get('/', (req, res) => {
    res.send(
        'Oi! Essa é a rota inicial da página "/" acesse a cota "/Ola"'
    )
})

app.get('/Ola', (req, res)=> {
    res.json({
        name:'maicon douglas',
        yars:'24'
    })
})

app.listen(PORT, ()=> {
    console.log(`servidor rodando na porta ${PORT}`)
    console.log("Derrubar servidor: Ctrl + C")

})