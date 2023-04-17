//Require to the database
const {pool} = require('../dbConnection/dbConnection');

//Get all the Users
const getUsers = async (req,res) =>{
    const response = await pool.query('SELECT * FROM usuario');
    res.json(response.rows);
};

//Create a new user
const createUser = async (req,res) =>{
    const {email, nombreusuario, contraseña, idtipousuario} = req.body;
    const response = await pool.query('INSERT INTO usuario (email, nombreusuario, contraseña, idtipousuario) VALUES ($1, $2, $3, $4)', [
        email, 
        nombreusuario,
        contraseña,
        idtipousuario
    ]);
    res.json({
        message: 'User added succesfully',
            data:{email, nombreusuario, contraseña, idtipousuario}
    });
};

//Get user by id
const getUserById = async (req,res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM usuario WHERE email = $1',[id]);
    res.json(response.rows);
};

//Delete user
const deleteUser = async (req,res)=>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM usuario WHERE email = $1',[id]);
    res.status(200).json(`User "${id}" deleted succesfully`);
}


module.exports = {
    getUsers,
    createUser,
    getUserById,
    deleteUser
};