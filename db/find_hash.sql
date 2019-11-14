SELECT * FROM homies h
JOIN homies_hash hh ON h.homie_id = hh.homie_id
WHERE email = $1;