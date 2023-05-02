const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getPuntFunc = async (req,res) =>{
    const response = await pool.query('SELECT * FROM puntofuncion');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createPuntFunc = async (req,res) =>{
    const {idpuntofuncion, noufp, notcf, lenguaje_fp, idproyecto} = req.body;
    const response = await pool.query('INSERT INTO puntofuncion (idpuntofuncion, noufp, notcf, lenguaje_fp, idproyecto) VALUES ($1,$2,$3,$4,$5)',[
        idpuntofuncion, 
        noufp, 
        notcf, 
        lenguaje_fp, 
        idproyecto
    ]);
    res.json({
        message:'Punto Funcion added succcesfully',
        data:{idpuntofuncion, noufp, notcf, lenguaje_fp, idproyecto}
    });
};

//Delete a level from the table
const deletePuntFunc = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM puntofuncion WHERE idpuntofuncion = $1',[id]);
    res.status(200).json(`Punto funcion with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getPuntFunc,
    createPuntFunc,
    deletePuntFunc
};