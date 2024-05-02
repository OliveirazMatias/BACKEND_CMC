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
    const turmaCriada = await Turmas.create(req.body);
    console.log("turmaCriada", turmaCriada);
    return res.send("Deu certo viadinho")
};