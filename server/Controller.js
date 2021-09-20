
module.exports = {
  getAll: async (req, res) => {
    let { search } = req.query;
    const db = await req.app.get('db')

    if (search){
        db.search.search([`%${search.toLowerCase()}%`])
        .then(resources => res.status(200).send(resources))
    } else {
        db.resources.getAll()
        .then(resources => res.status(200).send(resources))
    }
  }
}
