exports.up = function(knex, Promise) {
  return knex.schema.table('petpeeve', function(table){
    table.integer('comment_id').unsigned().references('id').inTable('comments');

    })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('petpeeve', function(table){
   table.dropColumn('comment_id');
 });
};
