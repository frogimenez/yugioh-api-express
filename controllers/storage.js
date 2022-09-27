const {storageModel} = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL;



/**
 * Obtener la lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req,res) => {
    const data =  await storageModel.find({});

    
    res.send({data})
};

/**
 * Obtener un elemento!
 * @param {*} req 
 * @param {*} res 
 */

const getItem = (req,res) => {
    const data = ['Hola mundo']
    
    res.send({data})
};
/**
 *Crear un registro
 * @param {*} req 
 * @param {*} res  
 */
const createItem = async (req,res) => {
    const { file } = req;
    console.log(file);
    const fileData = {
        url:`${PUBLIC_URL}/${file.fileName}`,
        fileName: file.fileName,

    }
    //TODO create nor working
    const data = await storageModel.create(fileData);
    
    res.send({data})
};

/**
 *Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req,res) => {};

/**
 *Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req,res) => {};



module.exports = { getItems, getItem, createItem, deleteItem, updateItem }