const Pergunta = require('../models/Pergunta');

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

module.exports = {
    findAll,
    perguntar,
    salvarPergunta
}