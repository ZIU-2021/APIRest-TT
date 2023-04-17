const {Router} = require('express');
const router = Router();

//Import from TipoUsuarioController
const {getUsers, createUser, updateUser, deleteUser} = require('../controllers/TipoUsuarioController');

// Router from TipoUsuarioController controller
router.get('/usertype',getUsers);
router.post('/usertype',createUser);
router.put('/usertype/:id', updateUser);
router.delete('/usertype/:id',deleteUser);

//Import from UsuarioController

//Router from UsuarioController

module.exports=router;