const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getTipoUFP = async (req,res) =>{
    const response = await pool.query('SELECT * FROM tipoufp');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createTipoUFP = async (req,res) =>{
    const {idtipoupf, nombretipoupf} = req.body;
    const response = await pool.query('INSERT INTO tipoufp (idtipoupf, nombretipoupf) VALUES ($1, $2)',[
        idtipoupf, 
        nombretipoupf
    ]);
    res.json({
        message:'Tipo UFP added succcesfully',
        data:{idtipoupf, nombretipoupf}
    });
};

//Delete a level from the table
const deleteTipoUFP = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM tipoufp WHERE idtipoupf = $1',[id]);
    res.status(200).json(`Tipo UFP with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getTipoUFP,
    createTipoUFP,
    deleteTipoUFP
};