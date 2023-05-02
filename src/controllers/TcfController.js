const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getTCF = async (req,res) =>{
    const response = await pool.query('SELECT * FROM tcf');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createTCF = async (req,res) =>{
    const {idtcf, nombre_tcf, peso, idpuntofuncion} = req.body;
    const response = await pool.query('INSERT INTO tcf (idtcf, nombre_tcf, peso, idpuntofuncion) VALUES ($1,$2,$3,$4)',[
        idtcf, 
        nombre_tcf, 
        peso, 
        idpuntofuncion
    ]);
    res.json({
        message:'TCF added succcesfully',
        data:{idtcf, nombre_tcf, peso, idpuntofuncion}
    });
};

//Delete a level from the table
const deleteTCF = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM tcf WHERE idtcf = $1',[id]);
    res.status(200).json(`TCF with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getTCF,
    createTCF,
    deleteTCF
};