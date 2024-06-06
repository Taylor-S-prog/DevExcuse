const express = require('express');
const router = express.Router();
const excuseController = require('../controllers/excuseController');

/**
 * App Routes 
*/
router.get('/', excuseController.homepage);
router.get('/lost', excuseController.pageLost);
router.get('/addExcuse', excuseController.addExcuse);
router.post('/addExcuse', excuseController.addExcusePost);
router.get('/list', excuseController.listGet);
router.get('/http_code', excuseController.http_code);
router.get('/http_code/:http_code', excuseController.http_codeByid);
router.get( '*',excuseController.excuseError);




 
module.exports = router;
