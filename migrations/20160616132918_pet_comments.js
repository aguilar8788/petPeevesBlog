
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pet_comments', function(table){
    table.increments();
    table.integer('petpeeve_id');
    table.integer('comments_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pet_comments');
};
