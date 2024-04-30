//Models/turmas.js

const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Turmas = sequelize.define('Turmas', {
    //Define as informações da tabela colunas

    idTurmas:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    codigo: Sequelize.STRING,
    descricao: Sequelize.STRING,
    inicio: Sequelize.DATE,
    fim: Sequelize.DATE,
    fotos: Sequelize.STRING
},
{
    //Precisa disso pq não tem as colunas createdAt e updatedAt automaticamente
    timestamps: false
});

module.exports = Turmas;