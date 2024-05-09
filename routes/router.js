const express = require('express');
const router = express.Router();

// Importa os controladores de usuário e turma
const usuarioController = require("../controllers/usuario");
const turmaController = require("../controllers/turma");

// Rotas para operações relacionadas a usuários
router.get('/usuario', usuarioController.getAll); // Rota para buscar todos os usuários
router.get('/usuario/:id', usuarioController.getById); // Rota para buscar um usuário por ID
router.put('/usuario/:cpf', usuarioController.updateUsuario); // Rota para atualizar um usuário por CPF
router.post('/usuario', usuarioController.createUsuario); // Rota para criar um novo usuário

// Rotas para operações relacionadas a turmas
router.get('/turma', turmaController.getAll); // Rota para buscar todas as turmas
router.get('/turma/:id', turmaController.getById); // Rota para buscar uma turma por ID
router.put('/turma/:codigo', turmaController.updateTurma); // Rota para atualizar uma turma por código
router.post('/turma', turmaController.createTurma); // Rota para criar uma nova turma

module.exports = router; // Exporta o roteador com as rotas definidas para ser utilizado na aplicação
