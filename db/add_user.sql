INSERT INTO homies (name, email, profile_img)
VALUES (${name}, ${email}, ${profile_img})
RETURNING homie_id;