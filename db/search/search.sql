SELECT title, link, img FROM resourceCards
WHERE lower(title) like $1;