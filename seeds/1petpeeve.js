var knex = require('../db/knex');

function findComment(comments, title){
console.log(title)
var result;
  comments.forEach(function(comment){

      if( comment.blog_title == title){
        console.log(comment.id)

        result = comment.id;

    }
  })
  return result;
}


exports.seed = function(knex, Promise) {
    knex.schema.raw("TRUNCATE comments RESTART IDENTITY CASCADE")
    return Promise.all([
      knex('pet_comments').del(),
       knex('petpeeve').del(),
       knex('comments').del()

    ]).then(function(){

  return Promise.all([
    knex('comments').insert({comment: 'I hate that too!!', blog_title: 'I Only Like Pizza'}),
    knex('comments').insert({comment: 'Pizza is amazing!!', blog_title: 'I Only Like Pizza'})
    ])
  }).then(function(){
      return knex('comments').select();
    }).then(function(comments){



     return knex('petpeeve').insert({title: 'I Only Like Pizza', description: 'I Only Like Pizza', image:'', dislikes: 0, comment_id: findComment(comments, 'I Only Like Pizza')})


  })
};
