const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getMultiplicadorE = async (req,res) =>{
    const response = await pool.query('SELECT * FROM multiplicadoresfuerzo');
    res.json(response.rows)
};

//Create a new register on table Nivel
const createMultiplicadorE = async (req,res) =>{
    const {id_me,idnivel,idtipome,valormult} = req.body;
    //console.log(id_me,idnivel,idtipome,valormult);
    const response = await pool.query('INSERT INTO multiplicadoresfuerzo (id_me,idnivel,idtipome,valormult) VALUES ($1,$2,$3,$4)',[
        id_me,
        idnivel,
        idtipome,
        valormult
    ]);
    res.json({
        message:'Multiplicador de esfuerzo added succcesfully',
        data:{id_me,idnivel,idtipome,valormult}
    });
};

//Delete a register from the table
const deleteMultiplicadorE = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM multiplicadoresfuerzo WHERE id_me = $1',[id]);
    res.status(200).json(`Multiplicador de esfuerzo with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getMultiplicadorE,
    createMultiplicadorE,
    deleteMultiplicadorE
};