function toDoList(object){
  this.morning = object.morning;
  this.afternoon = object.afternoon;
  this.evening = object.evening;
  toDoList.all.push(this);
}


toDoList.all = [
  {morning:"Wake up at 7:00am,Walk mino for 10 minutes,Watch video about Node.js,Go to school",
  afternoon:  "Walk mino for another 10 minutes",
  evening:"Do the homework,Review today's lecture,Try to sleep at 11:30pm"}
]
module.exports = toDoList;
