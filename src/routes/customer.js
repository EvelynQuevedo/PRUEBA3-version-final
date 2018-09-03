const router = require('express').Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/add', customerController.save);
router.get('/update/:idBiblioteca', customerController.edit);
router.post('/update/:idBiblioteca', customerController.update);
router.get('/delete/:idBiblioteca', customerController.delete);

module.exports = router;

