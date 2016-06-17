var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
var postTitle;

function getAllComments(data){
    var comments = [];
    data.forEach(function(data){
      for(var i = 0; i < data.length; i++){
      if(data[i].blog_title == postTitle){
        comments.push(data[i].comment);
      }
    }
  })
  return comments;
}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/add', function(req, res, next){
  res.render('add');
})


router.post('/:id/edit', function (req, res, next) {
  console.log(req.params)
  knex('petpeeve').where({id: req.params.id}).update(req.body).then(function () {
    res.redirect("/" + req.params.id)
  })
})

router.get('/:id/edit', function (req, res, next) {
  knex('petpeeve').where({id: req.params.id}).first().then(function (edit) {
    res.render("edit", {edit: edit})
  })
})


router.get('/feed', function(req, res, next){
  knex('petpeeve').select().then(function(tabledata){
  res.render('feed', {petpeeves: tabledata})
  })
})

router.get('/:id', function(req, res, next){
  return Promise.all([
  knex('petpeeve').where({id: req.params.id}).first(),
  knex('comment').from('comments')
]).then(function(data){
  postTitle = data[0].title;
    res.render('petpeeve', {petpeeve: data[0],
      comments: getAllComments(data)})
  })
})

router.get('/:id/delete', function(req, res, next){
  knex('petpeeve').where({id: req.params.id}).del().then(function(){
    res.redirect('/feed')
  })
})

router.post('/comment', function(req, res, next){
    req.body.blog_title = postTitle;
  knex('comments').insert(req.body).then(function(){
    res.redirect(req.get('referer'));
  })
})

router.post('/dislike', function(req, res, next){
  var parsed = req.body.dislikes
  console.log(parsed);
  knex('petpeeve').where({title: postTitle}).update('dislikes', parsed).then(function(){
    res.redirect(req.get('referer'));
  })
})


router.post('/add', function(req, res, next){
  req.body.dislikes = 0;

  knex('petpeeve').insert(req.body).then(function(){
    res.redirect('/feed');
  }).catch(function(err){
    console.log(err);
    next(err);
  })
})

module.exports = router;
