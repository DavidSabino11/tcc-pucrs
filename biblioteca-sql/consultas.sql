SELECT L.titulo, C.descricao AS categoria FROM Livros L JOIN Categorias C ON L.id_categoria = C.id_categoria;

SELECT L.titulo, U.nome AS usuario
FROM Emprestimos E
JOIN Livros L ON E.id_livro = L.id_livro
JOIN Usuarios U ON E.id_usuario = U.id_usuario
WHERE E.data_devolucao IS NULL;

SELECT A.nome AS autor, COUNT(L.id_livro) AS total_livros
FROM Autores A
LEFT JOIN Livros L ON A.id_autor = L.id_autor
GROUP BY A.nome;

SELECT titulo, preco
FROM Livros
WHERE preco > (SELECT AVG(preco) FROM Livros);
