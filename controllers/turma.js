const Turmas = require('../models/turma');
exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

exports.getById = async (req, res) => {
    const idDoParamTur = req.params.id;
    const turmaEncontrada = await  Turmas.findOne({idTurmas: idDoParamTur});
    res.json(turmaEncontrada)
};

exports.createTurma = async (req, res) => {
    const turmasCadastrado = await Turmas.findOne({ where: {codigo : req.body.codigo}});
    if (turmasCadastrado) {
        return res.send('Já existe uma turma cadastrada neste codigo, viadinho.')
    }

    const turmaCriada = await Turmas.create(req.body);
    console.log("turmaCriada", turmaCriada);
    return res.send("Deu certo viadinho")
};