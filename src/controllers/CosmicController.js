const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getCosmic = async (req,res) =>{
    const response = await pool.query('SELECT * FROM cosmic');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createCosmic = async (req,res) =>{
    const {idcosmic, totalpuntosfuncion_cosmic, tasaentrega_cosmic, idproyecto} = req.body;
    const response = await pool.query('INSERT INTO cosmic (idcosmic, totalpuntosfuncion_cosmic, tasaentrega_cosmic, idproyecto) VALUES ($1,$2,$3,$4)',[
        idcosmic, totalpuntosfuncion_cosmic, tasaentrega_cosmic, idproyecto
    ]);
    res.json({
        message:'Cosmic added succcesfully',
        data:{idcosmic, totalpuntosfuncion_cosmic, tasaentrega_cosmic, idproyecto}
    });
};

//Delete a level from the table
const deleteCosmic = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM cosmic WHERE idcosmic = $1',[id]);
    res.status(200).json(`Cosmic with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getCosmic,
    createCosmic,
    deleteCosmic
};