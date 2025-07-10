INSERT INTO Autores (nome) VALUES ('Machado de Assis'), ('Clarice Lispector'), ('George Orwell');

INSERT INTO Categorias (descricao) VALUES ('Romance'), ('Ficção Científica'), ('Ensaios');

INSERT INTO Livros (titulo, preco, id_autor, id_categoria) VALUES ('Dom Casmurro', 35.90, 1, 1), ('A Hora da Estrela', 29.50, 2, 1), ('1984', 42.00, 3, 2);

INSERT INTO Usuarios (nome, email) VALUES ('João Silva', 'joao.silva@email.com'), ('Maria Souza', 'maria.souza@email.com');

INSERT INTO Emprestimos (id_livro, id_usuario, data_emprestimo, data_devolucao) VALUES (1, 1, '2025-06-01', NULL), (3, 2, '2025-06-02', '2025-06-04');