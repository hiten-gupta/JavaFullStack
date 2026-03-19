CREATE DATABASE IF NOT EXISTS funfit_db;
USE funfit_db;
 
-- Batch table
CREATE TABLE batch (
    bid   INT PRIMARY KEY AUTO_INCREMENT,
    name  VARCHAR(256) NOT NULL,
    slot  VARCHAR(256) NOT NULL,   -- 'Morning' or 'Evening'
    time  VARCHAR(256) NOT NULL    -- e.g. '07:00 AM - 08:00 AM'
);
 
-- Participant table (foreign key to batch)
CREATE TABLE participant (
    pid   INT PRIMARY KEY AUTO_INCREMENT,
    name  VARCHAR(256) NOT NULL,
    phone VARCHAR(256),
    email VARCHAR(256),
    bid   INT,
    CONSTRAINT FK_ParticipantBatch
        FOREIGN KEY (bid) REFERENCES batch(bid)
);
 
-- Optional sample data
INSERT INTO batch (name, slot, time) VALUES
    ('Zumba Beginners A',    'Morning', '06:00 AM - 07:00 AM'),
    ('Zumba Advanced C',     'Evening', '06:00 PM - 07:00 PM');
 
INSERT INTO participant (name, phone, email, bid) VALUES
    ('Alice Johnson', '+91 98765 43210', 'alice@example.com', 1),
    ('Bob Smith',     '+91 87654 32109', 'bob@example.com',   1);
