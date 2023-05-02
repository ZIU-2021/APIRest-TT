const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getProyecto = async (req,res) =>{
    const response = await pool.query('SELECT * FROM proyecto');
    res.json(response.rows)
};

//Create a new register on table Nivel
const createProyecto = async (req,res) =>{
    const {idproyecto,nombre_proyecto,pdf_proyecto,esfuerzo_calculado,pf,usuario_email,idtipoproyecto} = req.body;
    const response = await pool.query('INSERT INTO proyecto (idproyecto,nombre_proyecto,pdf_proyecto,esfuerzo_calculado,pf,usuario_email,idtipoproyecto) VALUES ($1,$2,$3,$4,$5,$6,$7)',[
        idproyecto,
        nombre_proyecto,
        pdf_proyecto,
        esfuerzo_calculado,
        pf,
        usuario_email,
        idtipoproyecto
    ]);
    res.json({
        message:'Proyecto added succcesfully',
        data:{idproyecto,nombre_proyecto,pdf_proyecto,esfuerzo_calculado,pf,usuario_email,idtipoproyecto}
    });
};

//Delete a register from the table
const deleteProyecto = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM proyecto WHERE idproyecto = $1',[id]);
    res.status(200).json(`Proyecto with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getProyecto,
    createProyecto,
    deleteProyecto
};