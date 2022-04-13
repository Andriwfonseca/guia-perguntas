const Resposta = require('../models/Resposta');
const Pergunta = require('../models/Pergunta');

const responder = (req, res) => {
    const { corpo } = req.body;
    const id_pergunta = req.body.pergunta;

    Pergunta.findOne({
        where: {id: id_pergunta}
    }).then(pergunta => {
        if(pergunta){

            Resposta.create({
                corpo,
                id_pergunta
            }).then(() => {
                res.redirect('/pergunta/' + id_pergunta);
            });
        }else{
            res.redirect('/');
        }
    });
}
module.exports = {
    responder
}