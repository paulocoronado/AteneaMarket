-- Inserting data into the User table
INSERT INTO User (name, email, address, phone)
VALUES 
('John Doe', 'john.doe@example.com', '123 Main St, City', '123-456-7890'),
('Jane Smith', 'jane.smith@example.com', '456 Elm St, City', '987-654-3210'),
('Alice Johnson', 'alice.johnson@example.com', '789 Oak St, City', '555-123-4567'),
('Bob Williams', 'bob.williams@example.com', '789 Pine St, City', '777-888-9999'),
('Charlie Davis', 'charlie.davis@example.com', '321 Maple St, City', '111-222-3333');

INSERT INTO Photo (url, description) VALUES
('http://example.com/photo1.jpg', 'Description for photo 1'),
('http://example.com/photo2.jpg', 'Description for photo 2'),
('http://example.com/photo3.jpg', 'Description for photo 3'),
('http://example.com/photo4.jpg', 'Description for photo 4'),
('http://example.com/photo5.jpg', 'Description for photo 5'),
('http://example.com/photo6.jpg', 'Description for photo 6'),
('http://example.com/photo7.jpg', 'Description for photo 7'),
('http://example.com/photo8.jpg', 'Description for photo 8'),
('http://example.com/photo9.jpg', 'Description for photo 9'),
('http://example.com/photo10.jpg', 'Description for photo 10'),
('http://example.com/photo11.jpg', 'Description for photo 11'),
('http://example.com/photo12.jpg', 'Description for photo 12'),
('http://example.com/photo13.jpg', 'Description for photo 13'),
('http://example.com/photo14.jpg', 'Description for photo 14'),
('http://example.com/photo15.jpg', 'Description for photo 15'),
('http://example.com/photo16.jpg', 'Description for photo 16'),
('http://example.com/photo17.jpg', 'Description for photo 17'),
('http://example.com/photo18.jpg', 'Description for photo 18'),
('http://example.com/photo19.jpg', 'Description for photo 19'),
('http://example.com/photo20.jpg', 'Description for photo 20');


-- Inserting data into the Category table
INSERT INTO Category (name, title, description)
VALUES 
('Electronics', 'Electronics', 'Category for electronic products'),
('Books', 'Books', 'Category for books'),
('Clothing', 'Clothing', 'Category for clothing items'),
('Kitchen', 'Kitchen', 'Category for kitchen products'),
('Sports', 'Sports', 'Category for sports items');

-- Inserting data into the Product table
INSERT INTO Product (name, description, price, quantity)
VALUES 
('iPhone 13', 'Latest smartphone', 999, 10),
('Samsung Galaxy S22', 'Flagship smartphone', 899, 5),
('Dell Laptop', 'High-performance laptop', 1499, 3),
('Sony PlayStation 5', 'Gaming console', 499, 20),
('Nike Shoes', 'Running shoes', 99, 15),
('Casio Watch', 'Analog wristwatch', 79, 8),
('Kindle Paperwhite', 'E-book reader', 129, 12),
('Canon DSLR Camera', 'Professional camera', 1499, 6),
('Bose Headphones', 'Noise-cancelling headphones', 299, 10);

-- Inserting data into the Cart table
INSERT INTO Cart (productId, quantity, userId)
VALUES 
(1, 1, 1),
(2, 2, 1),
(3, 1, 2),
(4, 1, 2),
(5, 1, 3),
(6, 2, 3),
(7, 1, 4),
(8, 2, 4),
(9, 1, 5),
(10, 2, 5);

-- Inserting data into the Stock table
INSERT INTO Stock (productId, quantity, lastUpdate)
VALUES 
(1, 10, '2023-06-01'),
(2, 5, '2023-06-01'),
(3, 3, '2023-06-01'),
(4, 20, '2023-06-01'),
(5, 15, '2023-06-01'),
(6, 8, '2023-06-01'),
(7, 12, '2023-06-01'),
(8, 6, '2023-06-01'),
(9, 10, '2023-06-01'),
(10, 5, '2023-06-01');

-- Inserting data into the Sale table
INSERT INTO Sale (productId, quantity, userId, date)
VALUES 
(1, 1, 1, '2023-06-01'),
(2, 2, 1, '2023-06-01'),
(3, 1, 2, '2023-06-01'),
(4, 1, 2, '2023-06-01'),
(5, 1, 3, '2023-06-01'),
(6, 2, 3, '2023-06-01'),
(7, 1, 4, '2023-06-01'),
(8, 2, 4, '2023-06-01'),
(9, 1, 5, '2023-06-01'),
(10, 2, 5, '2023-06-01');

-- Inserting data into the ProductPhoto table
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

-- Inserting data into the CategoryPhoto table
INSERT INTO CategoryPhoto (idCategory, idPhoto)
VALUES 
(1, 11),
(2, 12),
(3, 13),
(4, 14),
(5, 15);

-- Inserting data into the ProductCategory table
INSERT INTO ProductCategory (idProduct, idCategory)
VALUES 
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 1),
(7, 2),
(8, 3),
(9, 4),
(10, 5);



PRAGMA foreign_keys = OFF;

-- Truncate the Sale table
DELETE FROM Sale;

-- Truncate the Stock table
DELETE FROM Stock;

-- Truncate the Cart table
DELETE FROM Cart;

-- Truncate the ProductPhoto table
DELETE FROM ProductPhoto;

-- Truncate the CategoryPhoto table
DELETE FROM CategoryPhoto;

-- Truncate the ProductCategory table
DELETE FROM ProductCategory;

-- Truncate the User table
DELETE FROM User;

-- Truncate the Category table
DELETE FROM Category;

-- Truncate the Product table
DELETE FROM Product;

-- Truncate the Photo table
DELETE FROM Photo;

DELETE FROM sqlite_sequence;

PRAGMA foreign_keys = ON;

