SELECT id, title, link, description, img, topic, alpha FROM resourceCards
WHERE lower(topic) ilike $1;