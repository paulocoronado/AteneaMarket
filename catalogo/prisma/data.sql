-- Datos de prueba para el modelo Product
INSERT INTO Product (id, name, description, price, quantity)
VALUES 
(1, 'iPhone 13', 'El último iPhone del mercado', 999, 100),
(2, 'Macbook Pro', 'Portátil profesional de Apple', 1299, 50),
(3, 'iPad Pro', 'Tablet de Apple', 799, 70),
(4, 'Samsung Galaxy S21', 'El último Samsung Galaxy', 899, 80),
(5, 'Dell XPS 15', 'Portátil profesional de Dell', 1199, 60),
(6, 'Google Pixel 6', 'El último Google Pixel', 699, 90),
(7, 'Amazon Echo Dot', 'Altavoz inteligente de Amazon', 49, 200),
(8, 'Apple Watch Series 7', 'El último reloj inteligente de Apple', 399, 120),
(9, 'Samsung Galaxy Watch 4', 'El último reloj inteligente de Samsung', 349, 130),
(10, 'Google Nest Mini', 'Altavoz inteligente de Google', 49, 210);

-- Datos de prueba para el modelo Category
INSERT INTO Category (id, name, title, description)
VALUES 
(1, 'Smartphones', 'Los últimos smartphones del mercado', 'Una amplia gama de smartphones de alta calidad.'),
(2, 'Laptops', 'Los últimos portátiles del mercado', 'Una amplia gama de portátiles de alta calidad.'),
(3, 'Tablets', 'Las últimas tablets del mercado', 'Una amplia gama de tablets de alta calidad.'),
(4, 'Smartwatches', 'Los últimos relojes inteligentes del mercado', 'Una amplia gama de relojes inteligentes de alta calidad.'),
(5, 'Smart speakers', 'Los últimos altavoces inteligentes del mercado', 'Una amplia gama de altavoces inteligentes de alta calidad.');

-- Datos de prueba para el modelo User
INSERT INTO User (id, name, email, address, phone)
VALUES 
(1, 'John Doe', 'john@example.com', '123 Main St', '555-555-5555'),
(2, 'Jane Doe', 'jane@example.com', '456 Main St', '555-555-5556'),
(3, 'Bob Smith', 'bob@example.com', '789 Main St', '555-555-5557');

-- Datos de prueba para el modelo Sale
INSERT INTO Sale (id, idProduct, quantity, date)
VALUES 
(1, 1, 2, '2023-07-01'),
(2, 2, 1, '2023-07-02'),
(3, 3, 2, '2023-07-03'),
(4, 4, 1, '2023-07-04'),
(5, 5, 1, '2023-07-05'),
(6, 6, 2, '2023-07-06'),
(7, 7, 3, '2023-07-07'),
(8, 8, 1, '2023-07-08'),
(9, 9, 1, '2023-07-09'),
(10, 10, 2, '2023-07-10');

-- Asegúrate de poblar también los modelos de relación como ProductPhoto, ProductCategory, Cart etc., con datos coherentes.
-- Datos de prueba para el modelo ProductPhoto
INSERT INTO ProductPhoto (idProduct, idPhoto)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10);

-- Datos de prueba para el modelo CategoryPhoto
INSERT INTO CategoryPhoto (idCategory, idPhoto)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5);

-- Datos de prueba para el modelo ProductCategory
INSERT INTO ProductCategory (idProduct, idCategory)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 1),
(5, 2),
(6, 1),
(7, 5),
(8, 4),
(9, 4),
(10, 5);

-- Datos de prueba para el modelo Cart
INSERT INTO Cart (id, productId, quantity, userId)
VALUES 
(1, 1, 1, 1),
(2, 2, 1, 1),
(3, 3, 1, 1),
(4, 4, 1, 2),
(5, 5, 1, 2),
(6, 6, 1, 2),
(7, 7, 1, 3),
(8, 8, 1, 3),
(9, 9, 1, 3),
(10, 10, 1, 3);

-- Datos de prueba para el modelo Stock
INSERT INTO Stock (id, idProduct, quantity, date)
VALUES 
(1, 1, 100, '2023-06-30'),
(2, 2, 50, '2023-06-30'),
(3, 3, 70, '2023-06-30'),
(4, 4, 80, '2023-06-30'),
(5, 5, 60, '2023-06-30'),
(6, 6, 90, '2023-06-30'),
(7, 7, 200, '2023-06-30'),
(8, 8, 120, '2023-06-30'),
(9, 9, 130, '2023-06-30'),
(10, 10, 210, '2023-06-30');
