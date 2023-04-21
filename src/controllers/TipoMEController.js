const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getTipoME = async (req,res) =>{
    const response = await pool.query('SELECT * FROM tipome');
    res.json(response.rows)
};

//Create a new register on table Nivel
const createTipoME = async (req,res) =>{
    const {idtipome, nombre_me} = req.body;
    const response = await pool.query('INSERT INTO tipome (idtipome, nombre_me) VALUES ($1, $2)',[
        idtipome, 
        nombre_me
    ]);
    res.json({
        message:'Tipo ME added succcesfully',
        data:{idtipome, nombre_me}
    });
};

//Delete a register from the table
const deleteTipoME = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM tipome WHERE idtipome = $1',[id]);
    res.status(200).json(`Tipo ME with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getTipoME,
    createTipoME,
    deleteTipoME
};