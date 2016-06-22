var express = require('express');
var router = express.Router();


var toDoList = [
  {morning:"Wake up at 7:00am,Walk mino for 10 minutes,Watch video about Node.js,Go to school",
  afternoon:  "Walk mino for another 10 minutes",
  evening:"Do the homework,Review today's lecture,Try to sleep at 11:30pm"}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.send(toDoList);
  res.render('toDoList/index', { title: 'My To Do List' , toDoList: toDoList });
});

router.get('/new', function(req, res, next){
 res.render('toDoList/new');
})

router.post('/', function( req, res, next){
  // console.log(req.body);
  toDoList.push(req.body);
  res.redirect('/toDoList');
})
module.exports = router;
