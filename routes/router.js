const express = require('express');
const router = express.Router();
const usuarioController = require("../controllers/usuario")
const turmaController = require("../controllers/turma")

router.get('/usuario', usuarioController.getAll);
router.get('/usuario/:id', usuarioController.getById);

router.post('/usuario', usuarioController.createUsuario);

router.get('/turma', turmaController.getAll);
router.get('/turma/:id', turmaController.getById);

router.post('/turma', turmaController.createTurma);

module.exports = router;