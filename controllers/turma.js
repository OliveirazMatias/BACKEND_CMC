const Turmas = require('../models/turma');

// Função para buscar todas as turmas
exports.getAll = async (req, res) => {
    const turmas = await Turmas.findAll(); // Encontra todas as turmas no banco de dados
    res.json(turmas); // Retorna as turmas encontradas em formato JSON
};

// Função para buscar uma turma por ID
exports.getById = async (req, res) => {
    const idDoParamTur = req.params.id; // Obtém o ID da turma a partir dos parâmetros da requisição
    const turmaEncontrada = await Turmas.findOne({ idTurmas: idDoParamTur }); // Encontra a turma com o ID especificado
    res.json(turmaEncontrada); // Retorna a turma encontrada em formato JSON
};

// Função para criar uma nova turma e verificar se já existe uma turma com o mesmo código
exports.createTurma = async (req, res) => {
    const turmasCadastrado = await Turmas.findOne({ where: { codigo: req.body.codigo } }); // Verifica se já existe uma turma com o mesmo código
    if (turmasCadastrado) {
        return res.send('Já existe uma turma cadastrada neste código.'); // Retorna uma mensagem caso a turma já exista
    }

    const turmaCriada = await Turmas.create(req.body); // Cria uma nova turma com os dados recebidos na requisição
    console.log("turmaCriada", turmaCriada); // Exibe no console a turma criada (apenas para fins de debug)
    return res.send("Turma cadastrada com sucesso."); // Retorna uma mensagem de sucesso após cadastrar a turma
};

// Função para atualizar uma turma (trocar nome e outros atributos)
exports.updateTurma = async (req, res) => {
    const codigoTurma = req.params.codigo; // Obtém o código da turma a ser atualizada dos parâmetros da requisição
    try {
        const turmasCadastrado = await Turmas.findOne({ where: { codigo: codigoTurma } }); // Busca a turma pelo código
        if (turmasCadastrado) {
            delete req.body.codigo; // Remove o código do corpo da requisição, pois não deve ser alterado
            await turmasCadastrado.update(req.body); // Atualiza os atributos da turma com os dados recebidos na requisição
            
            return res.json({ message: 'Turma atualizada com sucesso', turma: turmasCadastrado }); // Retorna uma mensagem de sucesso e a turma atualizada em formato JSON
        } else {
            return res.send('Turma não encontrada.'); // Retorna uma mensagem caso a turma não seja encontrada
        }
    } catch (error) {
        // Tratamento de erros
        console.error('Erro ao atualizar a turma:', error);
        return res.status(500).json({ error: 'Erro ao atualizar a turma' }); // Retorna um erro caso ocorra algum problema na atualização da turma
    }
};
