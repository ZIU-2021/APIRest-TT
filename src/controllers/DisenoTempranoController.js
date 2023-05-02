const {pool} = require('../dbInformation/dbConnection');


//Get all the information of the table
const getDisTemp = async (req,res) =>{
    const response = await pool.query('SELECT * FROM diseñotemprano');
    res.json(response.rows)
};

//Create a new register on table Nivel
const createDisTemp = async (req,res) =>{
    const {iddiseñotemprano, pmnominal_dt, a_dt, ksloc_dt, b_dt, totalmultesf_dt, idproyecto} = req.body;
    const response = await pool.query('INSERT INTO diseñotemprano (iddiseñotemprano, pmnominal_dt, a_dt, ksloc_dt, b_dt, totalmultesf_dt, idproyecto) VALUES ($1,$2,$3,$4,$5,$6,$7)',[
        iddiseñotemprano, 
        pmnominal_dt, 
        a_dt, 
        ksloc_dt, 
        b_dt, 
        totalmultesf_dt, 
        idproyecto
    ]);
    res.json({
        message:'Diseño temprano added succcesfully',
        data:{iddiseñotemprano, pmnominal_dt, a_dt, ksloc_dt, b_dt, totalmultesf_dt, idproyecto}
    });
};

//Delete a register from the table
const deleteDisTemp = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM diseñotemprano WHERE iddiseñotemprano = $1',[id]);
    res.status(200).json(`Diseño temprano with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getDisTemp,
    createDisTemp,
    deleteDisTemp
};