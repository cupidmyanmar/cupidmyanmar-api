
let express = require('express');
let personController = require('../controllers/personController');
let router = express.Router();

router.post('/', personController.post);
router.get('/', personController.get);
router.post('/getList',personController.getList);
router.get('/getAllList',personController.getAllList);

module.exports = router;
