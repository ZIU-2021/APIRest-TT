const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getProdCompApp = async (req,res) =>{
    const response = await pool.query('SELECT * FROM prod_composicionaplicacion');
    res.json(response.rows)
};

//Create a new register on table Nivel
const createProdCompApp = async (req,res) =>{
    const {idprod,idcomposicionaplicacion} = req.body;
    const response = await pool.query('INSERT INTO prod_composicionaplicacion (idprod,idcomposicionaplicacion) VALUES ($1, $2)',[
        idprod,
        idcomposicionaplicacion
    ]);
    res.json({
        message:'Prod Comp App added succcesfully',
        data:{idprod,idcomposicionaplicacion}
    });
};

//Delete a information from the table
const deleteProdCompApp = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM prod_composicionaplicacion WHERE idprod = $1',[id]);
    res.status(200).json(`Prod Comp App with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getProdCompApp,
    createProdCompApp,
    deleteProdCompApp
};