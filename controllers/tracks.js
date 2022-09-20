const {tracksModel} = require('../models')



/**
 * Obtener la lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req,res) => {
    const data =  await tracksModel.find({});

    
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
    const {body} = req;
    console.log(body);
    const data = await tracksModel.create(body);
    
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