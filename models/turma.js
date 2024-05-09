// Importa o Sequelize para definir o modelo da tabela
const Sequelize = require('sequelize');

// Importa a instância do Sequelize configurada na aplicação
const sequelize = require('../config/sequelize');

// Define o modelo da tabela 'Turmas' com as colunas e suas configurações
const Turmas = sequelize.define('Turmas', {
    // Define as colunas da tabela
    idTurmas: {
        type: Sequelize.INTEGER, // Tipo da coluna (número inteiro)
        primaryKey: true, // Define como chave primária
        autoIncrement: true // Define como auto incremento
    },
    codigo: Sequelize.STRING, // Coluna 'codigo' do tipo string
    descricao: Sequelize.STRING, // Coluna 'descricao' do tipo string
    inicio: Sequelize.DATE, // Coluna 'inicio' do tipo data
    fim: Sequelize.DATE, // Coluna 'fim' do tipo data
    fotos: Sequelize.STRING // Coluna 'fotos' do tipo string
}, {
    // Configurações adicionais do modelo
    timestamps: false // Desativa a criação automática das colunas 'createdAt' e 'updatedAt'
});

// Exporta o modelo 'Turmas' para ser utilizado em outras partes da aplicação
module.exports = Turmas;
