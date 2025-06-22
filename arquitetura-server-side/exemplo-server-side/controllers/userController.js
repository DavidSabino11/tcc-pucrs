let usuarios = [];
let idAtual = 1;

exports.criarUsuario = (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "Nome e email são obrigatórios." });
  }

  const novoUsuario = {
    id: idAtual++,
    nome,
    email
  };

  usuarios.push(novoUsuario);
  res.status(201).json({ mensagem: "Usuário criado com sucesso.", usuario: novoUsuario });
};

exports.listarUsuarios = (req, res) => {
  res.json(usuarios);
};

exports.buscarUsuarioPorId = (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find((u) => u.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado." });
  }

  res.json(usuario);
};

exports.atualizarUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, email } = req.body;

  const index = usuarios.findIndex((u) => u.id === id);
  if (index === -1) {
    return res.status(404).json({ erro: "Usuário não encontrado." });
  }

  if (nome) usuarios[index].nome = nome;
  if (email) usuarios[index].email = email;

  res.json({ mensagem: "Usuário atualizado com sucesso.", usuario: usuarios[index] });
};

exports.removerUsuario = (req, res) => {
  const id = parseInt(req.params.id);
  const index = usuarios.findIndex((u) => u.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Usuário não encontrado." });
  }

  usuarios.splice(index, 1);
  res.json({ mensagem: "Usuário removido com sucesso." });
};
