const {pool} = require ('../dbInformation/dbConnection');

//Get all the information of the table
const getPuntFuncCosmic = async (req,res)=>{
    const response = await pool.query('SELECT * FROM puntofuncioncosmic');
    res.json(response.rows)
};

//Create a new register on the table UFP
const createPuntFuncCosmic = async (req,res) =>{
    const {idpuntofuncioncosmic, nombre_pf, entradas_pf, salidas_pf, lecturas_pf, escrituras_pf, idcosmic} = req.body;
    const response = await pool.query('INSERT INTO puntofuncioncosmic (idpuntofuncioncosmic, nombre_pf, entradas_pf, salidas_pf, lecturas_pf, escrituras_pf, idcosmic) VALUES ($1, $2, $3, $4, $5, $6, $7)',[
        idpuntofuncioncosmic, 
        nombre_pf, 
        entradas_pf, 
        salidas_pf, 
        lecturas_pf, 
        escrituras_pf, 
        idcosmic]);
    res.json({
        message:'Punto Funcion Cosmic succcesfully',
        data:{idpuntofuncioncosmic, nombre_pf, entradas_pf, salidas_pf, lecturas_pf, escrituras_pf, idcosmic}
    });
};

//Delete al the information from the table
const deletePuntFuncCosmic = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM puntofuncioncosmic WHERE idpuntofuncioncosmic = $1',[id]);
    res.status(200).json(`Punto funcion Cosmic with the id ${id} has been deleted succesfully`);
};

module.exports={
    getPuntFuncCosmic,
    createPuntFuncCosmic,
    deletePuntFuncCosmic
}