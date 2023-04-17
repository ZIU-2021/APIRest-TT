const {Router} = require('express');
const router = Router();

//Import from TipoUsuarioController
const {getUsers, createUser, updateUser, deleteUser} = require('../controllers/TipoUsuarioController');

router.get('/usertype',getUsers);
router.post('/usertype',createUser);
router.put('/usertype/:id', updateUser);
router.delete('/usertype/:id',deleteUser);

module.exports=router;