const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getTipoFactorEE = async (req,res) =>{
    const response = await pool.query('SELECT * FROM factorexponencialescala');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createTipoFactorEE = async (req,res) =>{
    const {idfee,valorfactor,idnivel,idtipofee} = req.body;
    const response = await pool.query('INSERT INTO factorexponencialescala (idfee,valorfactor,idnivel,idtipofee) VALUES ($1,$2,$3,$4)',[
        idfee,
        valorfactor,
        idnivel,
        idtipofee]);
    res.json({
        message:'Tipo Factor EE added succcesfully',
        data:{idfee,valorfactor,idnivel,idtipofee}
    });
};

//Delete a level from the table
const deleteTipoFactorEE = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM factorexponencialescala WHERE idfee = $1',[id]);
    res.status(200).json(`Tipo Factor EE with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getTipoFactorEE,
    createTipoFactorEE,
    deleteTipoFactorEE
};