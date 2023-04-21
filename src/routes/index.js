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

//Import from TipoProyectoController
const {getTipoProyecto, createTipoProyecto, updateTipoProyecto, deleteTipoProyecto} = require('../controllers/TipoProyectoController');
//Router from TipoProyectoController
router.get('/tipoproyecto',getTipoProyecto);
router.post('/tipoproyecto',createTipoProyecto);
router.put('/tipoproyecto/:id',updateTipoProyecto);
router.delete('/tipoproyecto/:id',deleteTipoProyecto);

//Import from NivelControlles
const {getNivel, createNivel, deleteNivel} = require('../controllers/NivelController');
//Router from NivelController
router.get('/nivel',getNivel);
router.post('/nivel',createNivel);
router.delete('/nivel/:id',deleteNivel);

//Import from TipoProdController
const {getTipoProd, createTipoProd, deleteTipoProd} = require('../controllers/TipoProdController');
//Router from ProdController
router.get('/tipoprod',getTipoProd);
router.post('/tipoprod',createTipoProd);
router.delete('/tipoprod/:id',deleteTipoProd);

//Import from Prodcontroller
const { getProd, createProd, deleteProd} = require('../controllers/ProdController');
//Router from ProdController
router.get('/prod',getProd);
router.post('/prod',createProd);
router.delete('/prod/:id',deleteProd);

//Import from tipoUFPController
const {getTipoUFP,createTipoUFP,deleteTipoUFP} = require('../controllers/TipoUFPController');
//Router from TipoUFPController
router.get('/tipoufp',getTipoUFP);
router.post('/tipoufp',createTipoUFP);
router.delete('/tipoufp/:id',deleteTipoUFP);

//Import from tipoFEEController
const {getTipoFEE,createTipoFEE,deleteTipoFEE} = require('../controllers/TipoFEEController');
//Router from TipoUFPController
router.get('/tipofee',getTipoFEE);
router.post('/tipofee',createTipoFEE);
router.delete('/tipofee/:id',deleteTipoFEE);

//Import from tipoFactorExponencialEscalaController
const {getTipoFactorEE, createTipoFactorEE, deleteTipoFactorEE} = require('../controllers/FactorEsponencialEscalaController');
//Router from tipoFactorExponencialEscalaController
router.get('/tipofactoree',getTipoFactorEE);
router.post('/tipofactoree',createTipoFactorEE);
router.delete('/tipofactoree/:id',deleteTipoFactorEE);

//Import from tipoMEController
const {getTipoME, createTipoME, deleteTipoME} = require('../controllers/TipoMEController');
//Router from tipoFactorExponencialEscalaController
router.get('/tipome',getTipoME);
router.post('/tipome',createTipoME);
router.delete('/tipome/:id',deleteTipoME);

//Import from MultiplicadorEsfuerzoController
const {getMultiplicadorE, createMultiplicadorE, deleteMultiplicadorE} = require('../controllers/MultiplicadorEsfuerzoController');
//Router from MultiplicadorEsfuerzoControllerEscalaController
router.get('/multiplicadoresfuerzo',getMultiplicadorE);
router.post('/multiplicadoresfuerzo',createMultiplicadorE);
router.delete('/multiplicadoresfuerzo/:id',deleteMultiplicadorE);




module.exports=router;