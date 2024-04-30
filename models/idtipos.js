//Models/idtipos.js

const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const idtipos = sequelize.define('Idtiposs', {
    //Define as informações da tabela colunas

    idTipos_Usuarios:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    descricao: Sequelize.STRING
},
{
    //Precisa disso pq não tem as colunas createdAt e updatedAt automaticamente
    timestamps: false
});

module.exports = idtipos;