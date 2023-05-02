const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getPostArq = async (req,res) =>{
    const response = await pool.query('SELECT * FROM postarquitectura');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createPostArq = async (req,res) =>{
    const {idpostarquitectura, pmnominal_pa, aa,ksloc_pa, b_pa, totalmultesf_pa, idproyecto} = req.body;
    const response = await pool.query('INSERT INTO postarquitectura (idpostarquitectura, pmnominal_pa, aa,ksloc_pa, b_pa, totalmultesf_pa, idproyecto) VALUES ($1,$2,$3,$4,$5,$6,$7)',[
        idpostarquitectura, pmnominal_pa, aa,ksloc_pa, b_pa, totalmultesf_pa, idproyecto
    ]);
    res.json({
        message:'Punto Funcion added succcesfully',
        data:{idpostarquitectura, pmnominal_pa, aa,ksloc_pa, b_pa, totalmultesf_pa, idproyecto}
    });
};

//Delete a level from the table
const deletePostArq = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM postarquitectura WHERE idpostarquitectura = $1',[id]);
    res.status(200).json(`Post arquitectura with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getPostArq,
    createPostArq,
    deletePostArq
};