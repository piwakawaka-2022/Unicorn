const config = require('../../knexfile').development
const connection = require('knex')(config)

function getWishes(db = connection) {
  return db('wishes').select()
}

module.exports = {
  getWishes,
}
