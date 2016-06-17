
exports.up = function(knex, Promise) {
  return knex.schema.createTable('petpeeve', function(table){
    table.increments();
    table.string('title');
    table.string('description');
    table.integer('pet_comments_id')
    table.string('image');
    table.integer('dislikes');
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('petpeeve');
};
