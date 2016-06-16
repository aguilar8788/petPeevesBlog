
exports.seed = function(knex, Promise) {

    return knex('petpeeve').del().then(function(){
      return Promise.all([

    knex('petpeeve').insert({title: 'I Only Like Pizza', description:'Why does all other food suck?' , comment:'', dislikes: 0}),
    knex('petpeeve').insert({title: 'I Hate Stupid Computers', description: 'My computer is always slow af!!', comment:'', dislikes: 0})
  ]);
  });
};
