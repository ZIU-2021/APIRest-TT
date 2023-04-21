const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getProd = async (req,res) =>{
    const response = await pool.query('SELECT * FROM prod');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createProd = async (req,res) =>{
    const {idprod, valor_prod, idnivel, idtipoprod} = req.body;
    const response = await pool.query('INSERT INTO prod (idprod, valor_prod, idnivel, idtipoprod) VALUES ($1, $2, $3, $4)',[
        idprod, 
        valor_prod, 
        idnivel, 
        idtipoprod
    ]);
    res.json({
        message:'Prod added succcesfully',
        data:{idprod, valor_prod, idnivel, idtipoprod}
    });
};

//Delete a level from the table
const deleteProd = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM prod WHERE idprod = $1',[id]);
    res.status(200).json(`Prod with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getProd,
    createProd,
    deleteProd
};