// Importa o Sequelize para definir o modelo da tabela
const Sequelize = require('sequelize');

// Importa a instância do Sequelize configurada na aplicação
const sequelize = require('../config/sequelize');

// Define o modelo da tabela 'Tipos_Usuario' com as colunas e suas configurações
const Tipos_Usuario = sequelize.define('Tipos_Usuario', {
    // Define as colunas da tabela
    idTipos_Usuarios: {
        type: Sequelize.INTEGER, // Tipo da coluna (número inteiro)
        primaryKey: true, // Define como chave primária
        autoIncrement: true // Define como auto incremento
    },
    descricao: Sequelize.STRING // Coluna 'descricao' do tipo string
}, {
    // Configurações adicionais do modelo
    timestamps: false // Desativa a criação automática das colunas 'createdAt' e 'updatedAt'
});

// Exporta o modelo 'Tipos_Usuario' para ser utilizado em outras partes da aplicação
module.exports = Tipos_Usuario;
