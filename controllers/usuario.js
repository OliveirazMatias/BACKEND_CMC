const Usuario = require('../models/usuario');

// Função para buscar todos os usuários
exports.getAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll(); // Busca todos os usuários no banco de dados
        res.json(usuarios); // Retorna os usuários encontrados em formato JSON
    } catch (error) {
        console.error('Erro ao obter todos os usuários:', error); // Exibe um erro no console em caso de falha na busca
        return res.status(500).json({ error: 'Erro ao obter todos os usuários' }); // Retorna um erro ao cliente em caso de falha
    }
};

// Função para buscar um usuário por ID
exports.getById = async (req, res) => {
    const idDoParam = req.params.id; // Obtém o ID do usuário a partir dos parâmetros da requisição
    try {
        const usuarioEncontrado = await Usuario.findOne({ where: { idUsuarios: idDoParam } }); // Busca o usuário pelo ID
        res.json(usuarioEncontrado); // Retorna o usuário encontrado em formato JSON
    } catch (error) {
        console.error('Erro ao obter usuário por ID:', error); // Exibe um erro no console em caso de falha na busca por ID
        return res.status(500).json({ error: 'Erro ao obter usuário por ID' }); // Retorna um erro ao cliente em caso de falha
    }
};

// Função para criar um novo usuário
exports.createUsuario = async (req, res) => {
    const { cpf } = req.body; // Obtém o CPF do usuário a partir dos dados enviados na requisição
    try {
        const usuarioCadastrado = await Usuario.findOne({ where: { cpf } }); // Verifica se já existe um usuário com o mesmo CPF
        if (usuarioCadastrado) {
            return res.status(400).send('Já existe um usuário cadastrado com este CPF.'); // Retorna um erro caso o usuário já exista
        }

        const usuarioCriado = await Usuario.create(req.body); // Cria um novo usuário com os dados recebidos na requisição
        console.log("Usuario criado:", usuarioCriado); // Exibe no console o usuário criado (apenas para fins de debug)
        return res.status(201).send("Usuário criado com sucesso."); // Retorna uma mensagem de sucesso após criar o usuário
    } catch (error) {
        console.error('Erro ao criar usuário:', error); // Exibe um erro no console em caso de falha na criação do usuário
        return res.status(500).json({ error: 'Erro ao criar usuário' }); // Retorna um erro ao cliente em caso de falha
    }
};

// Função para atualizar um usuário
exports.updateUsuario = async (req, res) => {
    const { cpf } = req.params; // Obtém o CPF do usuário a ser atualizado dos parâmetros da requisição
    const { nome, email, senha, celular, cep, logradouro, bairro, cidade, estado, foto } = req.body; // Obtém os dados a serem atualizados do corpo da requisição
    const camposAtualizaveis = { nome, email, senha, celular, cep, logradouro, bairro, cidade, estado, foto }; // Define os campos que podem ser atualizados

    try {
        const usuarioCadastrado = await Usuario.findOne({ where: { cpf } }); // Busca o usuário pelo CPF
        if (!usuarioCadastrado) {
            return res.status(404).json({ error: 'Usuário não encontrado.' }); // Retorna um erro caso o usuário não seja encontrado
        }

        await usuarioCadastrado.update(camposAtualizaveis); // Atualiza os campos do usuário com os dados recebidos na requisição

        return res.json({ message: 'Usuário atualizado com sucesso', Usuario: usuarioCadastrado }); // Retorna uma mensagem de sucesso e o usuário atualizado
    } catch (error) {
        console.error('Erro ao atualizar o usuário:', error); // Exibe um erro no console em caso de falha na atualização do usuário
        return res.status(500).json({ error: 'Erro ao atualizar o usuário' }); // Retorna um erro ao cliente em caso de falha
    }
};
