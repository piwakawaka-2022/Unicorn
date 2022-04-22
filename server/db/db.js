const config = require('../../knexfile').development
const connection = require('knex')(config)

function getWishes(db = connection) {
  return db('wishes').select()
}

function saveWish(wishObj, db = connection) {
  return db('wishes').insert(wishObj)
}

module.exports = {
  getWishes,
  saveWish,
}
