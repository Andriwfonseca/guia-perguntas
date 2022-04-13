const Pergunta = require('../models/Pergunta');
const Resposta = require('../models/Resposta');

const findAll = (req, res) => {
    //fazer um select all - raw = trazer apenas os dados
    Pergunta.findAll({raw: true, order: [
        ['id', 'DESC']
    ]}).then(perguntas =>{
        res.render('index', {
            perguntas
        });
    });
}

const perguntar = (req, res) => {
    res.render('perguntar');
}

const salvarPergunta = (req, res) => {
    const { titulo } = req.body;
    const { descricao } = req.body;

    //fazer o insert no banco de dados e redireciona o usuario para a pagina principal
    Pergunta.create({
        titulo,
        descricao
    }).then(()=> {
        res.redirect("/");
    });
}

const perguntaID = (req, res) => {
    const { id } = req.params;

    Pergunta.findOne({
        where: {id: id}
    }).then(pergunta => {
        if(pergunta){

            Resposta.findAll({
                where: {id_pergunta: pergunta.id},
                order: [
                    ['id', 'DESC']
                ]
            }).then( respostas =>{
                res.render("pergunta", {
                    pergunta,
                    respostas
                });
            });

            
        }else{
            res.redirect("/");
        }
    });
}

module.exports = {
    findAll,
    perguntar,
    salvarPergunta,
    perguntaID
}