
exports.up = function(knex, Promise) {
  return knex.schema.createTable('petpeeve', function(table){
    table.increments();
    table.string('title');
    table.string('description');
    table.string('comment');
    table.integer('dislikes');
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('petpeeve');
};
