const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const companyController = require('../controllers/CompanyController');
const cargoEmpresaController = require('../controllers/cargoEmpresaController');
const areaEmpresaController = require('../controllers/areaEmpresaController');
const isoController = require('../controllers/isoController');
const companyEconomicActivityController = require('../controllers/companyEconomicActivity.controller');
const userController = require('../controllers/userController');
const sedeController = require('../controllers/sedeController');
const paisController = require('../controllers/paisController');
const personaController = require('../controllers/personaController');
const trabajadorController = require('../controllers/trabajadorController'); // Importa el controlador de trabajador

// Define routes
router.use('/auth', authController);
router.use('/company', companyController);
router.use('/cargo', cargoEmpresaController);
router.use('/area', areaEmpresaController);
router.use('/iso', isoController);
router.use('/companyEconomicActivity', companyEconomicActivityController);
router.use('/user', userController);
router.use('/sede', sedeController);
router.use('/persona', personaController);
router.use('/pais', paisController);

// Rutas de trabajador
router.post('/trabajador', trabajadorController.createTrabajador);
router.get('/trabajador/:id', trabajadorController.getTrabajadorById);
router.get('/trabajadores', trabajadorController.getAllTrabajadores);
router.put('/trabajador/:id', trabajadorController.updateTrabajador);
router.delete('/trabajador/:id', trabajadorController.deleteTrabajador);

module.exports = router;
