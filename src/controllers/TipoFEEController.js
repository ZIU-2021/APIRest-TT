const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getTipoFEE = async (req,res) =>{
    const response = await pool.query('SELECT * FROM tipofee');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createTipoFEE = async (req,res) =>{
    const {idtipofee, nombre_fee} = req.body;
    const response = await pool.query('INSERT INTO tipofee (idtipofee, nombre_fee) VALUES ($1, $2)',[
        idtipofee, 
        nombre_fee
    ]);
    res.json({
        message:'Tipo FEE added succcesfully',
        data:{idtipofee, nombre_fee}
    });
};

//Delete a level from the table
const deleteTipoFEE = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM tipofee WHERE idtipofee = $1',[id]);
    res.status(200).json(`Tipo FEE with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getTipoFEE,
    createTipoFEE,
    deleteTipoFEE
};