const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getMEProyecto = async (req,res) =>{
    const response = await pool.query('SELECT * FROM me_proyecto');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createMEProyecto = async (req,res) =>{
    const {idproyecto, id_me} = req.body;
    const response = await pool.query('INSERT INTO me_proyecto (idproyecto, id_me) VALUES ($1, $2)',[
        idproyecto,
        id_me
    ]);
    res.json({
        message:'Tipo FEE added succcesfully',
        data:{idproyecto, id_me}
    });
};

//Delete al the information from the table
const deleteMEProyecto = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM me_proyecto WHERE idproyecto = $1',[id]);
    res.status(200).json(`ME Proyecto with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getMEProyecto,
    createMEProyecto,
    deleteMEProyecto
};