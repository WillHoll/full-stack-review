CREATE TABLE homies (
    homie_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR,
    profile_img TEXT
);

CREATE TABLE homies_hash (
    hash_id SERIAL PRIMARY KEY,
    hash TEXT,
    homie_id INT REFERENCES homies(homie_id)
);

CREATE TABLE posts (
    post_id SERIAL PRIMARY KEY,
    title VARCHAR(40),
    img_url TEXT,
    content TEXT,
    likes INT,
    homie_id INT REFERENCES homies(homie_id)
);

INSERT INTO homies (name, email, profile_img)
VALUES ('Will', 'Will@than.com', 'http://jhberry.com/wp-content/uploads/2017/05/Will-Hollingsowrth-337x506.jpg'),
('Honathan', 'jon@than.com', 'https://thefga.org/wp-content/uploads/2017/10/Ingram_Headshot_sq-574x574.jpg');

INSERT INTO homies_hash (hash, homie_id)
VALUES ('password', 11),
('s3cret', 12);

INSERT INTO posts (title, img_url, content, likes, homie_id)
VALUES ('Cute Dog', 'https://www.petguide.com/wp-content/uploads/2015/03/bernedoodle-11.jpg', 'Bernedoodles are cute', 0, 11),
('Hot Dogs', 'https://static01.nyt.com/images/2019/05/21/dining/kwr-mexican-hot-dogs/kwr-mexican-hot-dogs-articleLarge.jpg', 'Hot dogs from Mexico', 0, 12);


