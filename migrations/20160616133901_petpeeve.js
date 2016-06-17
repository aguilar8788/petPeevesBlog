
exports.up = function(knex, Promise) {
  return knex.schema.table('petpeeve', function(table){
    table.integer('pet_comment_id').unsigned().references('id').inTable('pet_comments');

    })
};

exports.down = function(knex, Promise) {
 return knex.schema.table('petpeeve', function(table){
   table.dropColumn('alliance');
   table.integer('alliance');
 });
};
