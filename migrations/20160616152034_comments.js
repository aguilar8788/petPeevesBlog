exports.up = function(knex, Promise) {
  return knex.schema.table('comments', function(table){
    table.string('blog_title');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('comments', function(table){
    table.dropColumn('blog_title');
  });
};
