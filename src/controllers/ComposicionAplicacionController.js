const {pool} = require('../dbInformation/dbConnection');

//Get all the information of the table
const getCompApp = async (req,res) =>{
    const response = await pool.query('SELECT * FROM composicionaplicacion');
    res.json(response.rows)
};

//Create a new level on table Nivel
const createCompApp = async (req,res) =>{
    const {idcomposicionaplicacion,nop_ca,op_ca,reuso_ca,totalprod_ca,nopantallas_ca,noreportes_ca,noservidores,idproyecto} = req.body;
    const response = await pool.query('INSERT INTO composicionaplicacion (idcomposicionaplicacion,nop_ca,op_ca,reuso_ca,totalprod_ca,nopantallas_ca,noreportes_ca,noservidores,idproyecto) VALUES ($1, $2,$3,$4,$5,$6,$7,$8,$9)',[
        idcomposicionaplicacion,
        nop_ca,
        op_ca,
        reuso_ca,
        totalprod_ca,
        nopantallas_ca,
        noreportes_ca,
        noservidores,
        idproyecto
    ]);
    res.json({
        message:'ComposicionApp added succcesfully',
        data:{idcomposicionaplicacion,nop_ca,op_ca,reuso_ca,totalprod_ca,nopantallas_ca,noreportes_ca,noservidores,idproyecto}
    });
};

//Delete al the information from the table
const deleteCompApp = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM composicionaplicacion WHERE idcomposicionaplicacion = $1',[id]);
    res.status(200).json(`ComposicionAplicacion with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getCompApp,
    createCompApp,
    deleteCompApp
};