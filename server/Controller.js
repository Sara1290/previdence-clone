
module.exports = {
  getAll: async (req, res) => {
    let { search } = req.query;
    const db = await req.app.get('db')
    
    // return db.resources.get_all()
    // .then(resources => res.status(200).send(resources))
    // .catch((err) => console.log(err));

    if (search){
        db.search.search([`%${search.toLowerCase()}%`])
        .then(resources => res.status(200).send(resources))
    } else {
         db.resources.get_all()
        .then(resources => res.status(200).send(resources))
    }
  }
}
