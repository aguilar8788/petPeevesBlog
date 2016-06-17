exports.up = function(knex, Promise) {
  return knex.schema.table('pet_comments', function(table){
    table.dropColumn('petpeeve_id');
    table.dropColumn('comments_id');
  }).then(function () {
    knex.schema.table('pet_comments', function(table){
      table.integer('Petpeeve_id').unsigned().references('id').inTable('petpeeve');
      table.integer('Comments_id').unsigned().references('id').inTable('comments');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('pet_comments', function(table){
    table.dropColumn('Petpeeve_id');
    table.dropColumn('Comments_id');
    table.integer('petpeeve_id');
    table.integer('comments_id');
  });
};
