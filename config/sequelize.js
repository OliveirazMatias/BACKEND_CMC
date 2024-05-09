// Importa o Sequelize para a aplicação
const Sequelize = require('sequelize');

// Importa as configurações do banco de dados do arquivo 'database.js' na mesma pasta
const databaseConfig = require('./database');

// Cria uma nova instância do Sequelize com as configurações de desenvolvimento do banco de dados
const sequelize = new Sequelize(databaseConfig.development);

// Exporta a instância do Sequelize para ser utilizada em outras partes da aplicação
module.exports = sequelize;
