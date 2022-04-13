const { Router } = require('express');
const perguntaController = require('../controllers/perguntaController');
const respostaController = require('../controllers/respostaController');

const router = Router();

router.get('/', perguntaController.findAll);
router.get('/perguntar', perguntaController.perguntar);
router.get('/pergunta/:id', perguntaController.perguntaID);
router.post('/salvarpergunta', perguntaController.salvarPergunta);

router.post('/responder', respostaController.responder);

module.exports = router;