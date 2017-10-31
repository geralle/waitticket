
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('tickets', (table)=>{
      table.increments().primary()
      table.string('event')
      table.string('date')
      table.string('time')
      table.string('venue')
      table.string('location')
      table.string('type')
      table.string('pdf_link')
      table.string('user_id')
    })
  ])
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('tickets')
};
