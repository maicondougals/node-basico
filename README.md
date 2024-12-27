
# Iniciando um Projeto Node.js

Este guia apresenta os passos básicos para iniciar um projeto Node.js com Express.

## Instalação Inicial

1. No diretório do projeto, execute:
```bash
npm init
```
> Este comando cria o arquivo package.json no diretório atual

## Configuração do package.json

### Ambiente de Desenvolvimento
```json
"scripts": {
    "dev": "nodemon src/app.js"
}
```

### Ambiente de Produção
```json
"scripts": {
    "start": "node src/app.js"
}
```

## Estrutura do Projeto
```
Projeto/
├── node_modules/
├── src/
│   └── app.js
├── .env
├── .gitignore
├── package.json
└── package-lock.json
```

## Configuração dos Arquivos

### app.js (Configuração Básica)
```javascript
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
```

### .env
```env
PORT = 3001
```

### .gitignore
```
node_modules
.env
```

## Iniciando o Servidor

### Desenvolvimento (com nodemon)
```bash
npm run dev
```

### Produção
```bash
npm start
```

## Dependências Necessárias

### dotenv
```bash
npm i dotenv
```

### nodemon (Desenvolvimento)
```bash
npm i nodemon --save-dev
```
> Reinicia o servidor automaticamente ao salvar o código

### express
```bash
npm i express
```
> Framework para Node.js que facilita a criação de rotas