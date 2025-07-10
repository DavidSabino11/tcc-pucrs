CREATE DATABASE biblioteca;
USE biblioteca;

CREATE TABLE Autores (
  id_autor INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE Categorias (
  id_categoria INTEGER PRIMARY KEY AUTOINCREMENT,
  descricao VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE Livros (
  id_livro INTEGER PRIMARY KEY AUTOINCREMENT,
  titulo VARCHAR(150) NOT NULL,
  preco DECIMAL(10,2) CHECK (preco >= 0),
  id_autor INTEGER,
  id_categoria INTEGER,
  FOREIGN KEY (id_autor) REFERENCES Autores(id_autor),
  FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

CREATE TABLE Usuarios (
  id_usuario INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(150) UNIQUE
);

CREATE TABLE Emprestimos (
  id_emprestimo INTEGER PRIMARY KEY AUTOINCREMENT,
  id_livro INTEGER,
  id_usuario INTEGER,
  data_emprestimo DATE NOT NULL,
  data_devolucao DATE,
  FOREIGN KEY (id_livro) REFERENCES Livros(id_livro),
  FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);
