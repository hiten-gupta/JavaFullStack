-- Step 1: Create the database
CREATE DATABASE IF NOT EXISTS client_manager;

-- Step 2: Use the database
USE client_manager;

-- Step 3: Create the clients table
CREATE TABLE IF NOT EXISTS clients (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  company VARCHAR(255)
);
