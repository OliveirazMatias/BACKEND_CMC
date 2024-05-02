const Usuario = require('../models/usuario');
exports.getAll = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.json(usuarios)
};

//Procurando usuario por id
exports.getById = async (req, res) => {
    const idDoParam = req.params.id;
    const usuarioEncontrado = await  Usuario.findOne({idUsarios: idDoParam});
    res.json(usuarioEncontrado)
};

//Criação e verificação de usuario com msm cpf
exports.createUsuario = async (req, res) => {
    const usuarioCadastrado = await Usuario.findOne({ where: {cpf : req.body.cpf}});
    if (usuarioCadastrado) {
        return res.send('Já existe um usuário cadastrado neste CPF, viadinho.')
    }

    const usuarioCriado = await Usuario.create(req.body);
    console.log("usuarioCriado", usuarioCriado);
    return res.send("Deu certo viadinho.")
};