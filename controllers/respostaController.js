const Resposta = require('../models/Resposta');

const responder = (req, res) => {
    const { corpo } = req.body;
    const id_pergunta = req.body.pergunta;

    Resposta.create({
        corpo,
        id_pergunta
    }).then(() => {
        res.redirect('/pergunta/' + id_pergunta);
    });;
}

module.exports = {
    responder
}