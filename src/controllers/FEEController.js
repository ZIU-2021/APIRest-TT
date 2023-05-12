const {pool} = require ('../dbInformation/dbConnection');

//Get all the information of the table
const getFEE = async (req,res)=>{
    const response = await pool.query('SELECT * FROM fee_proyecto');
    res.json(response.rows)
};

//Create a new register on the table UFP
const createFEE = async (req,res) =>{
    const {idfee, idproyecto} = req.body;
    const response = await pool.query('INSERT INTO fee_proyecto (idfee, idproyecto) VALUES ($1, $2)',[
        idfee, 
        idproyecto
    ]);
    res.json({
        message:'Fee_Proyeto added succcesfully',
        data:{idfee, idproyecto}
    });
};

//Delete al the information from the table
const deleteFEE = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM fee_proyecto WHERE idfee = $1',[id]);
    res.status(200).json(`Fee_Proyecto with the id ${id} has been deleted succesfully`);
};

module.exports={
    getFEE,
    createFEE,
    deleteFEE
}