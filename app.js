require("dotenv").config();
const express = require("express");
const cors = require("cors");
const dbConnect = require('./config/mongo')
const app = express();

app.use(cors());

const port = process.env.PORT || 3000;


/**
 *  To call routes!!
 */
//TODO localhost/api/_______
app.use("/api", require("./routes"))



app.listen( port, () => {
    console.log(`La  app esta lista en el puerto:${port}`);
})

dbConnect();