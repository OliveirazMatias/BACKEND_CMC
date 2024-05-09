// Importa o Sequelize para definir o modelo da tabela
const Sequelize = require('sequelize');

// Importa a instância do Sequelize configurada na aplicação
const sequelize = require('../config/sequelize');

// Define o modelo da tabela 'Usuarios' com as colunas e suas configurações
const usuario = sequelize.define('Usuarios', {
    // Define as colunas da tabela
    idUsuarios: {
        type: Sequelize.INTEGER, // Tipo da coluna (número inteiro)
        primaryKey: true, // Define como chave primária
        autoIncrement: true // Define como auto incremento
    },
    nome: Sequelize.STRING, // Coluna 'nome' do tipo string
    email: Sequelize.STRING, // Coluna 'email' do tipo string
    cpf: Sequelize.STRING, // Coluna 'cpf' do tipo string
    senha: Sequelize.STRING, // Coluna 'senha' do tipo string
    celular: Sequelize.STRING, // Coluna 'celular' do tipo string
    cep: Sequelize.STRING, // Coluna 'cep' do tipo string
    logradouro: Sequelize.STRING, // Coluna 'logradouro' do tipo string
    bairro: Sequelize.STRING, // Coluna 'bairro' do tipo string
    cidade: Sequelize.STRING, // Coluna 'cidade' do tipo string
    estado: Sequelize.STRING, // Coluna 'estado' do tipo string
    foto: Sequelize.STRING, // Coluna 'foto' do tipo string
    Tipos_Usuarios_idTipos_Usuarios: Sequelize.NUMBER, // Coluna 'Tipos_Usuarios_idTipos_Usuarios' do tipo número
}, {
    // Configurações adicionais do modelo
    timestamps: false // Desativa a criação automática das colunas 'createdAt' e 'updatedAt'
});

// Exporta o modelo 'Usuarios' para ser utilizado em outras partes da aplicação
module.exports = usuario;
