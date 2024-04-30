//Models/idtipos.js

const Sequelize = require('sequelize');
const sequelize = require('../config/sequelize');

const Tipos_Usuario = sequelize.define('Tipos_Usuario', {
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

module.exports = Tipos_Usuario;