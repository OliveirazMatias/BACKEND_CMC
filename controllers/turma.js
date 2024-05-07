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
    const codigoTurma = req.params.codigo;
    try {
        const turmasCadastrado = await Turmas.findOne({ where: { codigo: codigoTurma } });
        if (turmasCadastrado) {
            delete req.body.codigo;
            await turmasCadastrado.update(req.body);
            
            return res.json({ message: 'Turma atualizada com sucesso', turma: turmasCadastrado });
        } 
    } catch (error) {
        // Tratamento de erros
        console.error('Erro ao atualizar a turma:', error);
        return res.status(500).json({ error: 'Erro ao atualizar a turma' });
    }
};