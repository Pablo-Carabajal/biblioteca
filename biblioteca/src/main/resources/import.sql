-- =======================
-- AUTORES
-- =======================
INSERT INTO autores (nombre, apellido) VALUES ('Gabriel', 'García Márquez');
INSERT INTO autores (nombre, apellido) VALUES ('Jorge Luis', 'Borges');
INSERT INTO autores (nombre, apellido) VALUES ('Julio', 'Cortázar');
INSERT INTO autores (nombre, apellido) VALUES ('Isabel', 'Allende');
INSERT INTO autores (nombre, apellido) VALUES ('Mario', 'Vargas Llosa');
INSERT INTO autores (nombre, apellido) VALUES ('Ernesto', 'Sábato');
INSERT INTO autores (nombre, apellido) VALUES ('Carlos', 'Fuentes');
INSERT INTO autores (nombre, apellido) VALUES ('Laura', 'Esquivel');
INSERT INTO autores (nombre, apellido) VALUES ('Eduardo', 'Galeano');
INSERT INTO autores (nombre, apellido) VALUES ('Ricardo', 'Piglia');

-- =======================
-- LIBROS
-- =======================
-- Gabriel García Márquez (id_autor = 1)
INSERT INTO libros (id_autor, editorial, titulo) VALUES (1, 'Sudamericana', 'Cien años de soledad');
INSERT INTO libros (id_autor, editorial, titulo) VALUES (1, 'Sudamericana', 'El coronel no tiene quien le escriba');

-- Jorge Luis Borges (id_autor = 2)
INSERT INTO libros (id_autor, editorial, titulo) VALUES (2, 'Emecé', 'Ficciones');
INSERT INTO libros (id_autor, editorial, titulo) VALUES (2, 'Emecé', 'El Aleph');

-- Julio Cortázar (id_autor = 3)
INSERT INTO libros (id_autor, editorial, titulo) VALUES (3, 'Sudamericana', 'Rayuela');

-- Isabel Allende (id_autor = 4)
INSERT INTO libros (id_autor, editorial, titulo) VALUES (4, 'Plaza & Janés', 'La casa de los espíritus');

-- Mario Vargas Llosa (id_autor = 5)
INSERT INTO libros (id_autor, editorial, titulo) VALUES (5, 'Alfaguara', 'La ciudad y los perros');
INSERT INTO libros (id_autor, editorial, titulo) VALUES (5, 'Alfaguara', 'Conversación en La Catedral');

-- Ernesto Sábato (id_autor = 6)
INSERT INTO libros (id_autor, editorial, titulo) VALUES (6, 'Seix Barral', 'El túnel');
INSERT INTO libros (id_autor, editorial, titulo) VALUES (6, 'Seix Barral', 'Sobre héroes y tumbas');
