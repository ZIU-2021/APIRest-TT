//Require to the databse connection
const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getNivel = async (req,res) =>{
    const response = await pool.query('SELECT * FROM nivel');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createNivel = async (req,res) =>{
    const {idnivel, nombrenivel} = req.body;
    const response = await pool.query('INSERT INTO nivel (idnivel, nombrenivel) VALUES ($1, $2)',[
        idnivel,
        nombrenivel
    ]);
    res.json({
        message:'Nivel added succcesfully',
        data:{idnivel,nombrenivel}
    });
};

//Delete a level from the table
const deleteNivel = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM nivel WHERE idnivel = $1',[id]);
    res.status(200).json(`Nivel with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getNivel,
    createNivel,
    deleteNivel
}