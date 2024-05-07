const Usuario = require('../models/usuario');

exports.getAll = async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error('Erro ao obter todos os usuários:', error);
        return res.status(500).json({ error: 'Erro ao obter todos os usuários' });
    }
};

exports.getById = async (req, res) => {
    const idDoParam = req.params.id;
    try {
        const usuarioEncontrado = await Usuario.findOne({ where: { idUsuarios: idDoParam } });
        res.json(usuarioEncontrado);
    } catch (error) {
        console.error('Erro ao obter usuário por ID:', error);
        return res.status(500).json({ error: 'Erro ao obter usuário por ID' });
    }
};

exports.createUsuario = async (req, res) => {
    const { cpf } = req.body;
    try {
        const usuarioCadastrado = await Usuario.findOne({ where: { cpf } });
        if (usuarioCadastrado) {
            return res.status(400).send('Já existe um usuário cadastrado com este CPF.');
        }

        const usuarioCriado = await Usuario.create(req.body);
        console.log("Usuario criado:", usuarioCriado);
        return res.status(201).send("Usuário criado com sucesso.");
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return res.status(500).json({ error: 'Erro ao criar usuário' });
    }
};

exports.updateUsuario = async (req, res) => {
    const { cpf } = req.params;
    const { nome, email, senha, celular, cep, logradouro, bairro, cidade, estado, foto } = req.body;
    const camposAtualizaveis = { nome, email, senha, celular, cep, logradouro, bairro, cidade, estado, foto };

    try {
        const usuarioCadastrado = await Usuario.findOne({ where: { cpf } });
        if (!usuarioCadastrado) {
            return res.status(404).json({ error: 'Usuário não encontrado.' });
        }

        await usuarioCadastrado.update(camposAtualizaveis);

        return res.json({ message: 'Usuário atualizado com sucesso', Usuario: usuarioCadastrado });
    } catch (error) {
        console.error('Erro ao atualizar o usuário:', error);
        return res.status(500).json({ error: 'Erro ao atualizar o usuário' });
    }
};
