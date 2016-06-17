exports.up = function(knex, Promise) {
  return knex.schema.table('petpeeve', function(table){
    table.dropColumn('pet_comment_id');

    })
};

exports.down = function(knex, Promise) {

};
