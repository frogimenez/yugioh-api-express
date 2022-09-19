



/**
 * Obtener la lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */

const getItems = (req,res) => {
    const data = ['Hola mundo']
    
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
const createItem = (req,res) => {};

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