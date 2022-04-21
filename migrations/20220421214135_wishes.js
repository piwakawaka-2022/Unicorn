exports.up = function (knex) {
  return knex.schema.createTable('wishes', (table) => {
    table.increments('id').primary()
    table.string('title')
    table.string('description')
    table.string('img')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('wishes')
}
