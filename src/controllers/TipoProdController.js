const {pool} = require('../dbInformation/dbConnection');

const getTipoProd = async (req,res) => {
    const response = await pool.query('SELECT * FROM tipoprod');
    res.json(response.rows);
};

//Create a new level on table Nivel
const createTipoProd = async (req,res) =>{
    const {idtipoprod, nombre_prod} = req.body;
    //console.log(idtipoprod, nombre_prod);
    const response = await pool.query('INSERT INTO tipoprod (idtipoprod, nombre_prod) VALUES ($1, $2)',[
        idtipoprod,
        nombre_prod
    ]);
    res.json({
        message:'Tipo Prod added succcesfully',
        data:{idtipoprod,nombre_prod}
    });
};

//Delete a level from the table
const deleteTipoProd = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM tipoprod WHERE idtipoprod = $1',[id]);
    res.status(200).json(`Tipo Prod with the id ${id} has been deleted succesfully`);
};

module.exports = {
 getTipoProd,
 createTipoProd,
 deleteTipoProd
};