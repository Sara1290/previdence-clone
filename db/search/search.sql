SELECT id, title, link, description, img, topic FROM resourceCards
WHERE lower(topic) like $1;