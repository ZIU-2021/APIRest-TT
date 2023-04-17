const {Router} = require('express');
const router = Router();

//Import from TipoUsuarioController
const {getUserType, createUserType, updateUserType, deleteUserType} = require('../controllers/TipoUsuarioController');

// Router from TipoUsuarioController controller
router.get('/usertype',getUserType);
router.post('/usertype',createUserType);
router.put('/usertype/:id', updateUserType);
router.delete('/usertype/:id',deleteUserType);

//Import from UsuarioController
const {getUsers,createUser,getUserById, deleteUser} = require('../controllers/UsuarioController');

//Router from UsuarioController
router.get('/user',getUsers);
router.post('/user',createUser);
router.get('/user/:id',getUserById);
router.delete('/user/:id',deleteUser);

module.exports=router;