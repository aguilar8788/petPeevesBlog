exports.up = function(knex, Promise) {
  return knex.schema.table('petpeeve', function(table){
    table.dropColumn('pet_comments_id');

    })
};

exports.down = function(knex, Promise) {

};
