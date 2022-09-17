const express = require("express");
const fs = require("fs");
const router = express.Router();

//TODO  give absolute path
const PATH_ROUTES = __dirname;

const removeExtensionFile = (fileName) => {
    return fileName.split('.').shift()
}

fs.readdirSync(PATH_ROUTES).filter((file) =>{
    const name = removeExtensionFile(file);
    if(name !== 'index'){

        router.use(`/${name}`,require(`./${file}`))//TODO http://localhost:3001/api/tracks etc..

    }
});



module.exports= router;
