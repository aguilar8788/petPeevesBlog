
exports.up = function(knex, Promise) {
  return knex.schema.table('petpeeve', function(table){
    table.integer('pet_comments_id');
    table.dropColumn('comment');
    table.string('image');
  })
};

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('petpeeve');
};
