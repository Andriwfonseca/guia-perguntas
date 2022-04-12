const Sequelize = require('sequelize');
const connection = require('../database/mysql');

const Pergunta = connection.define('perguntas', {
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

//sincronizar com banco de dados, se nao tiver a tabela no banco.. então, é criado
Pergunta.sync({force: false}).then(() =>{});

module.exports = Pergunta;