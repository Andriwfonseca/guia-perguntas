const { Router } = require('express');
const perguntaController = require('../controllers/perguntaController');

const router = Router();

router.get('/', perguntaController.findAll);
router.get('/perguntar', perguntaController.perguntar);
router.post('/salvarpergunta', perguntaController.salvarPergunta);

module.exports = router;