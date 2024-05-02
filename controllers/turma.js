const Turmas = require('../models/turma');
exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll();
    res.json(turmas)
};

//Procurando turma por id
exports.getById = async (req, res) => {
    const idDoParamTur = req.params.id;
    const turmaEncontrada = await Turmas.findOne({ idTurmas: idDoParamTur });
    res.json(turmaEncontrada)
};

//Criação e verificação de turmas com msm codigo
exports.createTurma = async (req, res) => {
    const turmasCadastrado = await Turmas.findOne({ where: { codigo: req.body.codigo } });
    if (turmasCadastrado) {
        return res.send('Já existe uma turma cadastrada neste codigo, viadinho.')
    }

    const turmaCriada = await Turmas.create(req.body);
    console.log("turmaCriada", turmaCriada);
    return res.send("Deu certo viadinho.")
};

//Dar update em turmas (trocar nome e outros)
exports.updateTurma = async (req, res) => {
    const codigoTurma = req.params.updateTurma;
    try {
        const turmasCadastrado = await Turmas.findOne({ where: { codigo: req.body.codigo } });
        if (turmasCadastrado) {
            return res.send('Já existe uma turma cadastrada neste codigo, viadinho.')
        }

        if (turmasCadastrado) {
            delete req.body.codigo;

            const [numRowUpdated] = await Turmas.update(req.body, {
                where: { codigo: codigoTurma }
            });
        }
    } catch (error) {

    }
}