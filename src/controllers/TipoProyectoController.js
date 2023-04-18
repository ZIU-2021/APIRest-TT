const {pool} = require('../dbConnection/dbConnection');

const getTipoProyecto = async (req,res) =>{
    const response = await pool.query('SELECT * FROM tipoproyecto');
    res.json(response.rows);
};

const createTipoProyecto = async (req,res) =>{
    const {idtipoproyecto, nombretipoproyecto} = req.body;
    const response = await pool.query('INSERT INTO tipoproyecto (idtipoproyecto, nombretipoproyecto) VALUES ($1, $2)',[
        idtipoproyecto,
        nombretipoproyecto
    ]);
    res.json({
        message:'TipoProyecto added succesfully',
        data:{
            idtipoproyecto,
            nombretipoproyecto
        }
    });
};

const updateTipoProyecto = async (req,res)=>{
    const id = req.params.id;
    const {idtipoproyecto, nombretipoproyecto} = req.body;
    const response = await pool.query('UPDATE tipoproyecto SET nombretipoproyecto = $1 WHERE idtipoproyecto =$2',[
        nombretipoproyecto,
        id
    ]);
    res.json(`nombreTipoProyecto with the id ${id} updated succesfully`);
};

const deleteTipoProyecto = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM tipoproyecto WHERE idtipoproyecto =$1',[id]);
    res.json(`tipoProyecto with the id ${id} has been deleted succesfully`);
};

module.exports = {
    getTipoProyecto,
    createTipoProyecto,
    updateTipoProyecto,
    deleteTipoProyecto
};