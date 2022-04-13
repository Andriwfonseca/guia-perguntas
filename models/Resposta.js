const Sequelize = require('sequelize');
const connection = require('../database/mysql');

const Resposta = connection.define('respostas', {
    corpo: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    id_pergunta: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

//sincronizar com banco de dados, se nao tiver a tabela no banco.. então, é criado
Resposta.sync({force: false});

module.exports = Resposta;