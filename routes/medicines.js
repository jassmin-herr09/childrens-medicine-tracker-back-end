var express = require('express');
var router = express.Router();
//var medicine = require('../models/medicine');
var medicinesCtrl = require('../controllers/medicines');




router.get('/', medicinesCtrl.index);
router.post('/', medicinesCtrl.create);
router.put('/:id', medicinesCtrl.update); //**node is the api
router.delete('/:id', medicinesCtrl.delete); //need id of the object that is being deleted

module.exports = router;
