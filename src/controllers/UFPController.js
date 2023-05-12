const {pool} = require ('../dbInformation/dbConnection');

//Get all the information of the table
const getUFP = async (req,res)=>{
    const response = await pool.query('SELECT * FROM ufp');
    res.json(response.rows)
};

//Create a new register on the table UFP
const createUFP = async (req,res) =>{
    const {idufp, nombre_ufp, det_ufp, ret_ufp, ftr_ufp, nivel_idnivel, idpuntofuncion, idtipoufp} = req.body;
    const response = await pool.query('INSERT INTO ufp (idufp, nombre_ufp, det_ufp, ret_ufp, ftr_ufp, nivel_idnivel, idpuntofuncion, idtipoufp) VALUES ($1, $2,$3,$4,$5,$6,$7,$8)',[
        idufp, 
        nombre_ufp, 
        det_ufp, 
        ret_ufp, 
        ftr_ufp, 
        nivel_idnivel, 
        idpuntofuncion, 
        idtipoufp
    ]);
    res.json({
        message:'ComposicionApp added succcesfully',
        data:{idufp, nombre_ufp, det_ufp, ret_ufp, ftr_ufp, nivel_idnivel, idpuntofuncion, idtipoufp}
    });
};

//Delete al the information from the table
const deleteUFP = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM ufp WHERE idufp = $1',[id]);
    res.status(200).json(`UFP with the id ${id} has been deleted succesfully`);
};

module.exports={
    getUFP,
    createUFP,
    deleteUFP
}