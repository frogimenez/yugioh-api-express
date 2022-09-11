require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.listen( port, () => {
    console.log(`La  app esta lista en el puerto:${port}`);
})