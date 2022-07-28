const express = require("express");
const app = express();

let cards = [
    {
    "id": 1,
    "name": "Dragon Blanco de tres cabezas",
    "ATK": 4500,
    "DEF": 2000,
    "Nivel": 8,
    "Atributo": "Luz",
    },
    {
    "id": 2,
    "name": "Mago Negro",
    "ATK": 4000,
    "DEF": 4000,
    "Nivel": 8,
    "Atributo": "Oscuridad",
    },
    {
    "id": 3,
    "name": "Ala Gris",
    "ATK": 3000,
    "DEF": 1500,
    "Nivel": 6,
    "Atributo": "Viento",
    },
    {
    "id": 4,
    "name": "Albion el Dragon Señalado",
    "ATK": 2000,
    "DEF": 2000,
    "Nivel": 4,
    "Atributo": "Fuego",
    },
]

// const app = http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-type': 'application/json'})
//     response.end(JSON.stringify(cards))
// })

app.get("/", (req, resp) => {
    resp.send('<h1>Hello World</h1>')
})

app.get('/api/cards', (req,resp) =>{
    resp.json(cards)
})

app.get('/api/cards/:id', (req,resp) =>{
    const id = req.params.id
    console.log({cards});
    console.log({id});
    const card = cards.find( card => card.id === id)
    resp.json(card)
})

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})

