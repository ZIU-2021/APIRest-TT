const {pool} = require ('../dbInformation/dbConnection');

//Get all the information of the table
const getPFC = async (req,res)=>{
    const response = await pool.query('SELECT * FROM pesofactorcomplejidad');
    res.json(response.rows)
};

//Create a new register on the table UFP
const createPFC = async (req,res) =>{
    const {peso_pfc, idnivel, idtipoufp} = req.body;
    const response = await pool.query('INSERT INTO pesofactorcomplejidad (peso_pfc, idnivel, idtipoufp) VALUES ($1, $2, $3)',[
        peso_pfc, 
        idnivel, 
        idtipoufp]);
    res.json({
        message:'PesoFactorcompleidad added succcesfully',
        data:{peso_pfc, idnivel, idtipoufp}
    });
};

//Delete al the information from the table
const deletePFC = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM pesofactorcomplejidad WHERE peso_pfc = $1',[id]);
    res.status(200).json(`PesoFactorComplejidad with the id ${id} has been deleted succesfully`);
};

module.exports={
    getPFC,
    createPFC,
    deletePFC
}