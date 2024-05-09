// Arquivo de configuração do banco de dados

// Exporta as configurações do banco de dados para diferentes ambientes
module.exports = {
    development: { // Configurações para o ambiente de desenvolvimento
        username: process.env.DB_USER || 'root', 
        // Username usado para acessar o banco de dados. Se a variável de ambiente DB_USER estiver definida, usa o valor dela; caso contrário, usa 'root'.

        password: 'root', // Senha para acessar o banco de dados
        database: 'carometro', // Nome do banco de dados a ser usado
        host: 'localhost', // Host onde o banco de dados está localizado
        port: 3306, // Porta usada para se conectar ao banco de dados
        dialect: 'mysql', // Tipo de banco de dados (MySQL neste caso)
        logging: false // Opção para desativar o log de consultas SQL no console
    },
};
