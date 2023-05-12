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

//Import from ProyectoController
const {getProyecto,createProyecto,deleteProyecto} = require('../controllers/ProyectoController');
//Router from ProyectoController
router.get('/proyecto',getProyecto);
router.post('/proyecto',createProyecto);
router.delete('/proyecto/:id',deleteProyecto);

//Import from ProyectoController
const {getMEProyecto,createMEProyecto,deleteMEProyecto} = require('../controllers/MEPRoyectoController');
//Router from ProyectoController
router.get('/meproyecto',getMEProyecto);
router.post('/meproyecto',createMEProyecto);
router.delete('/meproyecto/:id',deleteMEProyecto);

//Import from ComposicionAplicacionController
const {getCompApp,createCompApp,deleteCompApp} = require('../controllers/ComposicionAplicacionController');
//Router from ComposicionAplicacionController
router.get('/compapp',getCompApp);
router.post('/compapp',createCompApp);
router.delete('/compapp/:id',deleteCompApp);

//Import from ProdCompAppController
const {getProdCompApp,createProdCompApp,deleteProdCompApp} = require('../controllers/ProdCompAppController');
//Router from ComposicionAplicacionController
router.get('/prodcompapp',getProdCompApp);
router.post('/prodcompapp',createProdCompApp);
router.delete('/prodcompapp/:id',deleteProdCompApp);

//Import from DisenoTempranoController
const {getDisTemp, createDisTemp, deleteDisTemp} = require('../controllers/DisenoTempranoController');
//Router from ComposicionAplicacionController
router.get('/distemp',getDisTemp);
router.post('/distemp',createDisTemp);
router.delete('/distemp/:id',deleteDisTemp);

//Import from PuntoFuncionController
const {getPuntFunc, createPuntFunc, deletePuntFunc} = require('../controllers/PuntoFuncController');
//Router from PuntoFuncionController
router.get('/puntfunc',getPuntFunc);
router.post('/puntfunc',createPuntFunc);
router.delete('/puntfunc/:id',deletePuntFunc);

//Import from TcfController
const {getTCF, createTCF, deleteTCF} = require('../controllers/TcfController');
//Router from TcfController
router.get('/tcf',getTCF);
router.post('/tcf',createTCF);
router.delete('/tcf/:id',deleteTCF);

//Import from PostArqController
const {getPostArq, createPostArq, deletePostArq} = require('../controllers/PostArqController');
//Router from PostArqController
router.get('/postarq',getPostArq);
router.post('/postarq',createPostArq);
router.delete('/postarq/:id',deletePostArq);

//Import from CosmicController
const {getCosmic, createCosmic, deleteCosmic} = require('../controllers/CosmicController');
//Router from CosmicController
router.get('/cosmic',getCosmic);
router.post('/cosmic',createCosmic);
router.delete('/cosmic/:id',deleteCosmic);

//Import from UFPController
const { getUFP, createUFP, deleteUFP } = require('../controllers/UFPController');
//Router from UFP Controller
router.get('/ufp',getUFP);
router.post('/ufp',createUFP);
router.delete('/ufp/:id',deleteUFP);

//Import from FEEController
const {getFEE,createFEE,deleteFEE} = require('../controllers/FEEController');
//Router from FEEController
router.get('/fee',getFEE);
router.post('/fee',createFEE);
router.delete('/fee/:id',deleteFEE);

//Import from PesoFacCompController
const {getPFC, createPFC, deletePFC} = require('../controllers/PesoFacCompControler');
//Router from PesoFacCompController
router.get('/pfc',getPFC);
router.post('/pfc',createPFC);
router.delete('/pfc/:id',deletePFC);

//Import from PuntoFuncCosmicController
const {getPuntFuncCosmic, createPuntFuncCosmic, deletePuntFuncCosmic} = require('../controllers/PuntoFuncCosmicController');
//Router from PuntoFuncConsmicController
router.get('/pfcosmic',getPuntFuncCosmic);
router.post('/pfcosmic',createPuntFuncCosmic);
router.delete('/pfcosmic/:id',deletePuntFuncCosmic);



module.exports=router;