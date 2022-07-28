const express = require("express");
const app = express();

let cards = [
    {
    name: "Dragon Blanco de tres cabezas",
    ATK: 4500,
    DEF: 2000,
    Nivel: 8,
    Atributo: "Luz",
    },
    {
    name: "Mago Negro",
    ATK: 4000,
    DEF: 4000,
    Nivel: 8,
    Atributo: "Oscuridad",
    },
    {
    name: "Ala Gris",
    ATK: 3000,
    DEF: 1500,
    Nivel: 6,
    Atributo: "Viento",
    },
    {
    name: "Albion el Dragon Señalado",
    ATK: 2000,
    DEF: 2000,
    Nivel: 4,
    Atributo: "Fuego",
    },
];

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

const PORT = 3000;
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})

