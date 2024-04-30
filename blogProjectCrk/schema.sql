CREATE TABLE IF NOT EXISTS general_content(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    theme TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    userpassword TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS my_cookies(
    id INT AUTO_INCREMENT PRIMARY KEY,
    cookie_name TEXT,
    typeCookie TEXT,
    battle_role VARCHAR(255),
    ability TEXT,
    content TEXT NOT NULL,
    skins TEXT,
    rarity TEXT,
    magicCandyLevel INT,
    stateCookie VARCHAR(200),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
