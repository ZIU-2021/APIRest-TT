//Require to the data base connection
const {pool} = require('../dbConnection/dbConnection');

//Get all the users types
const getUserType = async (req,res) =>{
    const response = await pool.query('SELECT * FROM TipoUsuario');
    res.json(response.rows);
};

//Create a new user type
const createUserType = async (req,res) =>{
    const {idtipousuario, nombre_tipousuario} = req.body;
    const response = await pool.query('INSERT INTO TipoUsuario (idtipousuario, nombre_tipousuario) VALUES ($1, $2)', [idtipousuario, nombre_tipousuario]);
    res.json({
        message: 'User added succesfully',
        body:{
            userData:{idtipousuario,nombre_tipousuario}
        }
    });
};

//Update a new user type
const updateUserType = async (req,res)=>{
    const id = req.params.id;
    const {idtipousuario, nombre_tipousuario} = req.body;
    const response = await pool.query('UPDATE TipoUsuario SET nombre_tipousuario = $1 WHERE idtipousuario = $2',[
        nombre_tipousuario,
        id
    ]);
    res.status(200).json('User updated succesfully');
};

//Deletean user type
const deleteUserType = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM TipoUsuario WHERE idtipousuario = $1', [id]);
    res.status(200).json(`User ${id} has beed deleted succesfully`)
};

module.exports={
    getUserType,
    createUserType,
    updateUserType,
    deleteUserType
};